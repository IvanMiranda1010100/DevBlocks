import { useParams } from "react-router-dom";
import { componentsType } from "@lib/Components";
import { DemoCode } from "../Content/ComponentsContentCode";

export const DocsMain = () => {
  const { item } = useParams();
  
  if(!item){
    return <h1>hola</h1>
  }

  const componentsData = componentsType.find((comp) => comp.title === item);

  if (!componentsData) {
    return <div>No encontrado</div>;
  }


  const { title, description, components } = componentsData;

  return (
    <>
      <div className="py-5 ">
        <h2 className="font-bold text-4xl mb-2">{title} - DevBlocks</h2>
        <p className=''>{description}</p>
        <hr />
        {components.map((component, index) => (
          <div key={index} className="my-4">
            <h3 className="font-semibold text-2xl">{component.name}</h3>
            <p className="text-gray-600">{component.description}</p>
            <DemoCode codeString={`<${component.description} />`}>
              <div className="">{component.element}</div>
            </DemoCode>
          </div>
        ))}
      </div>
    </>
  );
};
