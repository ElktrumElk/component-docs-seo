"use client";

import React from "react";

interface SidebarProps {
  activeSection: string;
  onSelect: (id: string) => void;
  open?: boolean;
  onClose?: () => void;
}

const SECTIONS = [
  {
    category: "Getting Started",
    items: [
      { id: "overview", label: "Overview" },
      { id: "install", label: "Installation" },
      { id: "conventions", label: "Conventions" },
    ],
  },
  {
    category: "Layout",
    items: [
      { id: "page", label: "Page" },
      { id: "header", label: "Header" },
      { id: "container", label: "Container" },
      { id: "center", label: "Center" },
      { id: "stack", label: "Stack" },
      { id: "panel", label: "Panel" },
      { id: "padding", label: "Padding" },
      { id: "gap", label: "Gap" },
      { id: "gridview", label: "GridView" },
      { id: "scrollview", label: "ScrollView" },
    ],
  },
  {
    category: "Content",
    items: [
      { id: "text", label: "Text" },
      { id: "span", label: "Span" },
      { id: "badge", label: "Badge" },
      { id: "card", label: "Card" },
      { id: "image", label: "Image" },
      { id: "divider", label: "Divider" },
      { id: "sectiondivider", label: "SectionDivider" },
      { id: "example", label: "Example" },
    ],
  },
  {
    category: "Forms & Actions",
    items: [
      { id: "button", label: "Button" },
      { id: "iconbutton", label: "IconButton" },
      { id: "textbutton", label: "TextButton" },
      { id: "input", label: "Input" },
    ],
  },
  {
    category: "Navigation",
    items: [
      { id: "navigator", label: "Navigator" },
      { id: "tab", label: "Tab" },
      { id: "tabview", label: "TabView" },
      { id: "list", label: "List" },
      { id: "listview", label: "ListView" },
      { id: "listmenu", label: "ListMenu" },
      { id: "tiles", label: "Tiles" },
      { id: "pagescrollview", label: "PageScrollView" },
    ],
  },
  {
    category: "Overlays",
    items: [
      { id: "bottommodal", label: "BottomModal" },
      { id: "sidepanel", label: "SidePanel" },
      { id: "reabon", label: "Reabon" },
    ],
  },
  {
    category: "Media & Icons",
    items: [
      { id: "avatar", label: "Avatar" },
      { id: "icon", label: "Icon" },
      { id: "iconnetwork", label: "IconNetwork" },
      { id: "icons", label: "205 Icons" },
    ],
  },
  {
    category: "Animation",
    items: [
      { id: "animation", label: "Animation" },
      { id: "transition", label: "Transition" },
      { id: "letteranimation", label: "LetterAnimation" },
    ],
  },
  {
    category: "Semantic",
    items: [
      { id: "section", label: "Section" },
      { id: "article", label: "Article" },
    ],
  },
  {
    category: "Hooks",
    items: [
      { id: "hooks", label: "Hooks Reference" },
    ],
  },
];

export function Sidebar({ activeSection, onSelect, open, onClose }: SidebarProps) {
  const handleSelect = (id: string) => {
    onSelect(id);
    onClose?.();
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 shrink-0 h-screen sticky top-14 overflow-y-auto border-r border-border bg-surface/90 backdrop-blur-sm">
        <SidebarContent activeSection={activeSection} onSelect={handleSelect} />
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <aside className="absolute top-0 left-0 bottom-0 w-72 bg-surface border-r border-border overflow-y-auto animate-slide-in-left">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <span className="text-sm font-bold text-primary-light">Navigation</span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-surface-lighter transition-colors"
                aria-label="Close menu"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="3" x2="13" y2="13" />
                  <line x1="13" y1="3" x2="3" y2="13" />
                </svg>
              </button>
            </div>
            <SidebarContent activeSection={activeSection} onSelect={handleSelect} />
          </aside>
        </div>
      )}
    </>
  );
}

function SidebarContent({ activeSection, onSelect }: { activeSection: string; onSelect: (id: string) => void }) {
  return (
    <nav className="p-3" aria-label="Documentation navigation">
      {SECTIONS.map((section) => (
        <div key={section.category} className="mb-4">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1.5 px-2">
            {section.category}
          </h3>
          <ul className="space-y-px">
            {section.items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onSelect(item.id)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-[13px] transition-all relative ${
                    activeSection === item.id
                      ? "sidebar-active"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-light/50"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
