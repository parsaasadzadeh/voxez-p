export const metadata = {
  title: "Terms",
};
export default function Terms() {
    return (
        <section id="terms" style={{ background: "var(--bg2)" }}>
            <div className="section-eyebrow">legal</div>
            <h2 className="section-title">Terms of Use</h2>
            <p className="section-desc">Please read these terms carefully before using Voxez.</p>

            <div className="terms-list">

                <div className="feature-card terms-card">
                    <h3>1. Free to Use</h3>
                    <p>Voxez is released under the MIT License. You are free to use, copy, modify, and distribute all icons in personal and commercial projects at no cost.</p>
                </div>

                <div className="feature-card terms-card">
                    <h3>2. No Warranty</h3>
                    <p>Voxez is provided <strong style={{ color: "var(--text)" }}>"as is"</strong>, without warranty of any kind — express or implied. This includes, but is not limited to, warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                </div>

                <div className="feature-card terms-card">
                    <h3>3. No Liability</h3>
                    <p>In no event shall the authors or copyright holders of Voxez be liable for any claim, damages, or other liability — whether in an action of contract, tort, or otherwise — arising from, out of, or in connection with the use or inability to use this software or its icons.</p>
                </div>

                <div className="feature-card terms-card">
                    <h3>4. CDN Usage</h3>
                    <p>Voxez is served via CDN for convenience. We do not guarantee 100% uptime or uninterrupted availability of the CDN. For production-critical applications, we recommend self-hosting the assets.</p>
                </div>

                <div className="feature-card terms-card">
                    <h3>5. Attribution</h3>
                    <p>Attribution is not required but is always appreciated. If you find Voxez helpful, consider linking back to the project or giving it a star on GitHub.</p>
                </div>

                <div className="terms-tldr">
                    <span style={{ color: "var(--green-light)" }}>// TL;DR</span><br />
                    Use it freely. Modify it. Ship it.<br />
                    We are <span className="highlight">not responsible</span> for anything that goes wrong.<br />
                    No guarantees. No warranties. No liability.
                </div>

            </div>
        </section>
    );
}