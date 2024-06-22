export type ImageProps = {
  title: string;
  image: string;
};
const ImageComponent = (props: ImageProps) => {
  const {} = props;

  return <div className="w-full h-28 bg-slate-500">image</div>;
};

export default ImageComponent;
