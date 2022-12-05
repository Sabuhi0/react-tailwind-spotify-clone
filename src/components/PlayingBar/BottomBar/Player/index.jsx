import React from 'react'
import { Icon } from '../../../../assets/Icons'
import { Range, getTrackBackground } from "react-range";
import { useState } from 'react';

const Player = () => {

  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;
  const [values, setValues] = useState([50]);

  return (
    <div className='flex items-center justify-between px-4'>
      <div>
        sol
      </div>
      <div className='max-w-[45.125rem] w-[40%] flex flex-col items-center'>
        <div className='flex items-center gap-x-2'>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon size={16} name="shuffle"/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon size={16} name="playerPrev"/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 bg-white rounded-full hover:transform hover:scale-105 transition duration-150 ease-in-out'>
            <Icon size={20} name="play"/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon size={16} name="playerNext"/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon size={16} name="repeat"/>
          </button>
        </div>
        <div className='w-full'>
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => setValues(values)}
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
                      values: values,
                      colors: ["#fff", "#5e5e5e"],
                      min: MIN,
                      max: MAX
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
                className={`h-3 w-3 rounded-full bg-white ${!isDragged ? 'opacity-0' : '' } group-hover:opacity-100`}
                style={{
                  ...props.style,
                  boxShadow: "0 2px 4px 0 rgb(0 0 0 / 50%)"
                }}
              >
              </div>
            )}
          />
        </div>
      </div>
      <div>
        sag
      </div>
    </div>
  )
}

export default Player
