import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-muted">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 inline-block rounded-xl bg-accent px-5 py-2.5 font-semibold text-white hover:bg-accent-hover">
        Go to the paraphrasing tool
      </Link>
    </div>
  );
}
