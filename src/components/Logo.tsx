import { site } from "@/config/site";

type Props = {
  className?: string;
};

/** Husikon med fyra indigo-rutor + text. */
export function Logo({ className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-base font-semibold tracking-tight text-ink ${className}`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        {/* House outline */}
        <path
          d="M4 12.5L14 4l10 8.5V24a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V12.5z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        {/* Four indigo windows */}
        <rect x="8" y="13" width="4" height="4" fill="#3E63DD" />
        <rect x="16" y="13" width="4" height="4" fill="#3E63DD" />
        <rect x="8" y="19" width="4" height="4" fill="#3E63DD" />
        <rect x="16" y="19" width="4" height="4" fill="#3E63DD" />
      </svg>
      <span>{site.name}</span>
    </span>
  );
}
