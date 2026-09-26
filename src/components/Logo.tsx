const SRC =
  "/brand/hyresro1.png";

type Props = {
  className?: string;
};

export function Logo({ className = "" }: Props) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={SRC}
        alt="Hyresro"
        className="h-8 w-auto sm:h-9"
        width={160}
        height={46}
      />
    </span>
  );
}
