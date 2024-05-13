import { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";

export const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  type,
  disabled,
  tabIndex,
  newTab,
  fullWidth,
  icon,
  size = "medium",
  loading: loadingProp = false,
}: {
  children: ReactNode;
  href?: string;
  onClick?: (e: any) => void | Promise<void>;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  tabIndex?: number;
  newTab?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  size?: "medium" | "large";
  loading?: boolean;
}) => {
  const ElementType = href ? "a" : type ? "button" : "span";

  const el = (
    <ElementType
      className=""
      onClick={(e) => {}}
      type={type}
      disabled={disabled}
      tabIndex={tabIndex}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      href={href}
    >
      {icon && <div className={clsx("")}>{icon}</div>}
      {children}
    </ElementType>
  );

  return el;
};
