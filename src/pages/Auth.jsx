import React from "react";

import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const Auth = () => {
  return (
    <div className="flex w-full items-center justify-center gap-32 mt-24">
      <SignUp />
      <SignIn />
    </div>
  );
};

export default Auth;
