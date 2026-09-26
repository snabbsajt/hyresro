import { site } from "@/config/site";

type Props = {
  className?: string;
};

const WINDOW = "#3B5FDB";

export function Logo({ className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2 text-white ${className}`}>
      <svg
        width="36"
        height="32"
        viewBox="0 0 36 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M3 15 L18 2 L26.5 9.5 V5 H32.5 V13.8 L33.5 15"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinejoin="miter"
        />
        <path d="M6.4 15 V29.5 H29.6 V15" stroke="currentColor" strokeWidth="2.8" />
        <rect x="13" y="16.2" width="4.4" height="4.4" fill={WINDOW} />
        <rect x="18.6" y="16.2" width="4.4" height="4.4" fill={WINDOW} />
        <rect x="13" y="21.7" width="4.4" height="4.4" fill={WINDOW} />
        <rect x="18.6" y="21.7" width="4.4" height="4.4" fill={WINDOW} />
      </svg>
      <span className="font-sans text-[21px] font-bold leading-none tracking-tight">
        {site.name}
      </span>
    </span>
  );
}
