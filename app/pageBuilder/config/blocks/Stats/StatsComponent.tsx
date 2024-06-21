import { Section } from "../../components/Section";

export type StatsProps = {
  items: {
    title: string;
    description: string;
  }[];
};

const StatsComponent = (props: StatsProps) => {
  const { items } = props;
  return (
    <Section>
      <div
        className={
          "bg-primary-600 rounded-3xl grid gap-20 grid-cols-1 md:grid-cols-2 items-center justify-between my-auto max-w-3xl py-16 px-4 mx-auto"
        }
      >
        {items.map((item, i) => (
          <div
            key={i}
            className={
              "flex flex-col items-center text-white gap-2 overflow-hidden w-full"
            }
          >
            <div className={"text-2xl text-center font-semibold opacity-80"}>
              {item.title}
            </div>
            <div className={"text-7xl font-bold"}>{item.description}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default StatsComponent;
