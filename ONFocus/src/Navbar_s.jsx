import React from "react";
import Logo from "./assets/FocusON.png";
import Test from "./Components/Test";
export default function Navbar_s({ user, setUser }) {
  const firstName = user.displayName.split(" ")[0];

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <div className="flex justify-between lg:px-20 bg-white border-b border-black px-5 py-5">
        <img
          src={Logo}
          className="xl:h-10 lg:h-8 self-center justify-self-center h-6"
          alt=""
        />
        <div className="flex gap-3 self-center justify-self-center">
          <h1 className="lg:text-2xl text-xl font-semibold pt-1.5">
            {firstName}
          </h1>
          <Test user={user} handleLogout={handleLogout} />
        </div>
      </div>
    </>
  );
}
