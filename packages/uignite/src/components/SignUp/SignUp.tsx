// src/components/SignUpCard.tsx
import React from 'react';
import {Input} from '@/components/Input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/Card';
import {Button} from '@/components/Button';

const SignUp: React.FC = () => {
  return (
    <Card className="w-[420px] py-6 px-10 text-zinc-800 dark:text-zinc-200">
      <CardHeader>
        <CardTitle className="text-4xl">Sign Up</CardTitle>
        <CardDescription className="text-base font-normal">
          Create a new account to get started.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="mt-4">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <Input id="name" placeholder="Enter your name" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Choose a password"
              />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-2 mt-8">
        <Button className="w-full text-base">Create Account</Button>
        <p className="text-sm text-center">
          Already have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignUp;
