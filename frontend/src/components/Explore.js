import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import Card from './cards/Card'
import { getProfiles } from '../api'
import Search from './Search'

function Explore ({ token }) {
  const [showSlide, setShowSlide] = useState(false)
  const [cards, setCards] = useState([])
  const [profile, setProfile] = useState('')
  const [search, setSearch] = useState('')

  console.log('profile', profile)
  console.log('cards', cards)

  useEffect(() => {
    getProfiles(token).then(cards => setCards(cards))
    console.log('cards', cards)
  }, [token])

  return (
    <div className='bg-gray-50'>
      <div>
        <Search setCards={setCards} token={token} setProfile={setProfile} profile={profile} setSearch={setSearch} search={search} cards={cards} />
      </div>
      <div>
        <Card cards={cards} profile={profile} search={search} />
      </div>
    </div>

  )
}

export default Explore
