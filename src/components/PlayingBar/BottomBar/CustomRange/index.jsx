import React from 'react'
import { Range, getTrackBackground } from "react-range";

const CustomRange = ({ value, step, max, min, onChange }) => {
  return (
    <Range
      values={[value]}
      step={step}
      min={min}
      max={max}
      onChange={value => onChange(value[0])}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          className="w-full h-7 flex group"
          style={props.style}
        >
          <div
            ref={props.ref}
            className="h-1 w-full rounded-md self-center"
            style={{
              background: getTrackBackground({
                values: [value],
                colors: ["#fff", "#5e5e5e"],
                min,
                max
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          className={`h-3 w-3 rounded-full bg-white ${!isDragged ? 'opacity-0' : ''} group-hover:opacity-100`}
          style={{
            ...props.style,
            boxShadow: "0 2px 4px 0 rgb(0 0 0 / 50%)"
          }}
        >
        </div>
      )}
    />
  )
}

export default CustomRange
