import {Card, CardContent, CardFooter, CardHeader} from '@pkgs/uignite';

const OurJourney = () => {
  return (
    <div className="my-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold">Our Journey</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-4 mb-4 leading-relaxed text-lg">
        When we were assigned the task, we kicked things off by dividing the
        work across our team. Our designer created the initial wireframes for
        the landing page, and we jumped straight into development from there.
      </p>

      <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed text-lg">
        Next, we took on the documentation section — and instead of relying on
        existing templates,
        <span className="font-medium text-zinc-900 dark:text-white ">
          we decided to build the entire thing from scratch.
        </span>
        It wasn’t easy, but the challenge made it even more rewarding. Every bug
        we squashed taught us something new.
      </p>

      <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed text-lg">
        Throughout the project, we leveled up our collaboration skills using
        Git. From managing pull requests to resolving merge conflicts, we
        learned how to work together effectively in a real-world codebase.
      </p>

      <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed text-lg">
        Initially, the project was built using React with JSX. But thanks to
        some solid feedback from{' '}
        <span className="font-medium text-zinc-900 dark:text-white ">
          Piyush Sir
        </span>
        , we migrated the entire codebase to TypeScript — a shift that made
        everything more scalable and maintainable.
      </p>

      <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed text-lg">
        At first, we weren’t using a monorepo. But as the codebase grew, we
        realized the benefits and made the transition. That step alone taught us
        a lot about organizing and scaling projects effectively.
      </p>

      <p className="text-neutral-700 dark:text-neutral-300 mb-2 leading-relaxed text-lg">
        The process taught us a lot about organizing a large codebase
        efficiently. Overall, building this wasn’t just about shipping a product
        — it was about growing as a team and learning by doing.
      </p>

      <hr className="mt-10 text-zinc-300/70 dark:text-zinc-800/70" />

      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <h2 className="text-3xl font-semibold mt-10 text-center">
            Meet the Team Behind UIgnite
          </h2>

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              {
                name: 'Aman Gupta',
                role: 'Backend Developer at OnlyDevs',
                img: 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059670/uignite/pd6vhwufdxmrvmb1r6dw.png',
                commits: '199+',
                prs: '35+',
              },
              {
                name: 'Ram Bhardwaj',
                role: 'Backend Developer at OnlyDevs',
                img: 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059670/uignite/tgwysbhygrqweqqfcr0s.jpg',
                commits: '251+',
                prs: '40+',
              },
              {
                name: 'Saurav Jha',
                role: 'Backend Developer at OnlyDevs',
                img: 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059669/uignite/hvkxluoaw9qraiogewad.png',
                commits: '152+',
                prs: '30+',
              },
              {
                name: 'Aditya Sharma',
                role: 'Programmer at OnlyDevs',
                img: 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059669/uignite/hop3sfvj72wdaryxcejf.jpg',
                commits: '182+',
                prs: '32+',
              },
              {
                name: 'Rohit Singh',
                role: 'Designer and Video Editor',
                img: 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059668/uignite/wpv97inpphsf6guic703.jpg',
                commits: '50+',
                prs: '10+',
              },
              {
                name: 'Jahanwee',
                role: 'Writer',
                img: 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059668/uignite/wmdwgvjrfczaqj4nzsid.jpg',
                commits: '50+',
                prs: '10+',
              },
            ].map((member) => (
              <Card
                key={member.name}
                className="m-0 p-0 max-w-xs rounded-3xl shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              >
                <CardHeader>
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-72 object-cover rounded-t-xl"
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center px-4 pt-2 space-y-1">
                  <div className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
                    {member.name}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-zinc-400">
                    {member.role}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-around items-center px-4 text-center text-sm space-mono">
                  <div className="flex flex-col pb-3">
                    <span className="text-xs text-neutral-500 dark:text-zinc-400">
                      Total Commits
                    </span>
                    <span className="font-medium text-base text-zinc-800 dark:text-zinc-100">
                      {member.commits}
                    </span>
                  </div>
                  <div className="flex flex-col pb-3">
                    <span className="text-xs text-neutral-500 dark:text-zinc-400">
                      Total PRs
                    </span>
                    <span className="font-medium text-base text-zinc-800 dark:text-zinc-100">
                      {member.prs}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
