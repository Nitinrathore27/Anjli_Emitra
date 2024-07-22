import { useState } from "react";
import Nav from "./Nav";

const Layout = ({ children }: any) => {
  const session = true;
  const [showNav, setShowNav] = useState(false);
  if (!session) {
    return (
      <div className="bg-slate-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button className="bg-white p-2 px-4 rounded-lg"> Login </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-blue-900 h-screen">

      <div className="flex h-full w-full ">
        <Nav />
        <div className="flex-grow p-4 bg-white mt-2 mr-2 ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
