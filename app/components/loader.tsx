import { Oval } from "react-loader-spinner";

type LoaderProps = {
  show: boolean;
};

const Loader = (props: LoaderProps) => {
  const { show = true } = props;

  return (
    <Oval
      visible={show}
      height="120"
      width="120"
      ariaLabel="oval-loading"
      color="#000"
      secondaryColor="grey"
    />
  );
};

export default Loader;
