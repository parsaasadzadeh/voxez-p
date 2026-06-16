"use client";

import { useState } from "react";
import Link from "next/link";



const NAV = [
    {
        label: "Getting Started",
        links: [
            { href: "#introduction", title: "Introduction" },
            { href: "#installation", title: "Installation" },
            { href: "#quick-start",  title: "Quick Start"  },
        ],
    },
];

function CopyButton({ code }) {
    const [copied, setCopied] = useState(false);
    const handle = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <button onClick={handle} className={`docs-code-copy${copied ? " copied" : ""}`}>
            {copied ? "Copied!" : "Copy"}
        </button>
    );
}

function CodeBlock({ label, code, children }) {
    return (
        <div className="docs-code-block">
            <div className="docs-code-header">
                <span>{label}</span>
                <CopyButton code={code} />
            </div>
            <div className="docs-code-body">{children}</div>
        </div>
    );
}

export default function Docs() {
    return (
        <div className="docs-root">

            <aside className="docs-sidebar">
                <Link href="/" className="docs-sidebar-logo">
                    <span className="docs-sidebar-logo-name">Voxez</span>
                    <span className="docs-sidebar-logo-badge">docs</span>
                </Link>

                {NAV.map((group) => (
                    <div key={group.label} className="docs-sidebar-group">
                        <div className="docs-sidebar-label">{group.label}</div>
                        {group.links.map((link) => (
                            <a key={link.href} href={link.href} className="docs-sidebar-link">
                                <span className="link-dot" />
                                {link.title}
                            </a>
                        ))}
                    </div>
                ))}

                <Link href="/" className="docs-sidebar-back">← Back to site</Link>
            </aside>

            <div className="docs-main">
                <main className="docs-content">

                    {/* ── Introduction ── */}
                    <section id="introduction">
                        <h1 className="docs-page-title">Documentation</h1>
                        <p className="docs-page-lead">
                              Voxez is a free and open-source icon library designed for modern
            websites and web applications. Add the CDN link and start using
            icons instantly.
                        </p>
                    </section>

                    {/* ── Installation ── */}
<section id="installation">
    <h2 className="docs-h2">Installation</h2>

       <p className="docs-p">
            Add the stylesheet below inside the{" "}
            <code>&lt;head&gt;</code> tag of your HTML document.
          </p>

    <CodeBlock
        label="index.html"
        code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/parsaasadzadeh/voxez@master/style.css">`}
    >
        <div>
            <span className="tg">&lt;link</span>
            <span className="pl"> rel=</span>
            <span className="st">"stylesheet"</span>
            <span className="pl"> href=</span>
            <span className="st">
                "https://cdn.jsdelivr.net/gh/parsaasadzadeh/voxez@master/style.css"
            </span>
            <span className="tg"> /&gt;</span>
        </div>
    </CodeBlock>
</section>

                    {/* ── Quick Start ── */}
                    <section id="quick-start">
                        <h2 className="docs-h2">Quick Start</h2>
                        <p className="docs-p">
                            The fastest way is the CDN link.
                            Paste it into the <code className="docs-ic">&lt;head&gt;</code> of any HTML page.
                        </p>

                        <CodeBlock
                            label="index.html"
                            code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/parsaasadzadeh/voxez@master/style.css">`}
                        >
                            <div>
                                <span className="tg">&lt;link</span>
                                <span className="pl"> rel=</span><span className="st">"stylesheet"</span>
                                <span className="pl"> href=</span><span className="st">"https://cdn.jsdelivr.net/gh/parsaasadzadeh/voxez@master/style.css"</span>
                                <span className="tg"> /&gt;</span>
                            </div>
                        </CodeBlock>

                        <div className="docs-callout tip">
                            <span className="docs-callout-icon">💡</span>
                            <span>
                                For production apps, self-host the assets so you're not dependent on CDN uptime.
                            </span>
                        </div>
                    </section>

                </main>

                <aside className="docs-toc">
                    <div className="docs-toc-label">On this page</div>
                    <a href="#introduction" className="docs-toc-link">Introduction</a>
                    <a href="#installation" className="docs-toc-link">Installation</a>
                    <a href="#quick-start"  className="docs-toc-link">Quick Start</a>
                </aside>
            </div>

        </div>
    );
}