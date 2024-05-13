import { Config, CustomField } from "@measured/puck";

import RichText, { RenderRichText } from "@/app/pageBuilder/Editor/Editor";
import Dialog from "../../Dialog";

const RichTextBlock: Config["components"] = {
  RichText: {
    fields: {
      data: {
        type: "custom",
        render: ({ onChange, value }) => {
          return (
            <Dialog>
              <RichText
                showToolbar
                //@ts-ignore
                onChange={onChange}
                data={value}
              />
            </Dialog>
          );
        },
      },
    },

    render: function HeadingBlock(props) {
      const data = props.data;

      return (
        <div className="container">
          <RenderRichText data={data} />
        </div>
      );
    },
  },
};

export default RichTextBlock;
