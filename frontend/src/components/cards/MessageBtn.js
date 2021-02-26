import { Link } from 'react-router-dom'

const MessageBtn = ({ card }) => {
  return (
    <div>
      <div className='w-0 flex-1 flex'>
        <Link
          to='#'
          className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
        >
          {/* <svg
            className='w-5 h-5 text-gray-400'
            xmlns='http://wwww.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M2.003 5.884L10 9.88217.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
            <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8 118z' />
          </svg> */}

          <span className='ml-3'>
            {/* <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' clipRule='evenodd' />
            </svg> */}
            Message
          </span>
        </Link>
      </div>
    </div>
  )
}

export default MessageBtn
