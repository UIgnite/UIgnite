import { Star } from "lucide-react";

const Testimonials = ({ imageSrc, name, title, rating = 5, message }) => {
  return (
    <div className="m-4 flex flex-col gap-2.5 shadow-sm p-4 text-black grainy-light max-w-xl rounded-xs">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 justify-center items-center">
          <img
            src={imageSrc ? imageSrc : "hitesh-sir.png"}
            alt={"../hitesh-sir.png"}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col items-start">
            <div>{name}</div>
            <div className="text-[12.8px] opacity-60">{title}</div>
          </div>
        </div>

        <div className="flex gap-0.5 mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${
                index < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300 fill-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-left">{message}</p>
    </div>
  );
};

export default Testimonials;
