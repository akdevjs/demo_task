import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const commonClasses =
  "disabled:opacity-40 disabled:cursor-not-allowed disable px-5 py-2 rounded-md";

const variantClasses = {
  primary: "bg-blue-600 hover:bg-blue-400 text-white",
  secondary: "bg-gray-600 hover:bg-gray-400 text-white",
  ghost: "bg-transparent outline-none border-none bg-none",
  danger: "bg-red-600 hover:bg-red-400 text-white",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  href,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const classes = `${variantClasses[variant]} ${
    variant !== "ghost" && commonClasses
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
