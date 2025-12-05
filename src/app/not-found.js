import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h2 className="text-6xl font-bold text-primary mb-4">404</h2>
            <h3 className="text-2xl font-semibold mb-6">Page Not Found</h3>
            <p className="text-base-content/70 mb-8 max-w-md">
                Could not find requested resource. The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link href="/" className="btn btn-primary">
                Return Home
            </Link>
        </div>
    );
}
