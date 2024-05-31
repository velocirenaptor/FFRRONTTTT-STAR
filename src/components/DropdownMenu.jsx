import React, { useState } from 'react';

const DropdownMenu = ({ options, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? options.find(option => option.value === selectedOption).label : 'Select an option'}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-item"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
