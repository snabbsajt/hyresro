import { logoB64 } from "@/lib/logoB64";

type Props = {
  className?: string;
};

export function Logo({ className = "" }: Props) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={`data:image/png;base64,${logoB64}`}
        alt="Hyresro"
        className="h-8 w-auto sm:h-9"
        width={160}
        height={46}
      />
    </span>
  );
}
