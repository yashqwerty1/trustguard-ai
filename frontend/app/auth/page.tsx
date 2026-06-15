"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthPage() {
  const router = useRouter();

  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/dashboard");
  };

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
        backdrop-blur
        "
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">TrustGuard AI</h1>

          <p className="text-slate-400 mt-3">
            {isSignup
              ? "Create your security account"
              : "Sign in to Security Center"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="
              w-full
              bg-slate-950
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              "
            />
          )}

          <input
            type="email"
            placeholder="Email"
            defaultValue="user@trustguard.ai"
            className="
            w-full
            bg-slate-950
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            "
          />

          <input
            type="password"
            placeholder="Password"
            defaultValue="password123"
            className="
            w-full
            bg-slate-950
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            "
          />

          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="
              w-full
              bg-slate-950
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              "
            />
          )}

          <button
            type="submit"
            className="
            w-full
            bg-cyan-500
            hover:bg-cyan-400
            rounded-xl
            py-3
            font-semibold
            transition
            "
          >
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>

        <button
          onClick={() => router.push("/dashboard")}
          className="
          w-full
          mt-4
          border
          border-cyan-500/30
          rounded-xl
          py-3
          "
        >
          Launch Demo Environment
        </button>

        {!isSignup && (
          <Link
            href="/auth/forgot-password"
            className="
            block
            text-center
            text-cyan-400
            mt-5
            "
          >
            Forgot Password?
          </Link>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-slate-400 hover:text-cyan-400"
          >
            {isSignup
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </main>
  );
}
