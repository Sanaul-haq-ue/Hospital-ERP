import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from '../../assets/css/Login.module.css'
import api from '../../api/axios'
import { toast } from 'react-toastify'



export default function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const hasShownToast = useRef(false);

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const handelSubmit = async (e) => {
        e.preventDefault()
        setErrorMsg('')
        setLoading(true)

        try {
            const res = await api.post('/login', { email, password })
            // console.log('Laravel Response:', res.data)

            if (res.data.success) {
                const { token, user } = res.data.data   // pull user out of the actual response

                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))

                const dashboardRoute = user.role?.dashboard_route || '/';

                navigate(dashboardRoute, {
                    state: { loggedIn: true }
                });
            }

        } catch (err) {
            if (err.response) {
                setErrorMsg(err.response.data.message || 'Login failed.')
            } else {
                setErrorMsg('Network error. Please check your connection.')
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (location.state?.loggedOut) {
            hasShownToast.current = true;
            toast.success('You have been logged out successfully.');
            navigate(location.pathname, { replace: true, state: {} });

        }
    }, [location, navigate])



    return (
        <div className={styles.loginPage}>

            {/* <!-- Ambient background blobs --> */}
            <div className={styles["ambient-bg"]}></div>

            <div className={styles["login-wrap"]}>

                {/* <!-- Logo Header --> */}
                <div className="text-center mb-4">
                    <div className={styles["logo-badge"] + " mb-3"}>
                        <span className="material-symbols-outlined" data-weight="fill">medical_services</span>
                    </div>
                    <h1 className="text-headline-lg text-on-background-tok m-0">ClinicHub</h1>
                    <p className="text-body-md text-on-surface-variant-tok mt-1 mb-0">Secure access to clinical systems</p>
                </div>

                {/* <!-- Login Card --> */}
                <div className={styles["login-card"]}>
                    <form noValidate onSubmit={handelSubmit}>

                        {errorMsg && (
                            <div className={`${styles["alert-error"]} mb-3`}>
                                <span className="material-symbols-outlined">error</span>
                                <span>{errorMsg}</span>
                            </div>
                        )}

                        {/* <!-- Email Field --> */}
                        <div className="mb-3">
                            <label htmlFor="email" className="text-label-md text-on-background-tok d-block mb-1">Email Address</label>
                            <div className={styles["field-icon-wrap"]}>
                                <span className={styles["field-icon"] + " material-symbols-outlined"}>mail</span>
                                <input type="email"
                                    className={styles["form-control"]}
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="doctor@clinichub.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* <!-- Password Field --> */}
                        <div className="mb-3">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <label htmlFor="password" className="text-label-md text-on-background-tok d-block m-0">Password</label>
                                <a href="#" className={`text-label-md ${styles["link-primary-tok"]}`}>Forgot Password?</a>
                            </div>
                            <div className={styles["field-icon-wrap"]}>
                                <span className={styles["field-icon"] + " material-symbols-outlined"}>lock</span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className={styles["form-control"] + " " + styles["has-toggle"]}
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    className={styles["toggle-visibility"]}
                                    id="togglePassword"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    onClick={() => setShowPassword(prev => !prev)}>

                                    <span className="material-symbols-outlined" id="toggleIcon">
                                        {showPassword ? "visibility" : "visibility_off"}
                                    </span>

                                </button>
                            </div>
                        </div>

                        {/* <!-- Remember Me --> */}
                        <div className="form-check d-flex align-items-center mb-4">
                            <input className={`${styles["form-check-input"]} me-2`} type="checkbox" id="remember-me" name="remember-me" />
                            <label className="form-check-label text-body-md text-on-surface-variant-tok" htmlFor="remember-me">
                                Remember this device for 30 days
                            </label>
                        </div>

                        {/* <!-- Submit Button --> */}
                        <button type="submit" className={styles["btn-primary-tok"]} disabled={loading}>
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>

                    </form>
                </div>

                {/* <!-- Footer Links --> */}
                <div className="mt-4 text-center">
                    <p className="text-body-sm text-on-surface-variant-tok m-0">
                        Need IT support? <a href="#" className={styles["link-primary-tok"]}>Contact Helpdesk</a>
                    </p>
                </div>

            </div>

        </div>
    )
}