import {SignIn, SignUp} from '@pkgs/uignite';

const Auth = () => {
  return (
    <div className="flex w-full h-[620px] items-center justify-center gap-32 mt-12">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
