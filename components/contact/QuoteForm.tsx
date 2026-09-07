"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { CornerTicks } from "@/components/ui/Drafting";
import { contact } from "@/lib/data/company";

type Fields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  website: string;
};

const empty: Fields = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
  website: "",
};

const serviceOptions = [
  "Commercial",
  "Civil & Infrastructure",
  "Industrial & Energy",
  "Pre-Construction / Design-Build",
  "Not sure yet",
];

const budgetOptions = [
  "Under $5M",
  "$5M – $25M",
  "$25M – $100M",
  "$100M+",
  "To be determined",
];

export function QuoteForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "done") successRef.current?.focus();
  }, [status]);

  const set = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setStatus((current) => (current === "error" ? "idle" : current));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Tell us who you are.";
    if (!fields.email.trim()) next.email = "We need an email to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      next.email = "That email doesn't look right.";
    if (!fields.service) next.service = "Pick the closest fit.";
    if (!fields.message.trim() || fields.message.trim().length < 12)
      next.message = "A sentence or two about the project helps.";
    return next;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstField = Object.keys(found)[0];
      document.getElementById(firstField)?.focus();
      return;
    }
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!response.ok) throw new Error("Contact request failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="relative flex min-h-[28rem] flex-col items-start justify-center border border-line bg-paper p-8 sm:p-12"
      >
        <CornerTicks className="m-3" />
        <span className="grid h-12 w-12 place-items-center bg-amber text-ink">
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
            <path d="M1 8l6 6L21 1" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
        <h3 className="mt-6 font-display text-3xl font-bold text-ink">
          Thanks, {fields.name.split(" ")[0] || "there"}.
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-graphite">
          Your project brief is in. A member of our pre-construction team will
          reach out within one business day to set up a conversation.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(empty);
            setStatus("idle");
          }}
          className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-deep"
        >
          Submit another brief
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-busy={status === "submitting"}
      className="relative border border-line bg-paper p-6 sm:p-8 lg:p-10"
    >
      <CornerTicks className="m-3" />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name} htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={fields.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputCls(!!errors.name)}
          />
        </Field>

        <Field label="Work email" required error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={fields.email}
            onChange={set("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputCls(!!errors.email)}
          />
        </Field>

        <Field label="Company" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={fields.company}
            onChange={set("company")}
            className={inputCls(false)}
          />
        </Field>

        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={set("phone")}
            className={inputCls(false)}
          />
        </Field>

        <Field label="Project type" required error={errors.service} htmlFor="service">
          <select
            id="service"
            name="service"
            value={fields.service}
            onChange={set("service")}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            required
            className={inputCls(!!errors.service)}
          >
            <option value="" disabled>
              Select one…
            </option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Estimated budget" htmlFor="budget">
          <select
            id="budget"
            name="budget"
            value={fields.budget}
            onChange={set("budget")}
            className={inputCls(false)}
          >
            <option value="" disabled>
              Select a range…
            </option>
            {budgetOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field
          label="About the project"
          required
          error={errors.message}
          htmlFor="message"
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={fields.message}
            onChange={set("message")}
            placeholder="Scope, location, target dates, and anything that makes it tricky."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cn(inputCls(!!errors.message), "resize-none")}
          />
        </Field>
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={set("website")}
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-6 border-l-2 border-amber bg-amber-soft/50 px-4 py-3 text-sm leading-relaxed text-ink"
        >
          We could not send your brief. Please try again or email{" "}
          <a
            href={contact.emailHref}
            className="font-medium underline decoration-amber decoration-2 underline-offset-4"
          >
            {contact.email}
          </a>
          .
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="data-label text-concrete">
          Typical reply — 1 business day
        </p>
        <Button
          type="submit"
          variant="primary"
          arrow
          disabled={status === "submitting"}
          aria-live="polite"
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Send project brief"}
        </Button>
      </div>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full border-b bg-transparent py-2.5 font-body text-base text-ink outline-none transition-colors placeholder:text-concrete",
    "focus:border-amber",
    hasError ? "border-amber" : "border-line-strong hover:border-ink/40"
  );
}

function Field({
  label,
  required,
  error,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={htmlFor}
        className="data-label mb-2 flex items-center gap-1.5 text-graphite"
      >
        {label}
        {required && <span className="text-amber-deep">*</span>}
      </label>
      {children}
      {error && (
        <span
          id={`${htmlFor}-error`}
          role="alert"
          className="mt-1.5 font-mono text-xs text-amber-deep"
        >
          {error}
        </span>
      )}
    </div>
  );
}
