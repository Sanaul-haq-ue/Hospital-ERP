import { useEffect, useState, useRef } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import api from "../../api/axios";

const IDLE_LIMIT = 15 * 60 * 1000 // 15 minutes
// const IDLE_LIMIT = 30 * 1000;

export default function ProtectedRoute() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [checking, setChecking] = useState(true)
  const [valid, setValid] = useState(false)
  // const idleTimerRef = useRef(null)

  useEffect(() => {
    if (!token) {
      setChecking(false)
      return
    }

    api.get('/user')
      .then(() => {
        setValid(true);
      })
      .catch((err) => {
        setValid(false);

        if (err.response?.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      })
      .finally(() => {
        setChecking(false);
      });

  }, [token])

  // useEffect(() => {
  //   if (!token || checking || !valid) return

  //   const logout = async () => {
  //     try {
  //       await api.post('/logout')
  //     } catch (e) {
  //       // token might already be gone/expired server-side — ignore and clear locally anyway
  //     } finally {
  //       localStorage.removeItem('token')
  //       localStorage.removeItem('user')
  //       navigate('/login', { state: { loggedOut: true } })
  //     }
  //   }

  //   const resetTimer = () => {
  //     if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
  //     idleTimerRef.current = setTimeout(logout, IDLE_LIMIT)
  //   }

  //   const events = ['mousemove', 'click', 'keydown', 'scroll', 'touchstart']
  //   events.forEach((e) => window.addEventListener(e, resetTimer))
  //   resetTimer()

  //   return () => {
  //     events.forEach((e) => window.removeEventListener(e, resetTimer))
  //     if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
  //   }
  // }, [token, checking, valid, navigate])



  useEffect(() => {
    if (!token || checking || !valid) return;

    const ACTIVITY_KEY = 'clinichub_last_activity';
    let idleTimer = null;
    let lastBroadcastAt = 0;
    let logoutStarted = false;

    const getLastActivity = () => {
      const value = Number(localStorage.getItem(ACTIVITY_KEY));
      return Number.isFinite(value) && value > 0 ? value : Date.now();
    };

    const scheduleTimer = () => {
      if (idleTimer) clearTimeout(idleTimer);

      const remaining =
        IDLE_LIMIT - (Date.now() - getLastActivity());

      idleTimer = setTimeout(
        logout,
        Math.max(remaining, 0)
      );
    };

    const logout = async () => {
      if (logoutStarted) return;

      const remaining =
        IDLE_LIMIT - (Date.now() - getLastActivity());

      if (remaining > 0) {
        scheduleTimer();
        return;
      }

      logoutStarted = true;

      try {
        await api.post('/logout');
      } catch (error) {
        // The token may already be expired or invalid.
      } finally {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem(ACTIVITY_KEY);

        navigate('/login', {
          replace: true,
          state: { loggedOut: true },
        });
      }
    };

    const recordActivity = () => {
      if (logoutStarted) return;

      const now = Date.now();

      if (now - lastBroadcastAt >= 250) {
        localStorage.setItem(ACTIVITY_KEY, String(now));
        lastBroadcastAt = now;
      }

      scheduleTimer();
    };

    const handleStorage = (event) => {
      if (event.key === ACTIVITY_KEY) {
        scheduleTimer();
      }

      if (event.key === 'token' && event.newValue === null) {
        if (idleTimer) clearTimeout(idleTimer);

        localStorage.removeItem('user');
        localStorage.removeItem(ACTIVITY_KEY);

        navigate('/login', {
          replace: true,
          state: { loggedOut: true },
        });
      }
    };

    if (!localStorage.getItem(ACTIVITY_KEY)) {
      localStorage.setItem(ACTIVITY_KEY, String(Date.now()));
    }

    const events = [
      'mousemove',
      'mousedown',
      'keydown',
      'scroll',
      'touchstart',
      'click',
    ];

    events.forEach((event) => {
      window.addEventListener(event, recordActivity, { passive: true });
    });

    window.addEventListener('storage', handleStorage);

    scheduleTimer();

    return () => {
      if (idleTimer) clearTimeout(idleTimer);

      events.forEach((event) => {
        window.removeEventListener(event, recordActivity);
      });

      window.removeEventListener('storage', handleStorage);
    };
  }, [token, checking, valid, navigate]);


  if (!token) {
    return <Navigate to="/login" replace />
  }

  if (checking) {
    return null // or a loading spinner
  }

  if (!valid) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}