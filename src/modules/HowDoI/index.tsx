import React, { useState } from 'react';
import searchIcon from '@/assets/img/search.png';
import arrowIc from '@/assets/img/arrow_icon.png';
import arrowQuestion1 from '@/assets/img/collapse.png';
import arrowQuestion2 from '@/assets/img/expand.png';

import clsx from 'clsx';

import './style.scss';

interface AccordionItemProps {
  title: string;
  content: string;
}

const accordionItems: AccordionItemProps[] = [
  {
    title: 'Commodo consequat. Duis auteequat.',
    content:
      'A: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
  },
  {
    title: 'How to create react by vite',
    content:
      'Step 1: Create a new Vite project. To create a new Vite project, open your terminal and run the foll....',
  },
  {
    title: 'CSS and SCSS different',
    content:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a d...',
  },
  {
    title: 'what is HTML',
    content:
      'The HyperText Markup Language or HTML is the standard markup language for d...',
  },
];

const AccordionItem: React.FC<
  AccordionItemProps & { isOpen: boolean; onToggle: () => void }
> = ({ title, content, isOpen, onToggle }) => {
  return (
    <li>
      <button className={clsx({ active: isOpen })} onClick={onToggle}>
        <img src={isOpen ? arrowQuestion2 : arrowQuestion1} alt="icon" />
        {title}
      </button>
      {isOpen && <p>{content}</p>}
    </li>
  );
};

const HowDoI: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setOpenIndex(null);
  };

  const filteredAccordionItems = accordionItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="how-do-i">
      <h2>How Do I</h2>
      <div className="search-input">
        <button type="submit">
          <img src={searchIcon} alt="search icon" />
        </button>
        <input
          type="text"
          placeholder="Find Question"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <ul className="list-question">
        {filteredAccordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={index === openIndex}
            onToggle={() => handleToggleAccordion(index)}
          />
        ))}
      </ul>
      <button className="view-more">
        <span>View More</span>
        <img src={arrowIc} alt="icon" />
      </button>
    </div>
  );
};

export default HowDoI;
