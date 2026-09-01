import type { ReactNode } from "react";

interface ButtonProps {
  label: string;
  href: string;
  variant?: 1 | 2;
  icon?: string;
  iconNode?: ReactNode;
  onClick?: () => void;
}

export default function Button({ label, href, variant = 2, icon, iconNode, onClick }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-1.5 font-semibold transition-all duration-300 ease px-4 py-2.5 rounded-full cursor-pointer text-center text-[13px] sm:text-sm whitespace-nowrap";

  const styles =
    variant === 1
      ? `${base} gradient-brand text-white border-none hover:brightness-110 hover:-translate-y-px`
      : `${base} bg-transparent text-text border border-border hover:border-accent-violet hover:text-accent-violet`;

  const handleClick = onClick ?? (() => (window.location.href = href));

  return (
    <button className={styles} onClick={handleClick}>
      {iconNode}
      {icon && <img src={icon} alt="" className="h-4 w-4 rounded object-contain bg-white p-[1px]" />}
      {label}
    </button>
  );
}