"use client";
import React from "react";

const lightThemeColors = {
  primary: "#2563EB",
  "primary-focus": "#1D4ED8",
  "primary-content": "#FFFFFF",
  secondary: "#FACC15",
  "secondary-focus": "#EAB308",
  "secondary-content": "#111827",
  accent: "#22D3EE",
  "accent-focus": "#06B6D4",
  "accent-content": "#020617",
  neutral: "#0F172A",
  "neutral-focus": "#020617",
  "neutral-content": "#E5E7EB",
  "base-100": "#020617",
  "base-200": "#020617",
  "base-300": "#0B1220",
  "base-content": "#E5E7EB",
  info: "#38BDF8",
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#F97373",
};

const darkThemeColors = {
  primary: "#1D4ED8",
  "primary-focus": "#1E40AF",
  "primary-content": "#FFFFFF",
  secondary: "#EAB308",
  "secondary-focus": "#CA8A04",
  "secondary-content": "#111827",
  accent: "#06B6D4",
  "accent-focus": "#0891B2",
  "accent-content": "#020617",
  neutral: "#020617",
  "neutral-focus": "#000000",
  "neutral-content": "#E5E7EB",
  "base-100": "#020617",
  "base-200": "#020617",
  "base-300": "#0F172A",
  "base-content": "#E5E7EB",
  info: "#38BDF8",
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#F97373",
};

export default function page() {
  return (
    <div className="p-8 space-y-12">
      {/* Light Theme */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Light Theme</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(lightThemeColors).map(([name, hex]) => (
            <div key={name} className="flex flex-col items-center">
              <div
                className="w-24 h-24 rounded-lg border"
                style={{ backgroundColor: hex }}
              />
              <p className="mt-2 font-semibold">{name}</p>
              <p className="text-sm">{hex}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Theme */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Dark Theme</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(darkThemeColors).map(([name, hex]) => (
            <div key={name} className="flex flex-col items-center">
              <div
                className="w-24 h-24 rounded-lg border"
                style={{ backgroundColor: hex }}
              />
              <p className="mt-2 font-semibold">{name}</p>
              <p className="text-sm">{hex}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
