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
        <input name="name" className="mt-1 w-full border border-[#E3DFD9] bg-white px-3 py-2" />
      </label>
      <label className="block text-sm">
        Er e-post
        <input name="email" type="email" required className="mt-1 w-full border border-[#E3DFD9] bg-white px-3 py-2" />
      </label>
      <label className="block text-sm">
        Meddelande
        <textarea name="message" required rows={5} className="mt-1 w-full border border-[#E3DFD9] bg-white px-3 py-2" />
      </label>
      <button
        type="submit"
        className="border border-[#1A1A1A] bg-transparent px-4 py-2 text-sm font-medium hover:bg-[#1A1A1A] hover:text-white"
      >
        Öppna mejl
      </button>
    </form>
  );
}
