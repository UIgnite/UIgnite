import { Accordion, AccordionWrapper } from "./src/components/Accordion";
import Avatar from "./src/components/Avatar";

export default [
  {
    id: "accordion",
    scope: {Accordion, AccordionWrapper} ,
    element: `
      <AccordionWrapper>
        <Accordion
          title="Title 1"
          content="Content 1"
          className="bg-gray-900"
          defaultOpen
          open
        />
        <Accordion
          title="Title 2"
          content="Content 2"
          className="bg-gray-700"
          defaultOpen={false}
          open
        />
      </AccordionWrapper>
    `,
  },
  {
    id: "avatar",
    scope: {Avatar},
    element: `
      <>
        <Avatar url={"/piyush-sir.png"} alt={"user"} />
        <Avatar url={"/hitesh-sir.png"} alt={"user"} />
      </>
    `,
  }
];
