import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from '@pkgs/uignite';

const Auth = () => {
  return (
    <div className="flex w-full h-[620px] items-center justify-center gap-32 mt-12">
      {/* <SignIn />
      <SignUp /> */}
      <Card className="w-[360px] py-6">
        <CardHeader>
          <CardTitle className="text-4xl">Sign Up</CardTitle>
          <CardDescription className="text-base">
            Create a new account to get started.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name">Name</label>
                <Input id="name" placeholder="Enter your name" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="password">Password</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Choose a password"
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">Create Account</Button>
          <p className="text-sm text-muted-foreground text-center">
            Already have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Login here
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
