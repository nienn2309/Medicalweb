import React, { useState, useEffect } from "react";
import { AccordionContainer, AccordionContent } from "./Accordion/Accordion";

const Accordion = ({ items, multiple }) => {
  const [active, setActive] = useState();
  const [activeArr, setActiveArr] = useState([]);

  let p = [...items].map((item) =>{
    return { name: item.name, active: false};
  });

  useEffect(()=>{
    setActiveArr(p)
  }, []);

  const handleClick = (name) => {
    setActive(name === active ? null : name);
    if(multiple){
        let ind = activeArr.findIndex((i) => i.name === name);
        let upd = [...activeArr];
        upd[ind].active = !upd[ind].active;
        setActiveArr(upd);
    }
  };
  return (
    <AccordionContainer>
      {items.map((item) => {
        let isActive = active === item.name;
        if(multiple) isActive = activeArr.some((i)=>i.name === item.name && i.active);
        return (
          <AccordionContent
            onClick={() => handleClick(item.name)}
            itemName={item.name}
            itemContent={item.content}
            isActive={isActive}
          />
        );
      })}
    </AccordionContainer>
  );
};

const render = () => {
    let items = [
        {
            name:"Patient: Sarah Johnson, diagnosed with Hepaticocholangiogastrostomy",
            content: <div>HEHEHEHHEHE</div>
        },
        {
            name:"Patient: Michael Williams, diagnosed with Supercalifragilisticexpialidocious Syndrome",
            content: <div>HEHEHEHHEHE</div>
        },
        {
            name:"Patient: Emily Davis, diagnosed with Paroxysmal Supraventricular Tachycardia",
            content: <div>HEHEHEHHEHE</div>
        },
        {
            name:"Patient: Robert Turner, diagnosed with Gastroesophageal Reflux Disease",
            content: <div>HEHEHEHHEHE</div>
        },
        {
            name:"Patient: Jennifer Martinez, diagnosed with Antidisestablishmentarianism Disorder",
            content: <div>HEHEHEHHEHE</div>
        },
        {
            name:"Patient: Christopher Lee, diagnosed with Pseudopseudohypoparathyroidism",
            content: <div>HEHEHEHHEHE</div>
        },
        {
            name:"Patient: Amanda Robinson, diagnosed with Hippopotomonstrosesquippedaliophobia",
            content: <div>HEHEHEHHEHE</div>
        },
    ]

    return (
        <div>
            <Accordion multiple items={items}/>
        </div>
    );
}
export default render;
