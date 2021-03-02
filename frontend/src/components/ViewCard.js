import { useState, useEffect } from 'react'
import { useHistory, Link, useParams, Redirect } from 'react-router-dom'
import { getProfile } from '../api'

const ViewCard = ({ token, isLoggedIn }) => {
  const history = useHistory()
  const { pk } = useParams()
  const [card, setCard] = useState(null)

  console.log('token', token)
  useEffect(() => {
    getProfile(token, pk).then(card => setCard(card))
  }, [token, pk])

  if (!token) {
    return <Redirect to='/login' />
  }

  if (!card) {
    return 'loading'
  }

  console.log('card in viewcard', card)

  return (
    <div>
      <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
        <div className='flex justify-between'>
          <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Additional Information
            </h3>
          </div>
          <div className='text-right m-4'>
            <button
              type='button'
              className='inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => history.push('/explore')}
            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-6 w-6'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z' />
              </svg>
            </button>
          </div>
        </div>
        <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>

          <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
            <div>
              <span className='text-sm font-medium text-gray-500'>
                <img
                  className='w-32 h-32 flex-shrink-0  bg-black rounded-full object-cover'
                  src={card.image}
                  alt='avatar'
                />
              </span>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>
                Instruments
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.instruments.map(int => (
                  <p key={int}>{int}</p>
                ))}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>
                {card.individualorband === 'Band'
                  ? 'Band Name'
                  : 'Name'}
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.name}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>
                Genres
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.genres.map(genre => (
                  <p key={genre}>{genre}</p>
                ))}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>
                Location
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.location}
              </dd>
            </div>
            <div className='sm:col-span-2'>
              <dt className='text-sm font-medium text-gray-500'>
                Bio
              </dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {card.bio}
              </dd>
            </div>
            {card.vacancy === true &&
              <div className='sm:col-span-2'>
                <dt className='text-sm font-medium text-gray-500'>
                  We're Looking. . .
                </dt>
                <dd className='mt-1 text-sm text-gray-900'>
                  <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
                    <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                      <div className='w-0 flex-1 flex items-center'>
                        <div className=''>
                          <div className='ml-2 flex-1 flex'>
                            <span>
                              Instruments:&nbsp;
                            </span>
                            {card.wanted_instruments.map((inst, idx) => (
                              <span
                                key={`wanted-${inst}`}
                                className='flex'
                              >
                                {`${idx ? ', ' : ''} ${inst}`}
                              </span>
                            ))}
                          </div>
                          <div className='ml-2 flex-1'>
                            Info: {card.wanted_info}
                          </div>
                        </div>
                      </div>
                      <button
                        type='button'
                        className='inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        onClick={() => history.push(`/message/${pk}`)}
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-4 w-4'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' />
                        </svg>
                        Message
                      </button>
                    </li>
                  </ul>
                </dd>
              </div>}
          </dl>

        </div>

      </div>
    </div>
  )
}

export default ViewCard
