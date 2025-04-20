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
        existing templates, we decided to build the entire thing from scratch.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-10">
            {[
              {
                name: 'Aman Gupta',
                role: 'Backend Developer at OnlyDevs',
                img: '/me.png',
                commits: '130+',
                prs: '20+',
              },
              {
                name: 'Ram Bhardwaj',
                role: 'Backend Developer at OnlyDevs',
                img: '/assets/avatars/ram.jpg',
                commits: '150+',
                prs: '22+',
              },
              {
                name: 'Saurav Jha',
                role: 'Backend Developer at OnlyDevs',
                img: '/assets/avatars/saurav.png',
                commits: '140+',
                prs: '24+',
              },
              {
                name: 'Aditya Sharma',
                role: 'Programmer at OnlyDevs',
                img: '/assets/avatars/aditya.jpg',
                commits: '200+',
                prs: '29+',
              },
              {
                name: 'Rohit Singh',
                role: 'Designer and Video Editor',
                img: '/assets/avatars/rohit.jpg',
                commits: '50+',
                prs: '5+',
              },
              {
                name: 'Jahanwee',
                role: 'Writer and Frontend Developer',
                img: '/assets/avatars/jahanwee.jpg',
                commits: '50+',
                prs: '15+',
              },
            ].map((member) => (
              <Card
                key={member.name}
                className="min-h-[440px] w-full rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              >
                <CardHeader className="p-0">
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    className="h-[295px] w-full object-cover rounded-t-3xl"
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center mt-5">
                  <div className="font-semibold text-2xl">{member.name}</div>
                  <div className="text-sm text-neutral-600 dark:text-zinc-500 text-center">
                    {member.role}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center px-4 font-mono">
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-500 dark:text-zinc-400">
                      Total Commits
                    </span>
                    <span>{member.commits}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-500 dark:text-zinc-400">
                      Total PRs
                    </span>
                    <span>{member.prs}</span>
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
