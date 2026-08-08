"use client";

import { useState } from "react";
import { company } from "@/lib/content";

type State = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-black/[0.09] bg-white px-4 py-3.5 text-[15px] outline-none transition-all duration-300 placeholder:text-ink-400 focus:border-ember-400 focus:ring-4 focus:ring-ember-500/10";

const label = "mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        setState("error");
        return;
      }
      form.reset();
      setState("sent");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="reveal py-6 text-center" data-visible="true">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-ember-500 text-white">
          <svg
            viewBox="0 0 24 24"
            className="size-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            aria-hidden
          >
            <path d="m5 13 4.5 4.5L19 8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink-900">
          Thank you for getting in touch
        </h3>
        <p className="mt-2 text-[15px] text-ink-500">
          We have your enquiry and will come back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-7 text-sm font-semibold text-ember-600 transition-colors hover:text-ember-500"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name <span className="text-ember-500">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={label}>
          Email <span className="text-ember-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Message <span className="text-ember-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Which parts do you need, and in what quantity?"
          className={`${field} resize-y`}
        />
      </div>

      {/* Honeypot, hidden from real users */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="company-website">Do not fill this in</label>
        <input id="company-website" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {state === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <p className="font-semibold">{error}</p>
          <p className="mt-1.5 text-red-700">
            You can also reach us on{" "}
            <a href={`tel:${company.phones[0].tel}`} className="font-semibold underline">
              {company.phones[0].number}
            </a>{" "}
            or{" "}
            <a href={`mailto:${company.email}`} className="font-semibold underline">
              {company.email}
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ink-900 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-ember-500 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {state === "sending" ? "Sending..." : "Send enquiry"}
        {state !== "sending" && (
          <svg
            viewBox="0 0 24 24"
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            aria-hidden
          >
            <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </form>
  );
}
