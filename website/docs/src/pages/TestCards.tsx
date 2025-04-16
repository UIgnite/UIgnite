import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@pkgs/uignite';
import {Info, ShieldCheck} from 'lucide-react';
import {useState} from 'react';

const TestCards = () => {
  const [status, setStatus] = useState('Follow');

  function clickHandler() {
    const final = status === 'Follow' ? 'Unfollow' : 'Follow';
    setStatus(final);
  }
  return (
    <div className=" flex gap-12 p-12">
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
            (acquired), x CTO, Sr. Director at PW. 2 YT channels (950k & 470k),
            stepped into 43 countries.
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
          <h1 className="font-semibold text-lg text-zinc-800 dark:text-zinc-200">
            Web Dev Cohort 1.0
          </h1>
          <p className="text-sm leading-tight text-neutral-700 dark:text-neutral-400">
            Master full-stack web development with Web Dev Cohort. Learn HTML,
            CSS, JS, React, Next.js, Node, Docker, databases like
            MongoDB/PostgreSQL, DevOps with AWS (ECR, EC2, CloudFront), modern
            workflows like Turbo Repo, TypeScript, and GitHub CI/CD.
          </p>
          <div className="flex gap-2 items-center mt-2">
            <div className="font-medium text-md">6,999 INR</div>
            <div className="line-through text-sm text-gray-400 dark:text-gray-500">
              8,999 INR
            </div>
          </div>
          <div className="text-sm text-blue-500 dark:text-blue-400 -mt-1">
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

      {/* features */}
      <ShieldCheck />
    </div>
  );
};

export default TestCards;
