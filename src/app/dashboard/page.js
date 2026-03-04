import styles from './dashboard.module.css';
import { mockStats, recentAlerts, modelUsage } from '@/lib/mockData';

export default function DashboardOverview() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>System Overview</h1>
                <div className={styles.datePicker}>Last 30 Days 📅</div>
            </div>

            {/* KPI Cards */}
            <div className={styles.statsGrid}>
                {mockStats.map((stat, i) => (
                    <div key={i} className={`${styles.statCard} glass`}>
                        <div className={styles.statHeader}>
                            <span className={styles.statLabel}>{stat.label}</span>
                            <span className={`${styles.trend} ${stat.positive ? styles.positive : styles.negative}`}>
                                {stat.trend}
                            </span>
                        </div>
                        <div className={styles.statValue}>{stat.value}</div>
                        <div className={styles.miniChart}>
                            {/* Simplified sparkline representation */}
                            <div className={styles.sparkline}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.mainGrid}>
                {/* Main Chart Placeholder */}
                <div className={`${styles.chartSection} glass`}>
                    <div className={styles.sectionTitle}>Spend Trend</div>
                    <div className={styles.chartPlaceholder}>
                        {/* In a real app, Chart.js would render here */}
                        <div className={styles.visualChart}>
                            <div className={styles.chartLine}></div>
                        </div>
                        <div className={styles.chartLabels}>
                            <span>Feb 01</span><span>Feb 05</span><span>Feb 10</span><span>Feb 15</span><span>Feb 20</span>
                        </div>
                    </div>
                </div>

                {/* Recent Alerts */}
                <div className={`${styles.alertsSection} glass`}>
                    <div className={styles.sectionTitle}>Real-time Alerts</div>
                    <div className={styles.alertsList}>
                        {recentAlerts.map(alert => (
                            <div key={alert.id} className={styles.alertItem}>
                                <div className={`${styles.alertDot} ${styles[alert.type]}`}></div>
                                <div className={styles.alertContent}>
                                    <div className={styles.alertMsg}>{alert.message}</div>
                                    <div className={styles.alertTime}>{alert.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={styles.viewAllBtn}>View All Alerts</button>
                </div>
            </div>

            {/* Model Usage Table */}
            <div className={`${styles.tableSection} glass`}>
                <div className={styles.sectionTitle}>Model Performance & Cost</div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Model Name</th>
                            <th>Total Calls</th>
                            <th>Total Cost</th>
                            <th>Efficiency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modelUsage.map((model, i) => (
                            <tr key={i}>
                                <td className={styles.modelName}>{model.name}</td>
                                <td>{model.calls}</td>
                                <td>{model.cost}</td>
                                <td>
                                    <span className={`${styles.statusBadge} ${styles[model.efficiency.toLowerCase()]}`}>
                                        {model.efficiency}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
