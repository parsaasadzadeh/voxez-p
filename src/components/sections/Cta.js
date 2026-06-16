import Link from "next/link";

export default function Cta() {
    return (
        <section id="cta">
            <div className="cta-glow"></div>
            <div className="cta-inner">
                <div className="terminal-badge" style={{ display: "inline-flex", marginBottom: "32px" }}>
                    <span className="dot"></span>
                    Free Forever — MIT License
                </div>
                <h2>Ready to get started?</h2>
                <p>Access 200+ icons in less than 60 seconds.</p>
                <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href="#icons" className="btn-primary" style={{ fontSize: "1rem", padding: "15px 32px" }}>
                        Browse Icons →
                    </Link>
                    <Link href="/document" className="btn-secondary" style={{ fontSize: "0.9rem", padding: "15px 28px" }}>
                        Documentation
                    </Link>
                </div>
            </div>
        </section>
    );
}