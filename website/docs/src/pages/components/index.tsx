import {useParams} from 'react-router-dom';
import {Preview} from './Preview';
import {ChevronLeft, ChevronRight} from 'lucide-react';

import {
  getCodeStrById,
  getComponentById,
  getElementByCompId,
  getNextComponentbyId,
  getPreviousComponentbyId,
} from '../../utils/lib';
import {Install} from './Install';
import {Properties} from './Properties';
import {Button} from '@pkgs/uignite/dist';
import {useNavigate} from 'react-router-dom';

export default function Component() {
  const {componentId} = useParams();
  const currComponent = getComponentById(componentId);

  const element = getElementByCompId(componentId);

  const codeStr = getCodeStrById(componentId);

  const prevComponentId = getPreviousComponentbyId(componentId);
  const nextComponentId = getNextComponentbyId(componentId);

  // console.log('Some', currComponent);
  console.log('prev', prevComponentId);
  console.log('next', nextComponentId);

  const navigate = useNavigate();

  if (!currComponent) {
    return <div className="text-red-500">Component not found.</div>;
  }
  return (
    <div className="mb-5 w-[100%]">
      <h1 id={currComponent.name} className="w-[90%] text-4xl font-semibold">
        {currComponent.name}
      </h1>
      <div className="w-[90%] dark:text-neutral-300">{currComponent.desc}</div>

      <Preview currComponent={codeStr} element={element} />

      <hr className="w-48 h-0 mx-auto my-8 border-none " />

      <h1 id="installation" className="text-4xl mt-4 font-semibold">
        Installation
      </h1>
      <Install componentId={currComponent.id} codeString={codeStr} />

      <hr className="w-48 h-0 mx-auto my-8 border-none" />

      <h1 id="Props" className="text-4xl mt-4 font-semibold">
        Props
      </h1>
      <Properties componentId={currComponent.id} />

      <div className=" mt-4 flex justify-between w-[90%]">
        <Button
          variant="ghost"
          icon={<ChevronLeft />}
          onClick={() => navigate(`/components/${prevComponentId}`)}
        >
          {prevComponentId}
        </Button>
        <Button
          variant="ghost"
          onClick={() => navigate(`/components/${nextComponentId}`)}
        >
          <span className="mr-3">{nextComponentId}</span>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
