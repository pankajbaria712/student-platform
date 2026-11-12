"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";

const feedbackTypes = [
  { value: "broken", label: "Report a broken resource" },
  { value: "incorrect", label: "Report an incorrect PDF or content" },
  { value: "missing", label: "Suggest missing study materials" },
  { value: "general", label: "General feedback" },
];

export default function FeedbackForm() {
  const [category, setCategory] = useState("");
  const [resourceUrl, setResourceUrl] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [draftHref, setDraftHref] = useState("");
  const [error, setError] = useState("");

  const resetDraftState = () => {
    setDraftHref("");
    setError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const categoryLabel =
      feedbackTypes.find((item) => item.value === category)?.label ?? "";
    const body = [
      `Feedback type: ${categoryLabel}`,
      resourceUrl.trim() ? `Resource URL: ${resourceUrl.trim()}` : "",
      email.trim() ? `Reply-to: ${email.trim()}` : "",
      "",
      message.trim(),
    ]
      .filter(Boolean)
      .join("\n");
    const params = new URLSearchParams({
      subject: `GTU Student Hub: ${categoryLabel}`,
      body,
    });
    const href = `mailto:refunds@gtustudenthub.com?${params.toString()}`;

    if (href.length > 1800) {
      setDraftHref("");
      setError("Please shorten your message or resource URL before preparing the email.");
      return;
    }

    setError("");
    setDraftHref(href);
  };

  const handleReset = () => {
    setCategory("");
    setResourceUrl("");
    setMessage("");
    setEmail("");
    resetDraftState();
  };

  return (
    <div id="feedback" className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8">
      <h2 className="mb-2 text-2xl font-bold">Send feedback</h2>
      <p className="mb-6 text-sm leading-6 text-gray-400">
        Report a broken link, incorrect content, missing materials, or send a general suggestion.
      </p>

      <form className="space-y-5" onSubmit={handleSubmit} onReset={handleReset}>
        <div>
          <label htmlFor="feedback-category" className="mb-2 block text-sm font-medium">
            Feedback type
          </label>
          <select
            id="feedback-category"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
              resetDraftState();
            }}
            required
            className="min-h-12 w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          >
            <option value="">Select a topic</option>
            {feedbackTypes.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="feedback-resource-url" className="mb-2 block text-sm font-medium">
            Resource URL <span className="text-gray-500">(optional)</span>
          </label>
          <input
            id="feedback-resource-url"
            type="text"
            value={resourceUrl}
            maxLength={500}
            onChange={(event) => {
              setResourceUrl(event.target.value);
              resetDraftState();
            }}
            placeholder="Paste the broken or incorrect resource link"
            className="min-h-12 w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          />
        </div>

        <div>
          <label htmlFor="feedback-message" className="mb-2 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="feedback-message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              resetDraftState();
            }}
            minLength={10}
            maxLength={1500}
            required
            rows={5}
            placeholder="Describe the issue or study material you need"
            className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          />
          <p className="mt-1 text-right text-xs text-gray-500">{message.length}/1500</p>
        </div>

        <div>
          <label htmlFor="feedback-email" className="mb-2 block text-sm font-medium">
            Reply email <span className="text-gray-500">(optional)</span>
          </label>
          <input
            id="feedback-email"
            type="email"
            value={email}
            maxLength={254}
            onChange={(event) => {
              setEmail(event.target.value);
              resetDraftState();
            }}
            placeholder="you@example.com"
            className="min-h-12 w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          />
        </div>

        {error ? (
          <p role="alert" className="rounded-lg border border-red-400/20 bg-red-400/5 p-3 text-sm text-red-200">
            {error}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            Prepare email draft
          </button>
          <button
            type="reset"
            className="min-h-12 rounded-lg border border-white/10 px-4 text-sm font-medium text-gray-300 transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            Clear
          </button>
        </div>
      </form>

      {draftHref ? (
        <div
          role="status"
          className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4 text-sm text-emerald-100"
        >
          <p>
            The form has not been submitted to this site. Open the email draft and send it from your email app to deliver your feedback.
          </p>
          <a
            href={draftHref}
            className="mt-3 inline-flex min-h-10 items-center rounded-lg bg-emerald-400/10 px-4 font-semibold text-white transition hover:bg-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            Open email draft
          </a>
        </div>
      ) : (
        <p className="mt-4 text-xs leading-5 text-gray-500">
          Feedback is not stored or transmitted by this site. Preparing a draft opens your email app; you must send it there.
        </p>
      )}
    </div>
  );
}
