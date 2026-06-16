import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Learn more about Parsa Asadzadeh and the story behind Voxez.",
};
export default function About() {
    const stack = ["Next.js", "React", "Node.js", "JavaScript", "Bootstrap", "Tailwind CSS"];

    return (
        <main className="about-main">
            <section id="about">
                <div className="about-inner">

                    <div className="section-eyebrow">about</div>

                    <div className="about-header">
                        <div className="about-avatar">P</div>
                        <div>
                            <h1 className="section-title" style={{ marginBottom: "4px" }}>Parsa Asadzadeh</h1>
                            <div className="about-role">Full-Stack Developer · Creator of Voxez</div>
                        </div>
                    </div>

                    <div className="feature-card about-card">
                        <h3>// Who am I</h3>
                        <p>
                            I'm a full-stack developer passionate about building tools that make developers' lives easier.
                            I created Voxez to provide a fast, lightweight, and free icon library —
                            accessible to everyone via CDN with zero setup required.
                        </p>
                    </div>

                    <div className="feature-card about-card">
                        <h3>// Why I built Voxez</h3>
                        <p>
                            Most icon libraries are either too heavy, require complex setup, or lock features behind a paywall.
                            I wanted something different — a clean, minimal, and completely free icon set
                            that just works with a single CDN link.
                        </p>
                    </div>

                    <div className="feature-card about-card about-stack">
                        <h3>// Tech Stack</h3>
                        <div className="about-tags">
                            {stack.map((tech) => (
                                <span key={tech} className="about-tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="about-links">
                        <Link href="https://github.com/parsaasadzadeh" className="btn-primary">GitHub →</Link>
                    </div>

                </div>
            </section>
        </main>
    );
}