
const BandLocation = ({ bandLocation, setBandLocation, status }) => {
  return (
    <div>
      {/* <label
        className='form-label'
        htmlFor='band-location'
      >Location
      </label>
      <input
        className='form-text-input'
        type='text'
        value={bandLocation}
        onChange={e => setBandLocation(e.target.value)}
      /> */}
      <div className='flex'>
        <div className='col-span-6 sm:col-span-6 lg:col-span-2 flex-1 mr-2'>
          <label htmlFor='city' className='block text-sm font-medium text-gray-700 text-left'>City</label>
          <input type='text' name='city' id='city' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
        </div>

        <div className='col-span-6 sm:col-span-3 lg:col-span-2 flex-1/2'>
          <label htmlFor='state' className='block text-sm font-medium text-gray-700 text-left'>State</label>
          <input type='text' name='state' id='state' className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
        </div>
      </div>
      {status === 'Band' &&
        <p className='mt-1 text-left text-sm text-gray-500 font-normal'>Where does your band call home?</p>}
    </div>

  )
}

export default BandLocation
