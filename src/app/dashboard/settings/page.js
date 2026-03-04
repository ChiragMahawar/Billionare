import styles from './settings.module.css';

export default function SettingsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Account Settings</h1>
                <p>Manage your organization, API keys, and billing.</p>
            </div>

            <div className={styles.section + ' glass'}>
                <h3>API Keys</h3>
                <p>Use these keys to authenticate your requests to the TokenFlow proxy.</p>
                <div className={styles.apiKeyRow}>
                    <code>tf_live_8239...x921</code>
                    <button className={styles.copyBtn}>Copy</button>
                </div>
                <button className={styles.newKeyBtn}>+ Generate New Key</button>
            </div>

            <div className={styles.section + ' glass'}>
                <h3>Billing Plan</h3>
                <div className={styles.planInfo}>
                    <div>
                        <strong>Professional Plan</strong>
                        <p>$199/month • Renews on March 21, 2026</p>
                    </div>
                    <button className={styles.changeBtn}>Change Plan</button>
                </div>
            </div>

            <div className={styles.section + ' glass'}>
                <h3>Notification Preferences</h3>
                <div className={styles.toggleRow}>
                    <span>Weekly Cost Reports</span>
                    <div className={styles.toggle}></div>
                </div>
                <div className={styles.toggleRow}>
                    <span>Budget Alerts (Critical)</span>
                    <div className={styles.toggleActive}></div>
                </div>
            </div>
        </div>
    );
}
