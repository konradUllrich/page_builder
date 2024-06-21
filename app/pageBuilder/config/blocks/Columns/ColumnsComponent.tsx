import { Section } from "../../components/Section";

export type ColumnsProps = {
  distribution: "auto" | "manual";
  columns: {
    span?: number;
  }[];
};

const ColumnsComponent = (
  props: ColumnsProps & {
    renderDropZone: (props: {
      zone: string;
      disallow: string[];
    }) => React.ReactNode;
  }
) => {
  const { distribution, columns, renderDropZone } = props;
  return (
    <Section>
      <div
        className={"flex md:grid gap-6 grid-cols-12"}
        style={{
          gridTemplateColumns:
            distribution === "manual"
              ? "repeat(12, 1fr)"
              : `repeat(${columns.length}, 1fr)`,
        }}
      >
        {columns.map(({ span }, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "column",
              gridColumn:
                span && distribution === "manual"
                  ? `span ${Math.max(Math.min(span, 12), 1)}`
                  : "",
            }}
          >
            {renderDropZone({
              zone: `column-${idx}`,
              disallow: ["Hero", "Logos", "Stats"],
            })}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ColumnsComponent;
