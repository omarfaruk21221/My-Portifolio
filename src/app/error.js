"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
            <h2 className="text-2xl font-bold text-error mb-4">Something went wrong!</h2>
            <p className="mb-6 text-base-content/70">
                We apologize for the inconvenience. Please try again.
            </p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="btn btn-primary"
            >
                Try again
            </button>
        </div>
    );
}
