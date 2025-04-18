import {motion} from 'framer-motion';

interface Tech {
  name: string;
  svg: JSX.Element;
}

const iconSize = 'w-10 h-10 md:w-14 md:h-14';

const techStack: Tech[] = [
  {
    name: 'TypeScript',
    svg: (
      <img
        className="w-10 h-10 md:w-14 md:h-14 rounded-lg"
        src="https://images.icon-icons.com/2415/PNG/512/typescript_original_logo_icon_146317.png"
      />
    ),
  },
  {
    name: 'React',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`${iconSize} text-cyan-500 dark:text-cyan-400`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label="React"
      >
        <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
        <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
        <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
        <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
        <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
        <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
        <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
      </svg>
    ),
  },
  {
    name: 'TailwindCSS',
    svg: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className={`${iconSize} text-sky-500 dark:text-sky-400`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="TailwindCSS"
      >
        <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" />
      </svg>
    ),
  },
  {
    name: 'Framer Motion',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#framerGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconSize}
        role="img"
        aria-label="Framer Motion"
      >
        <defs>
          <linearGradient
            id="framerGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff0080" />
            <stop offset="50%" stopColor="#7928ca" />
            <stop offset="100%" stopColor="#007cf0" />
          </linearGradient>
        </defs>
        <path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
        <path d="M20 12l-8 8l-4 -4" />
      </svg>
    ),
  },
];
export default function TechStack() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-10 ">
      {techStack.map((tech, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -8, 0], // float up and down
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center gap-2 text-center group"
          title={tech.name}
        >
          <div className=" transition-transform duration-300 ">{tech.svg}</div>
        </motion.div>
      ))}
    </div>
  );
}
