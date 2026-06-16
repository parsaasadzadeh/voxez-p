export default function Install() {
    return (
        <section id="install">
            <div className="section-eyebrow">getting-started</div>

            <h2 className="section-title">Install Voxez</h2>

            <p className="section-desc">
                Add a single CDN link to your project and start using Voxez icons
                instantly. No packages, no build tools, and no configuration required.
            </p>

            <div className="install-grid">

                <div className="code-block">
                    <div className="code-header">
                        <div className="code-dots">
                            <span className="r"></span>
                            <span className="y"></span>
                            <span className="g"></span>
                        </div>
                        <span>index.html</span>
                    </div>

                    <div className="code-body">
                        <span className="comment">
                            {`<!-- Add Voxez to your <head> -->`}
                        </span>
                        <br />
                        <span className="tag">{`<link`}</span>{" "}
                        <span className="fn">rel</span>=
                        <span className="string">"stylesheet"</span>
                        <br />
                        &nbsp;&nbsp;
                        <span className="fn">href</span>=
                        <span className="string">
                            "https://cdn.jsdelivr.net/gh/parsaasadzadeh/voxez@master/style.css"
                        </span>
                        <br />
                        <span className="tag">{`/>`}</span>
                    </div>
                </div>

                <div className="code-block">
                    <div className="code-header">
                        <div className="code-dots">
                            <span className="r"></span>
                            <span className="y"></span>
                            <span className="g"></span>
                        </div>
                        <span>usage.html</span>
                    </div>

                    <div className="code-body">
                        <span className="comment">
                            {`<!-- Use any icon class -->`}
                        </span>
                        <br />

                        <span className="tag">{`<i`}</span>{" "}
                        <span className="fn">class</span>=
                        <span className="string">"vx-home"</span>
                        <span className="tag">{`></i>`}</span>
                        <br />

                        <span className="tag">{`<i`}</span>{" "}
                        <span className="fn">class</span>=
                        <span className="string">"vx-search"</span>
                        <span className="tag">{`></i>`}</span>
                        <br />

                        <span className="tag">{`<i`}</span>{" "}
                        <span className="fn">class</span>=
                        <span className="string">"vx-heart"</span>
                        <span className="tag">{`></i>`}</span>
                        <br />
                        <br />

                        <span className="comment">
                            {`<!-- Style with CSS -->`}
                        </span>
                        <br />

                        <span className="tag">{`<i`}</span>{" "}
                        <span className="fn">class</span>=
                        <span className="string">"vx-star"</span>{" "}
                        <span className="fn">style</span>=
                        <span className="string">
                            "font-size: 24px; color: #8b5cf6;"
                        </span>
                        <span className="tag">{`></i>`}</span>
                    </div>
                </div>

            </div>
        </section>
    );
}