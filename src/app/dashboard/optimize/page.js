import styles from './optimize.module.css';

export default function OptimizationPage() {
    const recommendations = [
        { id: 1, title: 'Compress System Prompts', savings: '$420/mo', impact: 'High', description: 'Remove redundant instructions from your GPT-4 system prompts. Estimated 15% token reduction.' },
        { id: 2, title: 'Downgrade to GPT-4o-mini', savings: '$1,100/mo', impact: 'Huge', description: 'Your "Classification" endpoint has 98% accuracy on GPT-4o-mini. Switching will reduce costs by 80%.' },
        { id: 3, title: 'Enable Semantic Caching', savings: '$250/mo', impact: 'Medium', description: 'Cache similar responses for your FAQ bot to avoid redundant API calls.' }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Optimization Engine</h1>
                <p>AI-powered suggestions to reduce your token burn.</p>
            </div>

            <div className={styles.grid}>
                {recommendations.map(rec => (
                    <div key={rec.id} className={`${styles.card} glass`}>
                        <div className={styles.cardHeader}>
                            <h3>{rec.title}</h3>
                            <span className={styles.savings}>{rec.savings} <small>saved/mo</small></span>
                        </div>
                        <p>{rec.description}</p>
                        <div className={styles.cardFooter}>
                            <span className={`${styles.impact} ${styles[rec.impact.toLowerCase()]}`}>
                                {rec.impact} Impact
                            </span>
                            <button className={styles.applyBtn}>Apply Optimization</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`${styles.routingSection} glass`}>
                <h3>Smart Routing Configuration</h3>
                <p>TokenFlow automatically routes to the best model based on your quality vs cost preference.</p>
                <div className={styles.sliderGroup}>
                    <div className={styles.sliderHeader}>
                        <span>Min Cost</span>
                        <span>Max Quality</span>
                    </div>
                    <input type="range" className={styles.slider} />
                </div>
                <button className={styles.saveBtn}>Update Routing Policy</button>
            </div>
        </div>
    );
}
