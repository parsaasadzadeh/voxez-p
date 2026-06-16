import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">
            {/* Top row: logo + links */}
            <div className="footer-top">
                <Link href="/" className="footer-logo">
                    <span className="footer-logo-icon">⚡</span>
                    Voxez
                </Link>

                <ul className="footer-links">
                    <li><Link href="/document">Docs</Link></li>
                    <li><Link href="https://github.com/parsaasadzadeh" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
                    <li><Link href="/terms">Terms</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/install">Install</Link></li>
                </ul>
            </div>

            {/* Divider */}
            <div className="footer-divider" />

            {/* Bottom row: copyright */}
            <div className="footer-bottom">
                <span className="footer-copy">
                    © {new Date().getFullYear()} Voxez
                </span>
                <span className="footer-copy">
                    Released under the{" "}
                    <Link href="/terms" className="footer-license-link">MIT License</Link>
                </span>
            </div>

            <style>{`
                .site-footer {
                    background: var(--bg2);
                    border-top: 1px solid var(--border2);
                    padding: 40px 5% 32px;
                }

                /* ── Top row ── */
                .footer-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                    flex-wrap: wrap;
                }

                .footer-logo {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-family: 'JetBrains Mono', monospace;
                    font-weight: 700;
                    font-size: 1rem;
                    color: var(--text);
                    text-decoration: none;
                    transition: color 0.2s;
                }

                .footer-logo:hover { color: var(--purple-light); }

                .footer-logo-icon {
                    width: 28px;
                    height: 28px;
                    background: linear-gradient(135deg, var(--purple), var(--green));
                    border-radius: 7px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
                    line-height: 1;
                    flex-shrink: 0;
                }

                .footer-links {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    list-style: none;
                    flex-wrap: wrap;
                }

                .footer-links a {
                    color: var(--text-muted);
                    text-decoration: none;
                    font-size: 0.8rem;
                    font-family: 'JetBrains Mono', monospace;
                    padding: 6px 12px;
                    border-radius: 8px;
                    transition: color 0.2s, background 0.2s;
                    white-space: nowrap;
                    direction: ltr;
                }

                .footer-links a:hover {
                    color: var(--text);
                    background: rgba(255, 255, 255, 0.05);
                }

                /* ── Divider ── */
                .footer-divider {
                    height: 1px;
                    background: var(--border2);
                    margin: 28px 0;
                }

                /* ── Bottom row ── */
                .footer-bottom {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    flex-wrap: wrap;
                }

                .footer-copy {
                    color: var(--text-dim);
                    font-size: 0.75rem;
                    font-family: 'JetBrains Mono', monospace;
                }

                .footer-license-link {
                    color: var(--purple-light);
                    text-decoration: none;
                    transition: color 0.2s;
                }

                .footer-license-link:hover { color: var(--text); }

                /* ── Mobile ── */
                @media (max-width: 600px) {
                    .footer-top {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 20px;
                    }

                    .footer-links {
                        gap: 2px;
                    }

                    .footer-links a {
                        padding: 6px 10px;
                        font-size: 0.75rem;
                    }

                    .footer-bottom {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 6px;
                    }
                }
            `}</style>
        </footer>
    );
}