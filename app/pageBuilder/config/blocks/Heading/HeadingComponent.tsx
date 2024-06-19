import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority"
import { Section } from "../../components/Section";





const headingVariants = cva('font-bold', {
    variants: {
        size: {
            xxxxl: 'text-4xl',
            xxxl: 'text-3xl',
            xxl: 'text-2xl',
            xl: 'text-xl',
            l: 'text-lg',
            m: 'text-base',
            s: 'text-sm',
            xs: 'text-xs',
        }
    }
})

export type HeadingProps = {
    align: "left" | "center" | "right";
    text?: string;
    textb?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size: VariantProps<typeof headingVariants>['size'];
    padding?: string;
  };




 const HeadingComponent = (props: HeadingProps) => {

    const {padding, level, size = "m",text,align} = props

    
    
    const Tag: any = level ? `h${level}` : "span";

    return (
        <Section padding={padding}>
        <Tag
            className={headingVariants({ size })}
        >
             <span style={{ display: "block", textAlign: align, width: "100%" }}>
             {text}
             </span>
           
        </Tag>
        </Section>
    );
};


export default  HeadingComponent