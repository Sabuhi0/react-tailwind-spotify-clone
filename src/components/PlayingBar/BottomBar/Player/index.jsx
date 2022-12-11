import React from 'react'
import { Icon } from '../../../../assets/Icons'
import { useAudio } from 'react-use';
import secondsToTime from '../../../../utils/secondsToTime';
import CustomRange from '../CustomRange';
import { useMemo } from 'react';

const Player = () => {

  

  const [audio, state, controls, ref] = useAudio({
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  });

  console.log(JSON.stringify(state))

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) 
      return 'volumeMuted'
    if (state.volume > 0 && state.volume < 0.33)
      return 'volumeLowIcon'
    if (state.volume >= 0.33 && state.volume < 0.66)
      return 'volumeNormalIcon'
    return 'volumeFullIcon'
  }, [state.volume, state.muted])

  return (
    <div className='flex items-center justify-between px-4 h-full'>
      <div className='min-w-[11.25rem] w-[30%]'>
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
          <button
            onClick={controls[state ?.playing ? 'pause' : 'play']}
            className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 bg-white rounded-full hover:transform hover:scale-105 transition duration-150 ease-in-out'>
            <Icon size={state ?.playing ? 16 : 20} name={state ?.playing ? 'pause' : 'play'} />
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon size={16} name="playerNext"/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon size={16} name="repeat"/>
          </button>
        </div>
        <div className='w-full flex items-center gap-x-2'>
          {audio}
          <div className='text-[0.6875rem] text-[#a7a7a7]'>
            {secondsToTime(state ?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state ?.duration || 1}
            value={state?.time}
            onChange={value => controls.seek(value)}
          />
          <div className='text-[0.6875rem] text-[#a7a7a7]'>
            {secondsToTime(state ?.duration)}
          </div>
        </div>
      </div>
      <div className='min-w-[11.25rem] w-[30%] flex items-center justify-end'>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
          <Icon size={16} name="lyrics" />
        </button>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
          <Icon size={16} name="queue" />
        </button>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
          <Icon size={16} name="device" />
        </button>
        <button
          onClick={controls[state.muted ? 'unmute' : 'mute']}
          className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
          <Icon size={16} name={volumeIcon} />
        </button>
        <div className='w-[5.813rem] max-w-full'>
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={value => {
              controls.unmute()
              controls.volume(value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Player
