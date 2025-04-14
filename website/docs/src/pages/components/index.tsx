import {useParams} from 'react-router-dom';
import {Preview} from './Preview';
import {
  getCodeStrById,
  getComponentById,
  getElementByCompId,
} from '../../utils/lib';
import {Install} from './Install';
import {Properties} from './Properties';

export default function Component() {
  const {componentId} = useParams();
  const currComponent = getComponentById(componentId);

  const element = getElementByCompId(componentId);

  const codeStr = getCodeStrById(componentId);

  if (!currComponent) {
    return <div className="text-red-500">Component not found.</div>;
  }

  return (
    <div className="mb-5 w-[90%]">
      <div className="w-[90%] text-4xl font-semibold">{currComponent.name}</div>
      <div className="w-[90%] text-neutral-300">{currComponent.desc}</div>

      <Preview currComponent={codeStr} element={element} />

      <hr className="w-48 h-0 mx-auto my-8 border-none " />

      <div className="text-4xl mt-4 font-semibold"> Installation </div>
      <Install componentId={currComponent.id} codeString={codeStr} />

      <hr className="w-48 h-0 mx-auto my-8 border-none" />

      <div className="text-4xl mt-4 font-semibold"> Props </div>
      <Properties componentId={currComponent.id} />
    </div>
  );
}
