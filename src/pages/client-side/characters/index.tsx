import { useEffect, useState } from 'react'
import { getCharactersData } from '@/services/characters'
import CharacterCard from '@/components/molecules/characters/CharacterCard'

const Characters = () => {
    const [characters, setCharacters] = useState<any[]>()

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCharactersData()
            setCharacters(result.data)
        }
        fetchData()
    }, [])

  return (
    <div>
      <p className='text-center mb-8 subtitle-1'>Harry Potter characters:</p>
      <div className='flex flex-row flex-wrap gap-4 w-10/12 mx-auto justify-between'>
        {characters?.map((book) => {
            return <CharacterCard {...book.attributes} id={book.id} key={book.id} />
        })}
      </div>
    </div>
  )
}

export default Characters
