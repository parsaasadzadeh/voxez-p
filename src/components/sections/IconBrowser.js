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
    <>
      <style>{`
        .ib-section {
          width: 100%;
          box-sizing: border-box;
          padding: 0 16px;
        }

        .ib-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        @media (min-width: 640px) {
          .ib-header {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
          .ib-search {
            flex-shrink: 0;
            width: 240px;
          }
        }

        .ib-search {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 10px 14px;
          width: 100%;
          box-sizing: border-box;
        }

        .ib-search input {
          background: transparent;
          border: none;
          outline: none;
          color: inherit;
          font-size: 0.875rem;
          width: 100%;
          min-width: 0;
        }

        .ib-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 12px;
        }

        @media (max-width: 480px) {
          .ib-grid {
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
            gap: 8px;
          }
        }

        .ib-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 8px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.03);
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
          min-height: 90px;
        }

        .ib-card:hover {
          background: rgba(124, 58, 237, 0.1);
          border-color: rgba(124, 58, 237, 0.3);
        }

        .ib-card.copied {
          background: rgba(124, 58, 237, 0.15);
          border-color: rgba(124, 58, 237, 0.5);
        }

        .ib-card-name {
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.45);
          text-align: center;
          word-break: break-all;
          line-height: 1.3;
        }

        .ib-fade-wrap {
          position: relative;
          margin-top: -100px;
          height: 140px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 12px;
        }

        .ib-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 0%, var(--bg, #07070D) 80%);
          pointer-events: none;
        }

        .ib-btn {
          position: relative;
          z-index: 1;
          background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);
          color: #fff;
          border: 1px solid rgba(167, 139, 250, 0.3);
          border-radius: 10px;
          padding: 10px 28px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: opacity 0.15s;
        }

        .ib-btn:hover {
          opacity: 0.88;
        }

        .ib-btn-close {
          background: rgba(124, 58, 237, 0.08);
          color: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 10px;
          padding: 10px 28px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 36px;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
        }

        .ib-btn-close:hover {
          background: rgba(124, 58, 237, 0.14);
          border-color: rgba(167, 139, 250, 0.4);
          color: rgba(167, 139, 250, 1);
        }

        .ib-close-wrap {
          display: flex;
          justify-content: center;
        }
      `}</style>

      <section id="icons" className="ib-section">
        {/* Header */}
        <div className="ib-header">
          <div>
            <div className="section-eyebrow">icon-browser</div>
            <h2 className="section-title">Browse Voxez Icons</h2>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginTop: "6px" }}>
              {filtered.length} / {icons.length} Icons
            </p>
          </div>

          <div className="ib-search">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search icon..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setExpanded(false);
              }}
            />
          </div>
        </div>

        {/* Grid */}
        <div style={{ position: "relative" }}>
          <div className="ib-grid">
            {visibleIcons.map((icon) => (
              <div
                key={icon}
                className={`ib-card ${copied === icon ? "copied" : ""}`}
                onClick={() => copyIcon(icon)}
              >
                <i className={icon} style={{ fontSize: "28px", lineHeight: 1 }} />
                <span className="ib-card-name">
                  {copied === icon ? "✓ copied" : icon}
                </span>
              </div>
            ))}
          </div>

          {/* Show more */}
          {hasMore && !expanded && (
            <div className="ib-fade-wrap">
              <div className="ib-fade" />
              <button className="ib-btn" onClick={() => setExpanded(true)}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                View all {filtered.length}
              </button>
            </div>
          )}

          {/* Collapse */}
          {expanded && !isSearching && (
            <div className="ib-close-wrap">
              <button
                className="ib-btn-close"
                onClick={() => {
                  setExpanded(false);
                  document.getElementById("icons")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
                Close
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}