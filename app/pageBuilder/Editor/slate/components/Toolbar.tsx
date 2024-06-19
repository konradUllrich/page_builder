import React, { Ref, PropsWithChildren } from "react";

export const Toolbar = React.forwardRef(
  ({ ...props }: PropsWithChildren<{}>, ref: Ref<HTMLDivElement>) => (
    <div ref={ref} {...props} className="flex py-4" />
  )
);
Toolbar.displayName = "Toolbar";
