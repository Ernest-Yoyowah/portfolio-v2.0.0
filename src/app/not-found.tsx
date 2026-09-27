import Link from "next/link";
import { buttonClass } from "@/lib/button";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link href="/" className={buttonClass("secondary", "mt-8")}>
        Go to the homepage
      </Link>
    </div>
  );
}
