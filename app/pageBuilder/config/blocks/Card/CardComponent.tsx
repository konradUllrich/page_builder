// import dynamic from "next/dynamic";
// import dynamicIconImports from "lucide-react/dynamicIconImports";
import clsx from "clsx";
// const icons = Object.keys(dynamicIconImports).reduce((acc, iconName) => {
//     //@ts-ignore
//     const El = dynamic(dynamicIconImports[iconName]);
//     return {
//         ...acc,
//         [iconName]: <El />,
//     };
// }, {});

export type CardProps = {
  title: string;
  description: string;
  icon?: "Feather";
  mode: "flat" | "card";
};

const CardComponent = (props: CardProps) => {
  const { title, icon, description, mode } = props;
  return (
    <div
      className={clsx("flex flex-col mx-auto gap-4 w-full", {
        "shadow-lg p-6": mode === "card",
        "items-center": mode !== "card",
      })}
    >
      {/* <div className={' bg-primary-200 text-primary-500 rounded-full flex justify-center items-center w-16 h-16'}>{
            //@ts-ignore
            icons[icon]}
            </div> */}
      <div className="text-lg">{title}</div>
      <div className="">{description}</div>
    </div>
  );
};

export default CardComponent;
