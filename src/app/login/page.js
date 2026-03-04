import styles from './login.module.css';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <div className={styles.loginCard + ' glass'}>
                <div className={styles.header}>
                    <div className={styles.logoIcon}></div>
                    <h1>Welcome Back</h1>
                    <p>Sign in to your TokenFlow account</p>
                </div>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label>Email Address</label>
                        <input type="email" placeholder="name@company.com" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" />
                    </div>
                    <div className={styles.forgot}>
                        <Link href="#">Forgot password?</Link>
                    </div>
                    <button type="submit" className={styles.submitBtn}>Sign In</button>
                </form>

                <div className={styles.divider}>
                    <span>Or continue with</span>
                </div>

                <div className={styles.socialGrid}>
                    <button className={styles.socialBtn}>GitHub</button>
                    <button className={styles.socialBtn}>Google</button>
                </div>

                <p className={styles.footerText}>
                    Don't have an account? <Link href="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
