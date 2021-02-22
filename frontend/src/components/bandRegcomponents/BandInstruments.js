import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'

const BandInstruments = ({ bandInstruments, setBandInstruments }) => {
  const length = bandInstruments.length

  const addInstrument = () => {
    setBandInstruments(bandInstruments.concat(''))
  }

  const removeInstrument = (event) => {
    console.log('idx', bandInstruments)
  }

  const handleInstrumentChange = (e) => {
    setBandInstruments(e)
  }

  return (
    <div>
      <label
        className='form-label'
        htmlFor='instrument'
      >What instruments does your band currently have?
      </label>
      {bandInstruments.map((instrument, idx) => {
        return (
          <div className='flex flex-col' key={idx}>
            <div
              className='flex mt-2'
            >
              <input
                className='mt-1 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm sm:text-lg border-gray-300 rounded-l-md border-r-0 border bg-gray-50'
                type='text'
                required
                placeholder='Enter Instrument'
                value={bandInstruments}
                onChange={e => setBandInstruments(e.target.value)}
              />
              <button
                type='button'
                className='border-gray-300 bg-gray-50 rounded-r-md block shadow-sm  mt-1 px-2 border border-l-0'
                onClick={e => removeInstrument(e)}
              >
                <FontAwesomeIcon
                  icon='times'
                  className='text-red-300 text-lg mb-1'
                />
              </button>
              {/* {length - 1 === idx && */}
              <button
                type='button'
                className='inline-flex justify-center py-1 sm:py-2 px-1 ml-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-32 self-center'
                onClick={addInstrument}
              >Add
              </button>
              {/* } */}
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default BandInstruments
