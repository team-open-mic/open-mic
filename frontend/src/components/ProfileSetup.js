//
import { useState, useRef, useEffect } from 'react'
import Genre from './profileComponents/Genre'
import Instruments from './profileComponents/Instruments'
import Bio from './profileComponents/Bio'
import Images from './profileComponents/Images'
import Name from './profileComponents/Name'
import Email from './profileComponents/Email'
import Site from './profileComponents/Site'
import BandLocation from './profileComponents/BandLocation'
import Vacancy from './profileComponents/Vacancy'
import Status from './profileComponents/Status'
import WantedInstruments from './profileComponents/WantedInstruments'
import WantedInfo from './profileComponents/WantedInfo'
import { useParams, useHistory } from 'react-router-dom'
import { postProfiles, deleteProfile, updateProfile, uploadImage } from '../api'
import Delete from './Delete'
import { getUserProfile } from '../api'

const statusForApi = (status) => {
  if (status === 'Solo Artist') {
    return 'Individual'
  } else {
    return status
  }
}

const wantedIntForAPI = (vacancy, wantedInst) => {
  if (vacancy === false) {
    return ['none']
  } else {
    return wantedInst
  }
}

const genreForApi = (genres) => {
  if (genres === ['']) {
    return ['none']
  } else {
    return genres
  }
}

const instrumentsForApi = (intstruments) => {
  if (intstruments === ['']) {
    return ['none']
  } else {
    return intstruments
  }
}

const ProfileSetup = ({ token, userType, isEditing, setIsImage, setAvatar }) => {
  const [hasFileUpload, setHasFileUpload] = useState(false)
  const [profile, setProfile] = useState(null)
  const history = useHistory()
  const [status, setStatus] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [site, setSite] = useState('')
  const [genres, setGenres] = useState([])
  const [instruments, setInstruments] = useState([])
  const [vacancy, setVacancy] = useState('')
  const [wantedInstruments, setWantedInstruments] =useState([])
  const [wantedInfo, setWantedInfo] =useState([])
  const [image, setImage] = useState(null)
  const [bio, setBio] = useState('')

  useEffect(() => {
    getUserProfile(token).then(profile => setProfile(profile))
  }, [token])

  function handleSubmit (event, token) {
    event.preventDefault()

    const formData = new FormData()
    formData.set('status', status)
    formData.set('name', name)
    formData.set('email', email)
    formData.set('site', site)
    formData.set('genres', genres)
    formData.set('instruments', instruments)
    formData.set('vacancy', vacancy)
    formData.set('wantedInstruments', wantedInstruments)
    formData.set('wantedInfo', wantedInfo)
    formData.set('bio', bio)

    if (hasFileUpload) {
      formData.set('image', image)
    }

    // This is just to log the formData object
    for (let entry of formData.entries()){
      console.log("form data:", entry)
    }

    console.log('pending profile in isEditing', profile)

    // TODO: fix the conditional here so that the right request is made for creating or updating
    if (isEditing) {
        updateProfile(token, profile, profile.pk)
        .then(data => {
          uploadImage(token, formData, data.pk)
            .then(data => {
              history.push('/explore')
            })
        })
    } else {
        console.log('pending profile in first Submit', profile)

      postProfiles(token, profile)
        .then(data => {
          uploadImage(token, formData, data.pk)
            .then(data => {
              history.push('/explore')
            })
        })
    }
  }

  function handleDeleteProfile (event, pk) {
    event.preventDefault()
    deleteProfile(token, pk)
      .then(card => history.push('/'))
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Profile Setup</h2>
        </div>
        <div className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          <form
            className='flex flex-col'
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(e, token, history)
            }}
          >
            <div className='flex flex-col'>

              <div className='mt-4'>
                <Status status={status} setStatus={setStatus} />
              </div>

              <div className='mt-4'>
                <Name name={name} setName={setName} status={status} />
              </div>

              <div className='mt-4'>
                <Email email={email} setEmail={setEmail} />
              </div>

              <div className='mt-4'>
                <Site site={site} setSite={setSite} />
              </div>

              <div className='mt-4 h-60'>
                <Genre genres={genres} setGenres={setGenres} status={status} />
              </div>

              <div className='mt-4 h-72'>
                <Instruments instruments={instruments} setInstruments={setInstruments} status={status} />
              </div>

              {status === 'Band' &&
                <div className='mt-4'>
                  <Vacancy vacancy={vacancy} setVacancy={setVacancy} />
                </div>}

              {vacancy === true &&
                <span>
                  <div className='mt-4 h-60'>
                    <WantedInstruments wantedInstruments={wantedInstruments} setWantedInstruments={setWantedInstruments} />
                  </div>

                  <div className='mt-4'>
                    <WantedInfo wantedInfo={wantedInfo} setWantedInfo={setWantedInfo} />
                  </div>
                </span>}

              <div className='mt-10'>
                <Bio bio={bio} setBio={setBio} status={status} />
              </div>

              <div className='mt-4'>
                <Images image={image} token={token} setImage={setImage} setHasFileUpload={setHasFileUpload} />
              </div>

            </div>
            <div className='mt-4'>
              <button
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                type='submit'
                onSubmit={(e) => {
                  e.preventDefault()
                  handleDeleteProfile(e, token, history)
                }}
              >Submit
              </button>
            </div>
            {isEditing &&
              <div className='mt-12'>
                <span><Delete /></span>
              </div>}
          </form>
        </div>
      </div>
    </div>

  )
}

export default ProfileSetup
