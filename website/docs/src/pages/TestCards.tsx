// import React from 'react';

import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@pkgs/uignite';
import {useState} from 'react';

const TestCards = () => {
  const [status, setStatus] = useState('Follow');

  function clickHandler() {
    const final = status === 'Follow' ? 'Unfollow' : 'Follow';
    setStatus(final);
  }
  return (
    <div className="h-[420px] flex gap-12 p-12">
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
    </div>
  );
};

export default TestCards;
