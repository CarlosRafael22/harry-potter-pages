import { getCharactersData } from '@/services/characters'
import CharacterCard from '@/components/molecules/characters/CharacterCard'
import { ResponseData } from '@/entities/types'
import { CharacterAttributes } from '@/entities/characters'

interface Props {
    characters: ResponseData<CharacterAttributes>[]
}

const Characters = ({ characters }: Props) => {
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

export const getStaticProps = async () => {
    const { data } = await getCharactersData()
    return {
        props: { characters: data }
    }
}

export default Characters
