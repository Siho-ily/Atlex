import React, { useState } from "react";
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/common/ui/accordion";

const meta = {
  title: "Common/UI/Accordion",
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <Accordion className="w-[400px]">
        <AccordionItem isOpen={isOpen}>
          <AccordionTrigger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            아코디언 타이틀
          </AccordionTrigger>
          <AccordionContent isOpen={isOpen}>
            아코디언의 상세 내용입니다. 여기에 어떤 컨텐츠든 들어갈 수 있습니다.
            부드러운 애니메이션과 함께 나타나고 사라집니다.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const Multiple = {
  render: () => {
    const [openIndex, setOpenIndex] = useState(null);
    const items = [
      { title: "첫 번째 항목", content: "첫 번째 항목의 내용입니다." },
      { title: "두 번째 항목", content: "두 번째 항목의 내용입니다." },
      { title: "세 번째 항목", content: "세 번째 항목의 내용입니다." },
    ];
    
    return (
      <Accordion className="w-[400px]">
        {items.map((item, index) => (
          <AccordionItem key={index} isOpen={openIndex === index}>
            <AccordionTrigger 
              isOpen={openIndex === index} 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item.title}
            </AccordionTrigger>
            <AccordionContent isOpen={openIndex === index}>
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  },
};
