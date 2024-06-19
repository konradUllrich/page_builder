import React, { Ref, PropsWithChildren } from "react";
import { cx, css } from "@emotion/css";
import { BaseProps, OrNull } from "./components";

export const Icon = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLSpanElement>>
  ) => (
    <span
      {...props}
      //@ts-ignore
      ref={ref}
      className={cx(
        "material-icons",
        className,
        css`
          font-size: 18px;
          vertical-align: text-bottom;
        `
      )}
    />
  )
);
Icon.displayName = "Icon";
