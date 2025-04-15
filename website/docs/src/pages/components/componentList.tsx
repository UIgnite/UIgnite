import {useNavigate} from 'react-router-dom';
import {components} from '../../utils/lib';

export default function ComponentList() {
  return (
    <div className=" max-w-[1200px] grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {components.map((component, idx) => (
        <ComponentCard
          key={idx}
          name={component.name}
          id={component.id}
          imageUrl={component.previewImageUrl}
          desc={component.desc}
        />
      ))}
    </div>
  );
}

const ComponentCard = ({
  name = 'Textarea',
  id = 'Textarea',
  imageUrl = './accordion.png',
  desc = 'Button is a button whose role is button which is button is called button.',
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/components/${id}`)}
      tabIndex={0}
      className="min-h-90 min-w-94 cursor-pointer group rounded-xl p-4 transition-all border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-black/10  shadow-sm dark:hover:shadow-md dark:hover:shadow-gray-800 "
    >
      <div className="mb-3 h-[60%] bg-transparent flex justify-center items-center overflow-hidden rounded-lg">
        <img
          className="group-hover:scale-105 transition-transform duration-300 rounded-md object-cover max-h-full"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </div>
      <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        {desc}
      </div>
    </div>
  );
};
