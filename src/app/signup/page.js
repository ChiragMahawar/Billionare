import styles from '../login/login.module.css';
import Link from 'next/link';

export default function SignupPage() {
    return (
        <div className={styles.container}>
            <div className={styles.loginCard + ' glass'}>
                <div className={styles.header}>
                    <div className={styles.logoIcon}></div>
                    <h1>Create Your Account</h1>
                    <p>Start optimizing your AI spend today.</p>
                </div>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label>Full Name</label>
                        <input type="text" placeholder="Jane Doe" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Work Email</label>
                        <input type="email" placeholder="jane@company.com" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" />
                    </div>
                    <button type="submit" className={styles.submitBtn}>Create Account</button>
                </form>

                <p className={styles.footerText} style={{ marginTop: '2rem' }}>
                    Already have an account? <Link href="/login">Sign in</Link>
                </p>
            </div>
        </div>
    );
}
