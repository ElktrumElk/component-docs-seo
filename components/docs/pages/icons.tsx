"use client";

import { Icon, Icons } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "icon", type: "ElementType", required: true, description: "SVG icon component to render" },
  { prop: "size", type: "'xs'|'sm'|'md'|'lg'|'xl' | number", required: false, default: '"md"', description: "Size preset or raw pixel value" },
  { prop: "color", type: "string", required: false, description: "Icon stroke/fill color" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
];

const exampleCode = `import { Icon, Icons } from "elk-components";

// Via Icon wrapper
<Icon icon={Icons.icon.Lock} size="lg" color="white" />
<Icon icon={Icons.icon.Heart} size={24} color="red" />
<Icon icon={Icons.icon.Search} size={40} />`;

const ICON_CATEGORIES = [
  { name: "Navigation", count: 25, icons: "ArrowDown, ArrowLeft, ArrowRight, ArrowUp, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Compass, ExternalLink, HambuggerMenu, Home, MapPin, Maximize, Minimize, MoreHorizontal, MoreVertical, Move, Navigation, Refresh" },
  { name: "Actions", count: 25, icons: "Add, Bug, Camera, Clipboard, ClipboardCheck, Code, Code2, Edit, Edit2, Minus, Mic, Pencil, Power, Printer, Redo, Reload, Repeat, Save, Scissors, Sync, Terminal, Trash, Trash2, Undo, Zap" },
  { name: "Communication", count: 20, icons: "Airplay, AtSign, Bell, BellOff, Bluetooth, Cast, Hash, Headphones, Inbox, Mail, MailOpen, MessageCircle, MessageSquare, Mic, MicOff, Phone, PhoneCall, Radio, Send, Signal" },
  { name: "Social", count: 20, icons: "Award, Bookmark, BookmarkFill, Dislike, Droplet, Flame, Gift, Heart, HeartFill, Leaf, Like, Medal, PartyPopper, Sparkles, Star, StarFill, ThumbsDown, ThumbsUp, Tree, Trophy" },
  { name: "Media", count: 25, icons: "Airplay, Camera, Disc, FastBackward, FastForward, Film, Headphones, Image, Image2, Mic, MicOff, Music, Pause, Play, Podcast, Radio, ScreenShare, SkipBack, SkipForward, Stop" },
  { name: "Status", count: 15, icons: "AlertCircle, AlertOctagon, AlertTriangle, Ban, CheckCircle, Eye, EyeOff, Fingerprint, HelpCircle, Info, Key, Shield, ShieldCheck, ShieldOff, Unlock, XCircle" },
  { name: "Commerce", count: 10, icons: "Banknote, CreditCard, DollarSign, Percent, Receipt, ShoppingBag, ShoppingCart, Tag, Tags, Wallet" },
  { name: "Time", count: 9, icons: "AlarmClock, Calendar, CalendarDays, Clock, Hourglass, Sunrise, Sunset, Timer, Watch" },
  { name: "Users", count: 14, icons: "Accessibility, Baby, Contact, Crown, Group, User, UserCheck, UserCog, UserMinus, UserPlus, Users, Users2, UserSearch, UserX" },
  { name: "Layout", count: 9, icons: "AlignCenter, AlignLeft, AlignRight, Columns, Layout, Layers, PanelLeft, Rows, Sidebar" },
  { name: "Code", count: 7, icons: "Cpu, Database, GitBranch, GitCommit, GitMerge, Server" },
  { name: "Misc", count: 22, icons: "Cloud, CloudDownload, CloudUpload, Copy, Download, ExternalLink, File, Filter, Flag, Folder, Globe, GridView, Key, Link, ListView, Lock, Map, Moon, Paperclip, Search" },
];

export function IconsPage() {
  return (
    <ComponentPage
      title="205 Built-in SVG Icons"
      description="Stroke-based icons across 12 categories. All follow the same IconProps interface (size, color, className)."
      props={props}
      example={exampleCode}
      exampleFilename="icons.tsx"
    >
      <ExampleCard
        title="Icon Usage"
        description="Access icons via Icons.icon.* and render with the Icon wrapper for consistent sizing."
        code={exampleCode}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          <Icon icon={Icons.icon.Lock} size="lg" color="#e2e8f0" />
          <Icon icon={Icons.icon.Heart} size="lg" color="#ef4444" />
          <Icon icon={Icons.icon.Search} size="lg" color="#f59e0b" />
          <Icon icon={Icons.icon.Star} size="lg" color="#eab308" />
          <Icon icon={Icons.icon.Settings} size="lg" color="#6366f1" />
          <Icon icon={Icons.icon.User} size="lg" color="#8b5cf6" />
          <Icon icon={Icons.icon.Mail} size="lg" color="#3b82f6" />
          <Icon icon={Icons.icon.Bell} size="lg" color="#f97316" />
          <Icon icon={Icons.icon.ShoppingCart} size="lg" color="#22c55e" />
        </div>
      </ExampleCard>

      <ExampleCard
        title="Icon Categories"
        description="All available icons organized by category with their counts."
        code={`// 12 categories with 205 total icons
// Import: import { Icon, Icons } from "elk-components"
// Usage: <Icon icon={Icons.icon.Lock} size="md" />`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {ICON_CATEGORIES.map((cat) => (
            <div key={cat.name} className="p-4 rounded-xl border border-border bg-surface-light/30">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span className="font-semibold text-sm">{cat.name}</span>
                <span className="text-[10px] font-mono text-accent px-2 py-0.5 rounded-full bg-primary/10">
                  {cat.count}
                </span>
              </div>
              <p className="text-xs font-mono text-text-secondary" style={{ lineHeight: 1.6 }}>
                {cat.icons}
              </p>
            </div>
          ))}
        </div>
      </ExampleCard>
    </ComponentPage>
  );
}
