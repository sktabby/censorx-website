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

  const handleClick = (e) => {
    // 👉 Always scroll to top on navigation intent
    window.scrollTo({ top: 0, left: 0 });

    // 👉 Preserve existing behavior
    if (onClick) onClick(e);
  };

  const props =
    Comp === "a"
      ? { href, onClick: handleClick }
      : { onClick: handleClick, type };

  return (
    <Comp className={`${base} ${className}`} {...props}>
      {children}
    </Comp>
  );
}
