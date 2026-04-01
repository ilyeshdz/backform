import { ComponentChildren } from "preact";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ComponentChildren;
  className?: string;
}

export interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
}

export interface ButtonButtonProps extends ButtonBaseProps {
  href?: never;
  type?: "button" | "submit" | "reset";
}

export type ButtonProps = ButtonLinkProps | ButtonButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-bg hover:opacity-85",
  secondary: "bg-bg text-ink hover:opacity-85",
  outline: "border border-[#3A3630] text-ink-muted hover:text-bg hover:border-ink-muted",
  ghost: "text-ink-muted hover:text-ink",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-7 py-[13px] text-[13px]",
  lg: "px-8 py-[15px] text-sm",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", children, className = "" } = props;

  const baseStyles = `
    font-mono 
    cursor-pointer 
    no-underline 
    inline-flex 
    items-center 
    gap-2 
    transition-all 
    duration-150 
    tracking-[0.01em]
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  if ("href" in props && props.href) {
    return (
      <a href={props.href} className={baseStyles}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={baseStyles}>
      {children}
    </button>
  );
}
