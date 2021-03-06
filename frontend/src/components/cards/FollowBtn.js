import { addFollower, getConnections, deleteFollower } from '../../api'

const FollowBtn = ({ token, follow, setFollow, connections, setConnections, card, setCards }) => {
  // currently, our backend does not have our followers endpoint nested with
  // user profiles. The handleFollow function first gets all the connections
  // that a user has. It returns usernames. If the list of returned usersnames
  // includes a match of the username of the 'user' variable, then we need to
  // unfollow by looping through the connections for the user that matches and
  // then grabbing that id. Once we have the id then we can send it to
  // deleteFollower and then refresh the page so that the card no longer shows
  // that following. If there is no match of current followers then we addFollower
  // and reset the cards on the page.

  const handleFollow = (user) => {
    getConnections(token)
      .then(connections => {
        const followingUserNames = connections.following.map(following => following.following_user)
        if (followingUserNames.includes(user)) {
          let id = null
          connections.following.forEach(followingName => {
            if (followingName.following_user === user) {
              id = followingName.id
              deleteFollower(token, id)
                .then(data => {
                  getConnections(token).then(connections => {
                    setConnections(connections.following.map(following => following.following_user))
                  })
                })
            }
          })
        } else {
          addFollower(token, user)
            .then(data => {
              getConnections(token).then(connections => {
                setConnections(connections.following.map(following => following.following_user))
              })
            })
        }
      })
  }

  return (
    <>
      {/* {connections && */}
      <button
        type='button'
        className='justify-center inline-flex flex-1 items-center px-2 py-1 mr-1 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 hover:text-white bg-indigo-200 hover:bg-indigo-500 focus:outline-none  focus:offset-2 focus:indigo-500'
        onClick={() => handleFollow(card.user)}
      >
        {connections.includes(card.user)

          ? <span className='flex items-center'>
            <svg className='ml-0.5 mr-2 h-4 w-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
            Unfollow
            </span>
          : <span className='flex items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-4 w-4'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' />
            </svg>
            Follow
            </span>}
      </button>
      {/* } */}
    </>
  )
}

export default FollowBtn
