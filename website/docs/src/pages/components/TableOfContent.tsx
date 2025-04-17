import {useEffect, useState} from 'react';
import { useParams} from 'react-router-dom';

const TableOfContents = () => {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);
  const {componentId} = useParams();
  console.log(componentId)

  useEffect(() => {
    const allHeadings = Array.from(document.querySelectorAll('h1')) as HTMLHeadingElement[];
    console.log(allHeadings)
    setHeadings(allHeadings);
  }, [componentId]);

  return (
    <div>
      <ul className="mt-3">
        {headings.map((heading, index) => (
          <div key={index} className="m-2">
            <a
              href={`#${heading.id}`}
              className="hover:text-black text-neutral-600 dark:text-gray-400 dark:hover:text-white"
            >
              <div className="  pl-2">{heading.innerText}</div>
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
