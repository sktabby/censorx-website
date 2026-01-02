
import React from "react";

export default function Button({
  children,
  variant = "primary",
  as = "button",
  href,
  onClick,
  type = "button",
  className = "",
}) {
  const Comp = as;

  const base =
    "btnBase " +
    (variant === "primary"
      ? "btnPrimary"
      : variant === "ghost"
      ? "btnGhost"
      : "btnOutline");

  const props = Comp === "a" ? { href } : { onClick, type };

  return (
    <Comp className={`${base} ${className}`} {...props}>
      {children}
    </Comp>
  );
}
