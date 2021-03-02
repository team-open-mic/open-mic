import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Avatar (image) {
  return (
    <>
    {image.image ?
      <img
        className='block h-12 w-auto rounded-full'
        src={image.image}
        alt='avatar'
      />
    :
    <span>
      <FontAwesomeIcon
        icon={['far', 'user']}
        className='text-red-300 hover:text-red-500 text-lg mb-1'
      />
    </span>
    }
    </>
    )
}
