"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sidebar, PAGE_LABELS } from "@/components/docs/Sidebar";

export function DocsShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const activeSlug = pathname.split("/docs/")[1] || "overview";
  const currentPageLabel = PAGE_LABELS[activeSlug] || "Docs";

  return (
    <div className="flex min-h-screen">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-40 glass border-b border-border">
          <div className="flex items-center justify-between px-4 sm:px-6 h-14">
            <div className="flex items-center gap-3">
              {/* Mobile hamburger */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-surface-lighter transition-colors"
                aria-label="Open navigation menu"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="4" x2="16" y2="4" />
                  <line x1="2" y1="9" x2="16" y2="9" />
                  <line x1="2" y1="14" x2="16" y2="14" />
                </svg>
              </button>
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-lg font-bold gradient-text">elk</span>
                <span className="text-xs text-text-muted hidden sm:inline">/</span>
                <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors hidden sm:inline">
                  docs
                </span>
              </Link>
              {/* Mobile page title */}
              <span className="md:hidden text-xs text-text-muted font-mono truncate max-w-[120px]">
                {currentPageLabel}
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-xs text-text-muted font-mono hidden sm:inline">v1.3.9</span>
              <a
                href="https://www.npmjs.com/package/elk-components"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-muted hover:text-primary-light transition-colors"
              >
                npm
              </a>
              <a
                href="https://github.com/elktrumelk/elk-components"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-muted hover:text-primary-light transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>
        <div
          className="flex-1 min-w-0"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.05) 0%, transparent 70%)",
          }}
        >
          <div className="p-5 sm:p-8 max-w-5xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
