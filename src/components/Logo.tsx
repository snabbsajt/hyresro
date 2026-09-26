type Props = {
  className?: string;
};

export function Logo({ className = "" }: Props) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/hyresro1.png"
        alt="Hyresro"
        className="h-11 w-auto md:h-14 lg:h-16"
        style={{ mixBlendMode: "screen" }}
        width={280}
        height={80}
      />
    </span>
  );
}
