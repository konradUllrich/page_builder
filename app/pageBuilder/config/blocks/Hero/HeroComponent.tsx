import { HeroProps } from ".";
import styles from "./styles.module.css";
import getClassNameFactory from "@/lib/get-class-name-factory";
import { Section } from "../../components/Section";

import { Button } from "@/components/ui/button";

const getClassName = getClassNameFactory("Hero", styles);

const HeroComponent= ({ align, title, description, buttons, padding, image, isEditing }:HeroProps & {isEditing?:boolean}) => {
   

    return (
      <Section
        padding={padding}
        className={getClassName({
          left: align === "left",
          center: align === "center",
          hasImageBackground: image?.mode === "background",
        })}
      >
        {image?.mode === "background" && (
          <>
            <div
              className={getClassName("image")}
              style={{
                backgroundImage: `url("${image?.url}")`,
              }}
            ></div>

            <div className={getClassName("imageOverlay")}></div>
          </>
        )}

        <div className={getClassName("inner")}>
          <div className={getClassName("content")}>
            <h1>{title}</h1>
            <p className={getClassName("subtitle")}>{description}</p>
            <div className={getClassName("actions")}>
              {buttons.map((button, i) => (
                <Button
                key={i}
                >
                     {button.label}

                </Button>
                // <Button
                //   key={i}
                //   href={button.href}
                //   variant={button.variant}
                //   size="large"
                //   //@ts-ignore
                //   tabIndex={isEditing ? -1 : undefined}
                // >
                //   {button.label}
                // </Button>
              ))}
            </div>
          </div>

          {align !== "center" && image?.mode !== "background" && image?.url && (
            <div
              style={{
                backgroundImage: `url('${image?.url}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderRadius: 24,
                height: 356,
                marginLeft: "auto",
                width: "100%",
              }}
            />
          )}
        </div>
      </Section>
    );
  }

  export default HeroComponent