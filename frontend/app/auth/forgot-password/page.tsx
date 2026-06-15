"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div
        className="
        w-full
        max-w-md
        bg-slate-900/80
        border
        border-cyan-500/20
        rounded-3xl
        p-8
        "
      >
        <h1 className="text-3xl font-bold mb-3">Reset Password</h1>

        <p className="text-slate-400 mb-6">
          Enter your email address to receive a reset link.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="
          w-full
          bg-slate-950
          border
          border-slate-700
          rounded-xl
          px-4
          py-3
          mb-4
          "
        />

        <button
          className="
          w-full
          bg-cyan-500
          hover:bg-cyan-400
          py-3
          rounded-xl
          "
        >
          Send Reset Link
        </button>

        <Link
          href="/auth"
          className="
          block
          text-center
          text-cyan-400
          mt-6
          "
        >
          Back to Login
        </Link>
      </div>
    </main>
  );
}
