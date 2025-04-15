import {useEffect, useState} from 'react';

const TableOfContents = () => {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const allHeadings = Array.from(
      document.querySelectorAll('h1')
    ) as HTMLHeadingElement[];
    setHeadings(allHeadings);
  }, []);

  return (
    <div>
      <ul className="mt-3">
        {headings.map((heading, index) => (
          <div key={index} className="m-2">
            <a
              href={`#${heading.id}`}
              className="text-gray-400 hover:text-white"
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
