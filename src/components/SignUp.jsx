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

const SignUpCard = () => {
  return (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>Create a new account to get started.</CardDescription>
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
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                placeholder="Choose a password"
                type="password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full">Create Account</Button>
        <p className="text-sm text-muted-foreground text-center">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};
export default SignUpCard;
