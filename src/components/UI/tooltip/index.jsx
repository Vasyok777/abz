import React from 'react'
import './Tooltip.css';
const Tooltip = ({tooltipText, position, children }) => {
  return (
    <div className="tooltip-trigger">
        {children}
        <div className={`tooltip tooltip-${position}`}>
            {tooltipText}
        </div>
    </div>
  )
}

export default Tooltip