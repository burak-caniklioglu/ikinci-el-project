import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';
import DownArrow from '../../constants/icons/DownArrow';
import './dropdown.scss';
import useClickOutside from '../../hooks/useClickOutside';

function DropdownItems({ options, placeholder }) {
  const inputRef = useRef();
  const [selected, setSelected] = useState(placeholder);
  const [isActive, setIsActive] = useState(false);
  const [isOutsideClick, setIsOutsideClick] = useClickOutside(inputRef);
  return (
    <div className="dropdown" ref={inputRef} role="none" onClick={() => setIsOutsideClick(false)}>
      <div className="dropdown-btn" role="none" onClick={() => setIsActive(true)}>
        {selected}
        <DownArrow className="fas fa-caret-down" />
      </div>
      {!isOutsideClick && isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              role="none"
              onClick={() => {
                setSelected(option.name);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
DropdownItems.propTypes = {
  options: propTypes.arrayOf.isRequired,
  placeholder: propTypes.string.isRequired,
};

export default DropdownItems;
