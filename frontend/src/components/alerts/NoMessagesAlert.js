
const NoMessagesAlert = () => {
  return (
    <div>
      <div class='bg-yellow-50 border-l-4 border-yellow-400 p-4'>
        <div class='flex'>
          <div class='flex-shrink-0'>
            {/* <!-- Heroicon name: solid/exclamation --> */}
            <svg class='h-5 w-5 text-yellow-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
              <path fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' />
            </svg>
          </div>
          <div class='ml-3'>
            <p class='text-lg text-yellow-700'>
              You currently have no messages 😢
            </p>
            <p class='text-lg text-yellow-700'>
              Start a conversation by going to explore and messaging somone. 😁
            </p>
            <p class='text-lg text-yellow-700'>
              If you are not sure who to message, you can always let Schwifty know you're thinking about him.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoMessagesAlert