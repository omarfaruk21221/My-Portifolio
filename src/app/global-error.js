"use client";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function GlobalError({ error, reset }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
                    <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
                    <p className="text-gray-400 mb-8 max-w-md text-center">
                        {error.message || "An unexpected error occurred."}
                    </p>
                    <button
                        onClick={() => reset()}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
