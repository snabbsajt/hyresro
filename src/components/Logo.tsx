type Props = {
  className?: string;
};

export function Logo({ className = "" }: Props) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/hyresro1.png"
        alt="Hyresro"
        className="h-8 w-auto sm:h-9"
        style={{ mixBlendMode: "screen" }}
        width={180}
        height={50}
      />
    </span>
  );
}
