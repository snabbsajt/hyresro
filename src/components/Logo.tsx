import { site } from "@/config/site";

type Props = {
  className?: string;
};

const WINDOW = "#8BA4D9";

export function Logo({ className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <svg
        width="36"
        height="34"
        viewBox="0 0 28 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M4 13 L14 4 L20 9.2 V6.5 H23.2 V12 L24 13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M5.2 12.2 V24"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M22.8 12.2 V24"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect x="10.2" y="13.2" width="3.2" height="3.2" fill={WINDOW} />
        <rect x="14.6" y="13.2" width="3.2" height="3.2" fill={WINDOW} />
        <rect x="10.2" y="17.6" width="3.2" height="3.2" fill={WINDOW} />
        <rect x="14.6" y="17.6" width="3.2" height="3.2" fill={WINDOW} />
      </svg>
      <span className="translate-y-[1px] font-sans text-[19px] font-semibold leading-none tracking-tight text-ink">
        {site.name}
      </span>
    </span>
  );
}
