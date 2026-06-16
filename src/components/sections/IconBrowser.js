"use client";

import { useEffect, useMemo, useState } from "react";

const CDN =
  "https://cdn.jsdelivr.net/gh/parsaasadzadeh/voxez@master/style.css";

const PREVIEW_COUNT = 40;

export default function IconBrowser() {
  const [icons, setIcons] = useState([]);
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState("");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    async function loadIcons() {
      try {
        const css = await fetch(CDN).then((r) => r.text());
        const matches = [
          ...css.matchAll(
            /\.((?:voxez-[a-zA-Z0-9_-]+))(?::before|\s+\.path\d+:before)/g
          ),
        ];
        const unique = [...new Set(matches.map((m) => m[1]))].sort();
        setIcons(unique);
      } catch (err) {
        console.error("Failed to load icons:", err);
      }
    }
    loadIcons();
  }, []);

  const filtered = useMemo(() => {
    return icons.filter((icon) =>
      icon.toLowerCase().includes(search.toLowerCase())
    );
  }, [icons, search]);

  const isSearching = search.trim().length > 0;
  const visibleIcons =
    isSearching || expanded ? filtered : filtered.slice(0, PREVIEW_COUNT);
  const hasMore = !isSearching && filtered.length > PREVIEW_COUNT;

  const copyIcon = async (name) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopied(name);
      setTimeout(() => setCopied(""), 1500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="icons">
      {/* Header */}
      <div className="icon-section-header">
        <div>
          <div className="section-eyebrow">icon-browser</div>
          <h2 className="section-title">Browse Voxez Icons</h2>
          <p className="text-sm text-slate-500 mt-2">
            {filtered.length} / {icons.length} Icons
          </p>
        </div>

        <div className="search-bar">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#64748B"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search Icon..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setExpanded(false);
            }}
          />
        </div>
      </div>

      {/* Icons wrapper */}
      <div style={{ position: "relative" }}>
        <div className="icons-grid" id="iconsGrid">
          {visibleIcons.map((icon) => (
            <div
              key={icon}
              className={`icon-card ${copied === icon ? "copied" : ""}`}
              onClick={() => copyIcon(icon)}
            >
              <i className={icon} style={{ fontSize: "32px", lineHeight: 1 }} />
              <span className="icon-card-name">
                {copied === icon ? "✓ copied" : icon}
              </span>
            </div>
          ))}
        </div>

        {/* Fade + مشاهده همه */}
        {hasMore && !expanded && (
          <div
            style={{
              position: "relative",
              marginTop: "-180px",
              height: "220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: "0px",
            }}
          >
            {/* لایه fade */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(7,7,13,0.6) 40%, rgba(7,7,13,0.92) 70%, #07070D 100%)",
                pointerEvents: "none",
              }}
            />

            {/* گلوی بنفش دایره‌ای عمیق */}
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "520px",
                height: "180px",
                background:
                  "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(124,58,237,0.55) 0%, rgba(124,58,237,0.18) 50%, transparent 75%)",
                filter: "blur(18px)",
                pointerEvents: "none",
              }}
            />

            {/* هاله‌ی داخلی روشن‌تر */}
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "280px",
                height: "100px",
                background:
                  "radial-gradient(ellipse 55% 100% at 50% 100%, rgba(167,139,250,0.45) 0%, transparent 70%)",
                filter: "blur(10px)",
                pointerEvents: "none",
              }}
            />

            <button
              onClick={() => setExpanded(true)}
              style={{
                position: "relative",
                zIndex: 2,
                background:
                  "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
                color: "#fff",
                border: "1px solid rgba(167,139,250,0.3)",
                borderRadius: "12px",
                padding: "12px 32px",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow:
                  "0 0 0 1px rgba(124,58,237,0.2), 0 4px 16px rgba(124,58,237,0.4), 0 12px 40px rgba(124,58,237,0.25)",
                transition: "transform 0.2s, box-shadow 0.2s",
                marginBottom: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 0 0 1px rgba(124,58,237,0.3), 0 6px 24px rgba(124,58,237,0.55), 0 20px 60px rgba(124,58,237,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 0 0 1px rgba(124,58,237,0.2), 0 4px 16px rgba(124,58,237,0.4), 0 12px 40px rgba(124,58,237,0.25)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
             View icon {filtered.length}
            </button>
          </div>
        )}

        {/* دکمه بستن */}
        {expanded && !isSearching && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "48px",
              position: "relative",
            }}
          >
            {/* گلوی بنفش زیر دکمه بستن */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "340px",
                height: "120px",
                background:
                  "radial-gradient(ellipse 50% 80% at 50% 50%, rgba(124,58,237,0.3) 0%, transparent 70%)",
                filter: "blur(20px)",
                pointerEvents: "none",
              }}
            />

            <button
              onClick={() => {
                setExpanded(false);
                document
                  .getElementById("icons")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                position: "relative",
                zIndex: 1,
                background: "rgba(124,58,237,0.08)",
                color: "var(--text-muted)",
                border: "1px solid rgba(124,58,237,0.25)",
                borderRadius: "12px",
                padding: "12px 32px",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backdropFilter: "blur(8px)",
                transition: "border-color 0.2s, background 0.2s, color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)";
                e.currentTarget.style.background = "rgba(124,58,237,0.14)";
                e.currentTarget.style.color = "var(--purple-light)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(124,58,237,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)";
                e.currentTarget.style.background = "rgba(124,58,237,0.08)";
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              to close
            </button>
          </div>
        )}
      </div>
    </section>
  );
}