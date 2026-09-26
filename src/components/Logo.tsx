import { site } from "@/config/site";

type Props = {
  className?: string;
};

const WINDOW = "#3B5FDB";

export function Logo({ className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2 text-white ${className}`}>
      <svg
        width="40"
        height="34"
        viewBox="0 0 40 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M4 15.5 L20 2.2 L28.8 10 V5.2 H35.2 V14.8 L36 15.5"
          stroke="white"
          strokeWidth="3.2"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
        <path d="M7.2 15.2 V31.2 H32.8 V15.2" stroke="white" strokeWidth="3.2" />
        <rect x="14.2" y="16.6" width="5" height="5" fill={WINDOW} />
        <rect x="20.6" y="16.6" width="5" height="5" fill={WINDOW} />
        <rect x="14.2" y="22.8" width="5" height="5" fill={WINDOW} />
        <rect x="20.6" y="22.8" width="5" height="5" fill={WINDOW} />
      </svg>
      <span className="font-sans text-[22px] font-bold leading-none tracking-tight">
        {site.name}
      </span>
    </span>
  );
}
