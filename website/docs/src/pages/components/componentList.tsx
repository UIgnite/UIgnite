import {useNavigate} from 'react-router-dom';
import {components} from '../../utils/lib';

export default function ComponentList() {
  return (
    <div className=" ml-[5%] mr-[5%] grid gap-10 grid-cols-1 md:grid-cols-2">
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
  imageUrl = 'https://placehold.co/600x400',
  desc = 'Button is a button whose role is button which is button is called button.',
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/components/${id}`)}
      tabIndex={0}
      className=" min-h-80 cursor-pointer group border-1 border-gray-900 bg-gray-950  hover:bg-black/60 rounded-lg p-3 transition-colors"
    >
      <div className="m-2 min-h-[70%] flex justify-center items-center">
        <img
          className="  group-hover:scale-105 transition-all rounded-md text-center"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="text-lg font-medium">{name}</div>
      <div className="w-[80%] text-sm text-neutral-400">{desc}</div>
    </div>
  );
};
