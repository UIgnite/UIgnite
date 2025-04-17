import React from 'react';

const CommandButton: React.FC = () => {
  return (
    <button className="relative shadow-sm  hover:shadow-gray-50 p-0 w-[100px] h-[100px] border-2 border-gray-500 outline-none bg-gray-100 rounded-[20px]  transition ease-in-out duration-300 hover:scale-110 active:scale-95 active:shadow-none cursor-pointer">
      <div className="relative grid p-[10px] w-full h-full grid-cols-4 grid-rows-2 shadow-[inset_0px_-4px_0px_#dddddd,0px_-4px_0px_#f4f5f6] rounded-[20px] transition ease-in-out duration-300 z-[1]">
        <div className="relative flex translate-y-[-2px] col-start-4 self-start justify-self-end w-4 h-4 transition ease-in-out duration-300 group-hover:translate-y-[-8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="16"
            height="16"
            fill="#aaaaaa"
          >
            <path
              d="M64,48L64,48h-8V32h8c8.836,0,16-7.164,16-16S72.836,0,64,0c-8.837,0-16,7.164-16,16v8H32v-8c0-8.836-7.164-16-16-16
              S0,7.164,0,16s7.164,16,16,16h8v16h-8l0,0l0,0C7.164,48,0,55.164,0,64s7.164,16,16,16c8.837,0,16-7.164,16-16l0,0v-8h16v7.98
              c0,0.008-0.001,0.014-0.001,0.02c0,8.836,7.164,16,16,16s16-7.164,16-16S72.836,48.002,64,48z M64,8c4.418,0,8,3.582,8,8
              s-3.582,8-8,8h-8v-8C56,11.582,59.582,8,64,8z M8,16c0-4.418,3.582-8,8-8s8,3.582,8,8v8h-8C11.582,24,8,20.417,8,16z M16,72
              c-4.418,0-8-3.582-8-8s3.582-8,8-8l0,0h8v8C24,68.418,20.418,72,16,72z M32,48V32h16v16H32z M64,72c-4.418,0-8-3.582-8-8l0,0v-8
              h7.999c4.418,0,8,3.582,8,8S68.418,72,64,72z"
            />
          </svg>
        </div>
        <p className="relative translate-y-[-2px] m-0 self-end col-span-4 row-start-2 text-center text-[16px] bg-gray-500 text-transparent [text-shadow:1px_1px_2px_rgba(255,255,255,0.5)] bg-clip-text transition ease-in-out duration-300 group-hover:translate-y-[-5px]">
          command
        </p>
      </div>
    </button>
  );
};

export {CommandButton};
