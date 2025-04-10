import Input from "./Input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";
import { Button } from "./Button";

const SignIn = () => {
  return (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>Welcome back! Please sign in.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="email">Email</label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-full">Sign In</Button>
        <p className="text-sm text-center">
          Not registered?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Create an account
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignIn;
