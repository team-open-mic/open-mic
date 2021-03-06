import { useHistory } from 'react-router-dom'

const MessageBtn = ({ card, setMessageReceiverUser, setMessageReceiverName, setThreadStatus }) => {
  const history = useHistory()
  // console.log('card', card)
  return (
    <>
      <button
        type='button'
        className='justify-center inline-flex flex-1 items-center px-2 py-1 ml-1 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 hover:text-white bg-indigo-200 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        onClick={() => {
          history.push('/message')
          setMessageReceiverUser(card.user)
          setMessageReceiverName(card.name)
          setThreadStatus('New Message')
        }}
      >
        <span>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-4 w-4'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' />
          </svg>
        </span>
        Message
      </button>
    </>
  )
}

export default MessageBtn
