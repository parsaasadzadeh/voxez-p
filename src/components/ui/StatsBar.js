"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({ value }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;

            observer.disconnect();

            let current = 0;
            const duration = 1200;
            const increment = Math.ceil(value / (duration / 16));

            const timer = setInterval(() => {
                current += increment;

                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(current);
                }
            }, 16);
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [value]);

    return <span ref={ref}>{count}+</span>;
}

export default function StatsBar() {
    return (
        <section className="stats-bar">

            <div className="stat-item">
                <div className="stat-num">
                    <CountUp value={200} />
                </div>
                <div className="stat-label">SVG Icons</div>
            </div>

            <div className="stat-item">
                <div className="stat-num">CDN</div>
                <div className="stat-label">Instant Delivery</div>
            </div>

            <div className="stat-item">
                <div className="stat-num">0</div>
                <div className="stat-label">Setup Required</div>
            </div>

            <div className="stat-item">
                <div className="stat-num">MIT</div>
                <div className="stat-label">Open Source</div>
            </div>

        </section>
    );
}