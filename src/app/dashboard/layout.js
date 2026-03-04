import styles from './layout.module.css';
import Link from 'next/link';

export default function DashboardLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarBrand}>
                    <div className={styles.logoIcon}></div>
                    <span>TokenFlow</span>
                </div>

                <nav className={styles.sidebarNav}>
                    <Link href="/dashboard" className={styles.navItemActive}>
                        <span className={styles.navIcon}>🏠</span> Overview
                    </Link>
                    <Link href="/dashboard/analytics" className={styles.navItem}>
                        <span className={styles.navIcon}>📊</span> Usage Analytics
                    </Link>
                    <Link href="/dashboard/optimize" className={styles.navItem}>
                        <span className={styles.navIcon}>✨</span> Optimization
                    </Link>
                    <Link href="/dashboard/routing" className={styles.navItem}>
                        <span className={styles.navIcon}>🏎️</span> Smart Routing
                    </Link>
                    <Link href="/dashboard/settings" className={styles.navItem}>
                        <span className={styles.navIcon}>⚙️</span> Settings
                    </Link>
                </nav>

                <div className={styles.sidebarFooter}>
                    <div className={styles.userProfile}>
                        <div className={styles.avatar}>JD</div>
                        <div className={styles.userInfo}>
                            <div className={styles.userName}>John Doe</div>
                            <div className={styles.userPlan}>Pro Plan</div>
                        </div>
                    </div>
                </div>
            </aside>

            <main className={styles.main}>
                <header className={styles.topHeader}>
                    <div className={styles.breadcrumb}>Dashboard / Overview</div>
                    <div className={styles.headerActions}>
                        <div className={styles.searchBar}>
                            <span>🔍</span>
                            <input type="text" placeholder="Search analytics..." />
                        </div>
                        <button className={styles.notificationBtn}>🔔</button>
                        <button className={styles.inviteBtn}>+ Invite Team</button>
                    </div>
                </header>

                <div className={styles.content}>
                    {children}
                </div>
            </main>
        </div>
    );
}
