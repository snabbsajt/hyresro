"use client";

import { site } from "@/config/site";

export function ContactForm() {
  const to = site.contactEmail;
  return (
    <form
      className="max-w-md space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = String(fd.get("name") ?? "");
        const from = String(fd.get("email") ?? "");
        const body = String(fd.get("message") ?? "");
        const subject = encodeURIComponent(`Hyresro: ${name || "meddelande"}`);
        const text = encodeURIComponent(`${body}\n\nFrån: ${name} <${from}>`);
        const addr = to || from;
        window.location.href = `mailto:${addr}?subject=${subject}&body=${text}`;
      }}
    >
      <label className="block text-sm">
        Namn
        <input
          name="name"
          className="mt-1 w-full border border-white/15 bg-[#141414] px-3 py-2 text-[#d2ccc2]"
        />
      </label>
      <label className="block text-sm">
        Er e-post
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full border border-white/15 bg-[#141414] px-3 py-2 text-[#d2ccc2]"
        />
      </label>
      <label className="block text-sm">
        Meddelande
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full border border-white/15 bg-[#141414] px-3 py-2 text-[#d2ccc2]"
        />
      </label>
      <button
        type="submit"
        className="border border-[#d2ccc2] bg-transparent px-4 py-2 text-sm font-medium text-[#d2ccc2] hover:bg-[#d2ccc2] hover:text-[#0c0c0c]"
      >
        Öppna mejl
      </button>
    </form>
  );
}
