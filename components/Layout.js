const Layout = ({ children }) => {
  return (
    <div className="relative">
      <div className="pt-4 px-4 sm:px-16">{children}</div>
      <div className="light:hidden hidden sm:block fixed top-0 -z-10 bg-cover bg-no-repeat w-screen h-screen" />
      <div className="light:hidden block sm:hidden fixed top-0 -z-10 bg-cover bg-no-repeat w-screen h-screen" />
      <div className="light:hidden fixed top-0 -z-10 bg-cover bg-no-repeat w-screen h-screen" />
    </div>
  );
};

export default Layout;
