import {motion} from 'framer-motion';

interface Tech {
  name: string;
  svg: JSX.Element;
}

const techStack: Tech[] = [
  {
    name: 'TypeScript',
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="256" height="256" rx="56" fill="currentColor" />
        <path
          fill="#fff"
          d="M134.4 109.2h-14.8v58h14.8v-58zm32.8 0h-15.6l-5.2 9.2 5.2 9.2h7.6c3.6 0 6.8 2.4 6.8 6s-3.2 6-6.8 6h-7.6l-5.2 9.2 5.2 9.2h15.6c11.6 0 20.4-8 20.4-18.4s-8.8-18.4-20.4-18.4z"
        />
      </svg>
    ),
  },
  {
    name: 'React',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-4 w-4 shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
      >
        <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
        <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
        <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
        <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
        <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
        <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
        <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
      </svg>
    ),
  },
  {
    name: 'TailwindCSS',
    svg: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0 stroke-[0.5px] text-neutral-500 md:h-10 md:w-10"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
      </svg>
    ),
  },
  {
    name: 'Framer Motion',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-4 w-4 shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
      >
        <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
        <path d="M20 12l-8 8l-4 -4"></path>
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <div className="flex items-center justify-center gap-10 py-8">
      {techStack.map((tech, index) => (
        <motion.div
          key={index}
          whileHover={{scale: 1.1}}
          className="flex flex-col items-center gap-2 text-gray-700 dark:text-gray-300"
        >
          <div className="w-6 h-6">{tech.svg}</div>
          <span className="text-sm">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
