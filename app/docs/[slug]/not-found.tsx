import Link from "next/link";

export default function DocsNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-5">
      <h1 className="text-6xl font-extrabold gradient-text mb-4">404</h1>
      <p className="text-text-secondary text-lg mb-2">Page not found</p>
      <p className="text-text-muted text-sm mb-8 max-w-md">
        The documentation page you&apos;re looking for doesn&apos;t exist. It may have been
        moved or the URL might be incorrect.
      </p>
      <Link
        href="/docs/overview"
        className="px-6 py-2.5 rounded-lg bg-primary text-surface font-semibold text-sm hover:bg-primary-dark transition-colors"
      >
        Back to Overview
      </Link>
    </div>
  );
}
