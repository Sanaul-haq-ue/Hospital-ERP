import { useEffect, useState, useRef } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import api from "../../api/axios";

const IDLE_LIMIT = 15 * 60 * 1000 // 15 minutes

export default function ProtectedRoute() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [checking, setChecking] = useState(true)
  const [valid, setValid] = useState(false)
  const idleTimerRef = useRef(null)

  useEffect(() => {
    if (!token) {
      setChecking(false)
      return
    }

    api.get('/user')
      .then(() => setValid(true))
      .catch(() => setValid(false))
      .finally(() => setChecking(false))
  }, [token])

  useEffect(() => {
    if (!token || checking || !valid) return

    const logout = async () => {
      try {
        await api.post('/logout')
      } catch (e) {
        // token might already be gone/expired server-side — ignore and clear locally anyway
      } finally {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/login', { state: { loggedOut: true } })
      }
    }

    const resetTimer = () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
      idleTimerRef.current = setTimeout(logout, IDLE_LIMIT)
    }

    const events = ['mousemove', 'click', 'keydown', 'scroll', 'touchstart']
    events.forEach((e) => window.addEventListener(e, resetTimer))
    resetTimer()

    return () => {
      events.forEach((e) => window.removeEventListener(e, resetTimer))
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    }
  }, [token, checking, valid, navigate])

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