"use client";
import { Button, type Data, Puck, usePuck } from "@measured/puck";
import headingAnalyzer from "@measured/puck-plugin-heading-analyzer";
import "@measured/puck-plugin-heading-analyzer/dist/index.css";
import "@measured/puck/puck.css";
import { DesktopIcon } from "@radix-ui/react-icons";
import { useRef } from "react";
// import { Globe } from "lucide-react";
import puckConfig, { UserConfig } from "./config";

const PageBuilder = ({
  path,
  data,
  onSave,
}: {
  path: string;
  data: Data;
  onSave: (data: Data) => Promise<any>;
}) => {
  return (
    <div>
      <Puck<UserConfig>
        viewports={[
          {
            width: 1200,
            label: "comp",
            icon: <DesktopIcon />,
          },
          {
            width: 320,
            label: "phone",
          },
        ]}
        config={puckConfig}
        data={data}
        onPublish={async (data: Data) => {
          await onSave(data);
        }}
        plugins={[headingAnalyzer]}
        headerPath={path}
        overrides={{
          headerActions: function HeaderActiond({ children }) {
            const p = usePuck();
            const initData = useRef(JSON.stringify(p.appState.data));
            const hasChanges =
              initData.current !== JSON.stringify(p.appState.data);

            return <>{children}</>;

            return (
              <>
                <Button disabled={!hasChanges} variant="primary">
                  {/* <Globe size="14px" /> Publish */}
                </Button>
              </>
            );
          },
        }}
      />
    </div>
  );
};

export default PageBuilder;
