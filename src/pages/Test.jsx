import React from "react";

import { Button } from "../components/Button";
import Navbar from "../components/website/Navbar";
import { CustomTheme } from "../utils/CustomTheme";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
  CardTitle,
} from "../components/Card";

export const Test = () => {
  return (
    <CustomTheme>
      <Navbar />
      <div className="px-18 min-h-screen mt-10 ">
        <div>
          <div className=" text-4xl mb-5"> Buttons</div>
          <div className="space-x-4 space-y-4">
            <Button variant="primary">primary</Button>
            <Button variant="destructive">destructive</Button>
            <Button variant="success">success</Button>
            <Button variant="warning">warning</Button>
            <Button variant="outline">outline</Button>
            <Button variant="secondary">secondary</Button>
            <Button isLoading variant="gradient" />
            <Button variant="ghost">ghost</Button>
            <Button variant="glass">glass</Button>
            <Button variant="dark">dark</Button>
            <Button variant="light">light</Button>
            <Button variant="gradient">gradient</Button>
            <Button animatedBorder>animatedBorder</Button>
            <Button gradientBorder>gradientBorder</Button>
            <Button className="animate-border text-white font-semibold px-6 py-3 rounded-xl">
              Hover Me
            </Button>
          </div>
        </div>
        <div className="text-3xl mt-8 flex">Cards</div>
        <Card className=" mt-2">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>This is your dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Here is some main content.</p>
          </CardContent>
          <CardFooter>
            <button className="btn">Get Started</button>
          </CardFooter>
        </Card>

        <Card className="mt-8 dark:bg-gray-900 border-none">
          <CardHeader>
            <p className="uppercase text-xs font-bold text-muted-foreground">
              Daily Mix
            </p>
            <p className="text-sm text-muted-foreground">12 Tracks</p>
            <CardTitle className="text-xl mt-1">Arijit Singh</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStrv_oPE6vni313HxiliDz1adIGEbzlBmZH7Aczogkb7bLKVGz5chCNwrPYoCHR4KXYr0UjqWiEQHbwYIU6FgaiQ"
              alt="Arijit Singh"
              className="rounded-xl w-full h-80 object-cover"
            />
          </CardContent>
        </Card>

        <Card className="w-[550px] dark:shadow-black dark:bg-[#040000] mt-8  rounded-2xl shadow-lg border-none">
          <CardHeader className="flex flex-row justify-between items-start p-4">
            <div className="flex gap-3 items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1724344976715468800/MasktpKz_400x400.jpg"
                alt="hitesh Chaudhary"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <CardTitle className="text-base">Hitesh Chaudhary</CardTitle>
                <CardDescription className="text-sm dark:text-gray-400">
                  @HiteshDotCom
                </CardDescription>
              </div>
            </div>
            <Button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white text-sm font-medium py-1.5 px-4 rounded-full">
              Follow
            </Button>
          </CardHeader>

          <CardContent className="text-sm dark:text-gray-300 px-4 pb-4">
            <p>
              retired from corporate and full time YouTuber, x founder of LCO
              (acquired), x CTO, Sr. Director at PW. 2 YT channels (950k &
              470k), stepped into 43 countries..
            </p>

            <div className="mt-4 flex items-center gap-4 text-sm dark:text-gray-400">
              <span>
                <span className=" font-semibold">85</span> Following
              </span>
              <span>
                <span className=" font-semibold">55.5K</span> Followers
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </CustomTheme>
  );
};
