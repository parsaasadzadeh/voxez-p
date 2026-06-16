"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NotFound() {
    const [glitch, setGlitch] = useState(false);
    const [dots, setDots] = useState("");

    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 200);
        }, 3000);

        const dotsInterval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
        }, 500);

        return () => {
            clearInterval(glitchInterval);
            clearInterval(dotsInterval);
        };
    }, []);

    return (
        <main className="not-found">

            <div className="not-found-glow" />
            <div className="not-found-glow-green" />
            <div className="not-found-grid" />

            {/* 404 */}
            <div className="not-found-num">
                <div className={`not-found-404${glitch ? " glitch" : ""}`}>
                    404
                </div>
                {glitch && (
                    <>
                        <div className="not-found-404-ghost pink">404</div>
                        <div className="not-found-404-ghost teal">404</div>
                    </>
                )}
            </div>

            {/* terminal */}
            <div className="not-found-terminal">
                <div className="not-found-terminal-bar">
                    <div className="code-dots">
                        <span className="r" />
                        <span className="y" />
                        <span className="g" />
                    </div>
                    <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", color: "var(--text-muted)", marginLeft: "8px" }}>
                        bash — not-found
                    </span>
                </div>
                <div className="not-found-terminal-body">
                    <div style={{ color: "#64748B" }}>$ locate /page/this-url</div>
                    <div style={{ color: "#F472B6" }}>ERROR: No such file or directory</div>
                    <div style={{ color: "#64748B", marginTop: "8px" }}>$ ping homepage</div>
                    <div style={{ color: "#34D399" }}>REPLY: homepage is alive ✓</div>
                    <div style={{ color: "#64748B", marginTop: "8px" }}>$ cd /home{dots}</div>
                </div>
            </div>

            {/* message */}
            <p className="not-found-msg">
                Looks like this page got lost in the void.
                <br />
                Let's get you back on track.
            </p>

            {/* buttons */}
            <div className="not-found-btns">
                <Link href="/" className="btn-primary">← Back to Home</Link>
                <Link href="/icons" className="btn-secondary">Browse Icons</Link>
            </div>

        </main>
    );
}