const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;

const Header = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-24 bg-white z-10"></div>
      <div className=" w-full h-24 bg-white z-10"></div>
    </>
  );
};
