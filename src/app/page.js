import styles from './page.module.css';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.navContent}>
                    <div className={styles.logo}>
                        <div className={styles.logoIcon}></div>
                        <span>TokenFlow</span>
                    </div>
                    <nav className={styles.nav}>
                        <Link href="#features">Features</Link>
                        <Link href="#how-it-works">How It Works</Link>
                        <Link href="#pricing">Pricing</Link>
                        <Link href="/login" className={styles.loginBtn}>Login</Link>
                        <Link href="/signup" className={styles.ctaBtnSmall}>Get Started</Link>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroBackground}>
                        <div className={styles.blob1}></div>
                        <div className={styles.blob2}></div>
                    </div>

                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Next-Gen AI Cost Intelligence</div>
                        <h1 className={styles.title}>
                            Stop Overpaying for <span className="premium-gradient-text">AI APIs</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Unified visibility, intelligent routing, and 40% cost reduction for your LLM infrastructure.
                            The production-grade engine built for the AI-first world.
                        </p>
                        <div className={styles.ctaGroup}>
                            <Link href="/signup" className={styles.ctaMain}>Start Saving Now</Link>
                            <Link href="#demo" className={styles.ctaSecondary}>Watch Demo</Link>
                        </div>

                        <div className={styles.heroStats}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>$1.2M+</span>
                                <span className={styles.statLabel}>Saved by Users</span>
                            </div>
                            <div className={styles.statDivider}></div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>300+</span>
                                <span className={styles.statLabel}>Enterprise Teams</span>
                            </div>
                            <div className={styles.statDivider}></div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>99.9%</span>
                                <span className={styles.statLabel}>Uptime</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dynamic Features Section */}
                <section id="features" className={styles.features}>
                    <div className={styles.sectionHeader}>
                        <h2>Powerful Intelligence. <br />Precision Control.</h2>
                        <p>Everything you need to scale AI without breaking the bank.</p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.featureIcon}>📊</div>
                            <h3>Cross-Provider Analytics</h3>
                            <p>Unified visibility into OpenAI, Anthropic, Google, and more. One dashboard for all your tokens.</p>
                        </div>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.featureIcon}>🏎️</div>
                            <h3>Smart Routing</h3>
                            <p>Automatically route prompts to the cheapest model that meets your quality threshold.</p>
                        </div>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.featureIcon}>🛡️</div>
                            <h3>Budget Guards</h3>
                            <p>Set hard limits per team or project. Get real-time alerts before you exceed budgets.</p>
                        </div>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.featureIcon}>✨</div>
                            <h3>Prompt Compression</h3>
                            <p>Built-in AI engine to optimize and compress your prompts, saving up to 25% on input tokens.</p>
                        </div>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.featureIcon}>🔌</div>
                            <h3>Zero-Code Integration</h3>
                            <p>Swap your standard API endpoint with TokenFlow in 30 seconds. No refactor needed.</p>
                        </div>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.featureIcon}>🏢</div>
                            <h3>Team Management</h3>
                            <p>Granular permissions, usage quotas, and cost allocation by department or API key.</p>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className={styles.pricing}>
                    <div className={styles.sectionHeader}>
                        <h2>Transparent Pricing</h2>
                        <p>Choose the plan that fits your growth stage.</p>
                    </div>

                    <div className={styles.pricingGrid}>
                        <div className={`${styles.pricingCard} glass`}>
                            <div className={styles.planName}>Starter</div>
                            <div className={styles.planPrice}>$49<span>/mo</span></div>
                            <ul className={styles.planFeatures}>
                                <li>Up to $1k/mo spend monitored</li>
                                <li>3 Team members</li>
                                <li>Standard Analytics</li>
                                <li>Email Support</li>
                            </ul>
                            <Link href="/signup" className={styles.planBtn}>Get Started</Link>
                        </div>
                        <div className={`${styles.pricingCard} ${styles.popular} glass`}>
                            <div className={styles.popularBadge}>Most Popular</div>
                            <div className={styles.planName}>Professional</div>
                            <div className={styles.planPrice}>$199<span>/mo</span></div>
                            <ul className={styles.planFeatures}>
                                <li>Up to $10k/mo spend monitored</li>
                                <li>10 Team members</li>
                                <li>Smart Routing Engine</li>
                                <li>Priority Support</li>
                                <li>Custom Alerts</li>
                            </ul>
                            <Link href="/signup" className={styles.planBtnActive}>Get Started</Link>
                        </div>
                        <div className={`${styles.pricingCard} glass`}>
                            <div className={styles.planName}>Enterprise</div>
                            <div className={styles.planPrice}>$499<span>/mo</span></div>
                            <ul className={styles.planFeatures}>
                                <li>Unlimited spend monitoring</li>
                                <li>Unlimited members</li>
                                <li>Advanced Prompt Compression</li>
                                <li>SLA Guarantee</li>
                                <li>Dedicated Manager</li>
                            </ul>
                            <Link href="/signup" className={styles.planBtn}>Contact Sales</Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerBrand}>
                        <div className={styles.logo}>TokenFlow</div>
                        <p>Optimizing the world's AI infrastructure, one token at a time.</p>
                    </div>
                    <div className={styles.footerLinks}>
                        <div>
                            <h4>Product</h4>
                            <Link href="/">Features</Link>
                            <Link href="/">Security</Link>
                            <Link href="/">Pricing</Link>
                        </div>
                        <div>
                            <h4>Company</h4>
                            <Link href="/">About</Link>
                            <Link href="/">Careers</Link>
                            <Link href="/">Contact</Link>
                        </div>
                        <div>
                            <h4>Legal</h4>
                            <Link href="/">Privacy</Link>
                            <Link href="/">Terms</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    © 2026 TokenFlow Inc. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
