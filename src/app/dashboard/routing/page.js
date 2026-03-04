import styles from './routing.module.css';

export default function RoutingPage() {
    const policies = [
        { name: 'Cost Optimized', description: 'Aggressively route to cheaper models like GPT-4o-mini for simple tasks.', active: true },
        { name: 'High Performance', description: 'Always use state-of-the-art models (GPT-4o, Claude 3.5 Opus).', active: false },
        { name: 'Balanced', description: 'Smart switching based on latency and cost thresholds.', active: false },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Smart Routing Policies</h1>
                <p>Configure how the Gateway handles model selection and failovers.</p>
            </div>

            <div className={styles.policyGrid}>
                {policies.map((p, i) => (
                    <div key={i} className={`${styles.policyCard} glass ${p.active ? styles.active : ''}`}>
                        <div className={styles.policyCheck}>{p.active ? '✅' : '○'}</div>
                        <div className={styles.policyInfo}>
                            <h3>{p.name}</h3>
                            <p>{p.description}</p>
                        </div>
                        <button className={styles.selectBtn}>{p.active ? 'Current' : 'Select'}</button>
                    </div>
                ))}
            </div>

            <div className={styles.gateWaySection + ' glass'}>
                <h3>Gateway Connection Link</h3>
                <p>Replace your standard API base URL with this to enable TokenFlow Hero features.</p>
                <div className={styles.codeBlock}>
                    <code>https://api.tokenflow.ai/v1</code>
                    <button>Copy URL</button>
                </div>
                <div className={styles.statusBadge}>Gateway Status: Active 🟢</div>
            </div>
        </div>
    );
}
