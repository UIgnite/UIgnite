import {Card, CardContent, CardFooter, CardHeader} from '@pkgs/uignite';

const About = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="max-w-[1200px] ">
        <h2 className="text-3xl font-semibold mt-8 text-center">
          Meet the Team Behind UIgnite
        </h2>
        {/* cards */}
        <div className="grid grid-cols-3 mt-8  gap-12">
          {/* aman */}
          <Card className="m-0 p-0 h-[440px] w-[325px] rounded-3xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer ">
            <CardHeader className="m-0 p-0 ">
              <img
                src="/me.png"
                alt=""
                className="h-[295px]  w-full object-cover rounded-t-xl"
              />
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center mt-5">
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
                <div className="">130+</div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs text-neutral-500 dark:text-zinc-400">
                  Total PRs
                </div>
                <div className="">20+</div>
              </div>
            </CardFooter>
          </Card>

          {/* ram */}
          <Card className="m-0 p-0 h-[440px] w-[325px] rounded-3xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <CardHeader className="m-0 p-0 ">
              <img
                src="/assets/avatars/ram.jpg"
                alt=""
                className="h-[295px] w-full object-cover rounded-t-xl"
              />
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center mt-5">
              <div className="font-semibold text-2xl">Ram Bhardwaj</div>
              <div className="text-sm text-neutral-600 dark:text-zinc-500 ">
                Backend Developer at OnlyDevs
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center px-4 space-mono ">
              <div className="flex flex-col">
                <div className="text-xs text-neutral-500 dark:text-zinc-400 ">
                  Total Commits
                </div>
                <div className="">150+</div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs text-neutral-500 dark:text-zinc-400">
                  Total PRs
                </div>
                <div className="">22+</div>
              </div>
            </CardFooter>
          </Card>

          <Card className="m-0 p-0 h-[440px] w-[325px] rounded-3xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <CardHeader className="m-0 p-0 ">
              <img
                src="/assets/avatars/saurav.png"
                alt=""
                className="h-[295px] w-full object-cover rounded-t-xl"
              />
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center mt-5">
              <div className="font-semibold text-2xl">Saurav Jha</div>
              <div className="text-sm text-neutral-600 dark:text-zinc-500 ">
                Backend Developer at OnlyDevs
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center px-4 space-mono ">
              <div className="flex flex-col">
                <div className="text-xs text-neutral-500 dark:text-zinc-400 ">
                  Total Commits
                </div>
                <div className="">140+</div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs text-neutral-500 dark:text-zinc-400">
                  Total PRs
                </div>
                <div className="">24+</div>
              </div>
            </CardFooter>
          </Card>
          {/* saurav */}

          {/* aditya */}
          <Card className="m-0 p-0 h-[440px] w-[325px] rounded-3xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <CardHeader className="m-0 p-0 ">
              <img
                src="/assets/avatars/aditya.jpg"
                alt=""
                className="h-[295px] w-full object-cover rounded-t-xl"
              />
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center mt-5">
              <div className="font-semibold text-2xl">Aditya Sharma</div>
              <div className="text-sm text-neutral-600 dark:text-zinc-500 ">
                Programmer at OnlyDevs
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center px-4 space-mono ">
              <div className="flex flex-col">
                <div className="text-xs text-neutral-500 dark:text-zinc-400 ">
                  Total Commits
                </div>
                <div className="">200+</div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs text-neutral-500 dark:text-zinc-400">
                  Total PRs
                </div>
                <div className="">29+</div>
              </div>
            </CardFooter>
          </Card>

          {/* rohit */}
          <Card className="m-0 p-0 h-[440px] w-[325px] rounded-3xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <CardHeader className="m-0 p-0 ">
              <img
                src="/assets/avatars/rohit.jpg"
                alt=""
                className="h-[295px] w-full object-cover rounded-t-xl"
              />
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center mt-5">
              <div className="font-semibold text-2xl">Rohit Singh</div>
              <div className="text-sm text-neutral-600 dark:text-zinc-500 ">
                Designer and Video Editor
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center px-4 space-mono ">
              <div className="flex flex-col">
                <div className="text-xs text-neutral-500 dark:text-zinc-400 ">
                  Total Commits
                </div>
                <div className="">50+</div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs text-neutral-500 dark:text-zinc-400">
                  Total PRs
                </div>
                <div className="">5+</div>
              </div>
            </CardFooter>
          </Card>

          {/* jahanwee */}
          <Card className="m-0 p-0 h-[440px] w-[325px] rounded-3xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <CardHeader className="m-0 p-0 ">
              <img
                src="/assets/avatars/jahanwee.jpg"
                alt=""
                className="h-[295px] w-full object-cover rounded-t-xl"
              />
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center mt-5">
              <div className="font-semibold text-2xl">Jahanwee</div>
              <div className="text-sm text-neutral-600 dark:text-zinc-500 ">
                Writer and Frontend Developer
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center px-4 space-mono ">
              <div className="flex flex-col">
                <div className="text-xs text-neutral-500 dark:text-zinc-400 ">
                  Total Commits
                </div>
                <div className="">50+</div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs text-neutral-500 dark:text-zinc-400">
                  Total PRs
                </div>
                <div className="">15+</div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
