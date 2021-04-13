import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { STATESabbreviation } from '../helperLists'

const Location = ({ location, setLocation, state, setState, status }) => {
  const [stateSelect, setStateSelect] = useState(false)
  return (
    <div>
      <div className='flex items-end'>
        <div className='col-span-6 sm:col-span-6 lg:col-span-2 flex-1 mr-2'>
          <label htmlFor='city' className='block text-sm font-medium text-gray-700 text-left'>City</label>
          <input
            type='text'
            name='city'
            id='city'
            value={location}
            className='mt-1 focus:ring-indigo-500 bg-gray-50 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* <div className='col-span-6 sm:col-span-3 lg:col-span-2 flex-1/2'>
          <label htmlFor='state' className='block text-sm font-medium text-gray-700 text-left'>State</label>
          <input
            type='text'
            name='state'
            id='state'
            className='mt-1 focus:ring-indigo-500 bg-gray-50 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div> */}
        <div className='mt-1 relative'>
          <button
            type='button' aria-haspopup='listbox' aria-expanded='true' aria-labelledby='listbox-label' className='bg-gray-50 relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            onClick={() => setStateSelect(stateSelect => !stateSelect)}
          >
            <span className='block text-center text-sm sm:text-md'>
              {state || '– –'}
            </span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                <path fillRule='evenodd' d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
            </span>
          </button>

          <Transition
            show={stateSelect}
            enter=''
            enterFrom=''
            enterTo=''
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='absolute mt-1 w-full rounded-md bg-gray-50 shadow-lg'>
              <ul tabIndex='-1' role='listbox' aria-labelledby='listbox-label' aria-activedescendant='listbox-item-3' className='max-h-40 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                {STATESabbreviation.map((stateAbbrev, idx) => (
                  <li
                    key={`stateAbbrev-${idx}`}
                    id={`stateAbbrev-${stateAbbrev}`}
                    data-idx={idx}
                    value={state}
                    className='hover:text-white hover:bg-indigo-600 text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'
                    onClick={() => {
                      setState(stateAbbrev)
                      setStateSelect(false)
                    }}
                  >
                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                    <span
                      className='font-normal block'
                    >
                      {stateAbbrev}
                    </span>
                  </li>
                ))}

              </ul>
            </div>
          </Transition>
        </div>
      </div>
      {status === 'Band' &&
        <p className='mt-1 text-left text-sm text-gray-500 font-normal'>Where does your band call home?</p>}
    </div>

  )
}

export default Location
