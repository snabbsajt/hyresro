import { site } from "@/config/site";

type Props = {
  className?: string;
};

const WINDOW = "#3B5FDB";

export function Logo({ className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-ink ${className}`}>
      <svg
        width="38"
        height="34"
        viewBox="0 0 36 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M3.5 14.5 L18 3.2 L26.2 10.2 V6.2 H31.2 V14.2 L32.5 15.2"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
        <path d="M6.2 14.8 V29.2 H29.8 V14.8" stroke="currentColor" strokeWidth="2.2" />
        <rect x="13.1" y="16.2" width="4.3" height="4.3" fill={WINDOW} />
        <rect x="18.4" y="16.2" width="4.3" height="4.3" fill={WINDOW} />
        <rect x="13.1" y="21.5" width="4.3" height="4.3" fill={WINDOW} />
        <rect x="18.4" y="21.5" width="4.3" height="4.3" fill={WINDOW} />
      </svg>
      <span className="font-sans text-[20px] font-semibold leading-none tracking-tight">
        {site.name}
      </span>
    </span>
  );
}
