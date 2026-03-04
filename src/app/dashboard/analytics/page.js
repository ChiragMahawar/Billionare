import styles from './analytics.module.css';

export default function AnalyticsPage() {
    const usageData = [
        { date: '2026-02-21', tokens: '1.2M', cost: '$42.10', model: 'GPT-4o' },
        { date: '2026-02-20', tokens: '0.8M', cost: '$28.50', model: 'Claude 3' },
        { date: '2026-02-19', tokens: '2.1M', cost: '$72.00', model: 'GPT-4o' },
        { date: '2026-02-18', tokens: '1.5M', cost: '$51.20', model: 'Gemini Pro' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Usage Analytics</h1>
                <p>Granular breakdown of your AI consumption across the organization.</p>
            </div>

            <div className={styles.filterBar}>
                <div className={styles.filterGroup}>
                    <label>Provider</label>
                    <select><option>All Providers</option></select>
                </div>
                <div className={styles.filterGroup}>
                    <label>Model</label>
                    <select><option>All Models</option></select>
                </div>
                <button className={styles.exportBtn}>Export CSV</button>
            </div>

            <div className={`${styles.chartGrid} glass`}>
                <div className={styles.chartLegend}>
                    <span><i className={styles.dot1}></i> Prompt Tokens</span>
                    <span><i className={styles.dot2}></i> Completion Tokens</span>
                </div>
                <div className={styles.barChart}>
                    <div className={styles.bar} style={{ height: '60%' }}></div>
                    <div className={styles.bar} style={{ height: '80%' }}></div>
                    <div className={styles.bar} style={{ height: '45%' }}></div>
                    <div className={styles.bar} style={{ height: '90%' }}></div>
                    <div className={styles.bar} style={{ height: '70%' }}></div>
                </div>
            </div>

            <div className={`${styles.tableSection} glass`}>
                <h3>Daily Breakdown</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Tokens consumed</th>
                            <th>Total Cost</th>
                            <th>Primary Model</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usageData.map((row, i) => (
                            <tr key={i}>
                                <td>{row.date}</td>
                                <td>{row.tokens}</td>
                                <td className={styles.cost}>{row.cost}</td>
                                <td>{row.model}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
