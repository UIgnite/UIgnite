import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from '@pkgs/uignite';
import {Eye, EyeOff, Info} from 'lucide-react';
import {useState} from 'react';

const TestCards = () => {
  const [status, setStatus] = useState('Follow');

  function clickHandler() {
    const final = status === 'Follow' ? 'Unfollow' : 'Follow';
    setStatus(final);
  }
  return (
    <div className="">
      <div className="flex gap-12 p-12">
        <Card className="mt-6 rounded-2xl shadow-lg max-h-min">
          <CardHeader className="flex flex-row justify-between px-4 pt-2 items-center">
            <div className="flex gap-3 items-center">
              <Avatar url="/hitesh-sir.png" alt="avatar" />
              <div>
                <CardTitle className="text-base">Hitesh Chaudhary</CardTitle>
                <CardDescription className="text-sm dark:text-gray-400">
                  @HiteshDotCom
                </CardDescription>
              </div>
            </div>
            <Button
              onClick={clickHandler}
              className={`${
                status === 'Unfollow'
                  ? 'bg-zinc-900 hover:bg-neutral-900 dark:border dark:border-white border-2'
                  : 'bg-blue-600 hover:bg-blue-700'
              } transform transition-all duration-200 ease-out active:scale-95 cursor-pointer text-white text-sm font-medium py-1.5 px-4 rounded-full`}
            >
              {status}
            </Button>
          </CardHeader>

          <CardContent className="text-sm dark:text-gray-300 px-4 pb-2 pt-1">
            <p>
              Retired from corporate and full time YouTuber, x founder of LCO
              (acquired), x CTO, Sr. Director at PW. 2 YT channels (950k &
              470k), stepped into 43 countries.
            </p>

            <div className="mt-2 flex items-center gap-4 text-sm dark:text-gray-400">
              <span>
                <span className=" font-semibold">386</span> Following
              </span>
              <span>
                <span className=" font-semibold">21.6K</span> Followers
              </span>
            </div>
          </CardContent>
        </Card>

        {/* course card */}

        <Card className="m-0 p-0 pb-3">
          <div>
            <img
              className="object-cover rounded-t-xl"
              src="/youtube-thumbnail-3.jpg"
              alt=""
            />
          </div>

          <CardContent className="px-2">
            <h1 className="font-semibold text-2xl text-zinc-800 dark:text-zinc-200">
              Web Dev Cohort 1.0
            </h1>
            <p className="text-sm leading-tight text-neutral-700 dark:text-neutral-400">
              Master full-stack web development with Web Dev Cohort. Learn HTML,
              CSS, JS, React, Next.js, Node, Docker, databases like
              MongoDB/PostgreSQL, DevOps with AWS (ECR, EC2, CloudFront), modern
              workflows like Turbo Repo, TypeScript, and GitHub CI/CD.
            </p>
            <div className="flex gap-2 items-center mt-2 funnel">
              <div className="font-medium text-xl ">6,999 INR</div>
              <div className="line-through text-base text-gray-400 dark:text-gray-500">
                8,999 INR
              </div>
            </div>
            <div className="text-sm text-blue-500 dark:text-blue-400">
              Save 22%
            </div>
            <a
              href="https://courses.chaicode.com/learn/batch/about?bundleId=214297"
              target="_blank"
            >
              <Button className="mt-3 w-full">
                Learn More
                <Info className="ml-2 size-4" />
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* github card */}

        <Card className="m-0 p-0 h-[440px] w-[325px] rounded-3xl">
          <CardHeader className="m-0 p-0 ">
            <img
              src="/me.png"
              alt=""
              className="h-[295px] w-full object-cover rounded-t-xl"
            />
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center mt-3">
            <div className="font-semibold text-2xl">Aman Gupta</div>
            <div className="text-sm text-neutral-600 dark:text-zinc-500 ">
              Backend Developer at OnlyDevs
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center px-4 space-mono ">
            <div className="flex flex-col">
              <div className="text-xs text-neutral-500 dark:text-zinc-400 ">
                Total Commits
              </div>
              <div className="">100+</div>
            </div>
            <div className="flex flex-col">
              <div className="text-xs text-neutral-500 dark:text-zinc-400">
                Total PRs
              </div>
              <div className="">20+</div>
            </div>
          </CardFooter>
        </Card>
      </div>

      <hr />
      {/* inputs */}
      <div className=" flex flex-col gap-12 p-24 w-[620px] border">
        {/* normal input component */}
        <Input className="" type="email" placeholder="Email" />

        {/* Disabled Input */}
        <Input type="email" value="chaicode@gmail.com" disabled />

        {/* Input with Start Text */}
        <div className="flex rounded-md shadow-xs">
          <span
            className="h-9 p-2 rounded-md border border-gray-400 dark:border-zinc-700
            rounded-e-none text-base shadow-sm transition-colors placeholder:text-muted-foreground 
           border-input bg-background text-muted-foreground inline-flex items-center
            rounded-s-md px-3  text-zinc-500"
          >
            https://
          </span>
          <Input
            className="-ms-px rounded-s-none shadow-none dark:font-light"
            placeholder="www.chaicode.com"
            type="text"
          />
        </div>

        {/* Password Input */}
        <PasswordInput />

        {/* File Upload */}
        <Input type="file" className="file:me-3" />
      </div>
    </div>
  );
};

export default TestCards;

function PasswordInput() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input
        type={show ? 'text' : 'password'}
        className="w-full pr-10"
        placeholder="Password"
        defaultValue={'secretPassword'}
      />
      <div
        onClick={() => setShow((prev) => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground"
      >
        {/* {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />} */}
        {show ? '🐵' : '🙈'}
      </div>
    </div>
  );
}
