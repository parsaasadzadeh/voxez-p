"use client";

import Link from "next/link";

export default function Hero() {
    const copyIcon = async (name) => {
        try {
            await navigator.clipboard.writeText(name);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="hero">
            <div className="hero-glow"></div>
            <div className="hero-glow-green"></div>

            <div className="terminal-badge">
                <span className="dot"></span>
                cdn powered icons
            </div>

            <h1>
                <span className="line1">Beautiful SVG Icons</span>
                <span className="line2">Ready Through CDN</span>
            </h1>

            <p>
                Voxez is a free and open-source icon library designed for modern
                websites and web applications. Add a single CDN link and start
                using icons instantly — no installation, no configuration, no
                build step required.
            </p>

            <div className="hero-btns">
                <Link href="/icons" className="btn-primary">
                    Browse Icons
                </Link>

                <Link href="/docs" className="btn-secondary">
                    Get Started
                </Link>
            </div>

           

            {/* ICON PREVIEW GRID (from your first design) */}
            <div className="hero-icons-preview">
                <div className="hero-icon-chip" onClick={() => copyIcon("home")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span>home</span>
                </div>

                <div className="hero-icon-chip" onClick={() => copyIcon("code")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.5">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                    </svg>
                    <span>code</span>
                </div>

                <div className="hero-icon-chip" onClick={() => copyIcon("terminal")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5">
                        <polyline points="4 17 10 11 4 5" />
                        <line x1="12" y1="19" x2="20" y2="19" />
                    </svg>
                    <span>terminal</span>
                </div>

                <div className="hero-icon-chip" onClick={() => copyIcon("git-branch")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5">
                        <line x1="6" y1="3" x2="6" y2="15" />
                        <circle cx="18" cy="6" r="3" />
                        <circle cx="6" cy="18" r="3" />
                        <path d="M18 9a9 9 0 01-9 9" />
                    </svg>
                    <span>git-branch</span>
                </div>

                <div className="hero-icon-chip" onClick={() => copyIcon("cloud")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.5">
                        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
                    </svg>
                    <span>cloud</span>
                </div>

                <div className="hero-icon-chip" onClick={() => copyIcon("lock")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    <span>lock</span>
                </div>

                <div className="hero-icon-chip" onClick={() => copyIcon("zap")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                    <span>zap</span>
                </div>

                <div className="hero-icon-chip" onClick={() => copyIcon("database")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="1.5">
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                    <span>database</span>
                </div>

                <div className="hero-icon-chip" onClick={() => copyIcon("cpu")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <rect x="9" y="9" width="6" height="6" />
                    </svg>
                    <span>cpu</span>
                </div>

                <div className="hero-icon-chip" onClick={() => copyIcon("wifi")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.5">
                        <path d="M5 12.55a11 11 0 0114.08 0" />
                        <path d="M1.42 9a16 16 0 0121.16 0" />
                        <path d="M8.53 16.11a6 6 0 016.95 0" />
                    </svg>
                    <span>wifi</span>
                </div>

                <div className="hero-icon-chip" onClick={() => copyIcon("layers")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.5">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                    </svg>
                    <span>layers</span>
                </div>

                <div className="hero-icon-chip" onClick={() => copyIcon("package")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5">
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    </svg>
                    <span>package</span>
                </div>
            </div>
        </section>
    );
}