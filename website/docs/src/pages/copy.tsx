import {Button} from '@pkgs/uignite';
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(128, 90, 213, 0.1) 0%, transparent 80%)',
        }}
      >
        <svg
          className="w-full h-full absolute top-0 left-0"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="gridGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#333" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#666" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Horizontal perspective lines */}
          {Array(20)
            .fill(0)
            .map((_, i) => {
              const y = i * 60;
              const controlPointOffset = 400 - i * 20;
              return (
                <path
                  key={`h-${i}`}
                  d={`M 0,${y} C ${controlPointOffset},${y - 50} ${
                    1920 - controlPointOffset
                  },${y - 50} 1920,${y}`}
                  stroke="rgba(100, 100, 100, 0.2)"
                  fill="none"
                  strokeWidth="1"
                />
              );
            })}

          {/* Vertical perspective lines */}
          {Array(20)
            .fill(0)
            .map((_, i) => {
              const x = i * 120;
              const controlPointOffset = 300 - i * 10;
              return (
                <path
                  key={`v-${i}`}
                  d={`M ${x},0 C ${x + controlPointOffset},400 ${
                    x + controlPointOffset
                  },700 ${x},1080`}
                  stroke="rgba(100, 100, 100, 0.2)"
                  fill="none"
                  strokeWidth="1"
                />
              );
            })}
        </svg>
      </div>

      {/* Bouncy Blue Blobs */}
      <motion.div
        initial={{scale: 0.9}}
        animate={{scale: [0.9, 1.1, 0.9]}}
        transition={{repeat: Infinity, duration: 8, ease: 'easeInOut'}}
        className="absolute top-32 right-20 w-64 h-64 rounded-full bg-blue-600 opacity-30 blur-3xl"
      />

      <motion.div
        initial={{scale: 1}}
        animate={{scale: [1, 1.2, 1]}}
        transition={{repeat: Infinity, duration: 10, ease: 'easeInOut'}}
        className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-blue-400 opacity-20 blur-3xl"
      />

      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-blue-900/20 to-transparent" />

      <div className="relative z-10">
        {/* Main Content */}
        <div className="mt-12 px-8 md:px-12 min-w-[1200px] min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-8">
              <div>UIgnite – The spark behind every beautiful UI.</div>
            </h1>

            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Immerse yourself in a design journey like never before. Experience
              our UI library flexible, accessible, and crafted for effortless
              creativity. It's smoother, smarter, and better than your ordinary
              UI kits.
            </p>

            <div className="mt-10">
              <Button className="bg-black hover:bg-black/90 text-white mr-4 font-semibold text-lg outfit px-8 py-7 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                Get Started
              </Button>
              <Button className="bg-gray-50 hover:bg-gray-100 text-black font-semibold text-lg outfit px-4 py-7 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                Explore Components
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
