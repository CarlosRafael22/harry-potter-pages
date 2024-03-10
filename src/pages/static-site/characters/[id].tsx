import { GetStaticPaths, GetStaticProps } from 'next'

import { getCharacterDataById } from '@/services/characters'
import Character from '@/components/organisms/characters/Character'
import { CharacterAttributes } from '@/entities/characters'
import { ResponseData } from '@/entities/types'
import { getCharactersData } from '@/services/characters'

interface Props {
    character: ResponseData<CharacterAttributes>
}

const Characters = ({ character }: Props) => {
  return (
    <div className='my-8'>
        <div className='flex flex-row flex-wrap gap-4 w-6/12 mx-auto justify-between'>
            <Character {...character!.attributes} />
        </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await getCharactersData()
    const paths = data.map(({ id }) => ({
        params: { id }
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const result = await getCharacterDataById(params?.id as string)
    return {
        props: {
            character: result.data
        }
    }
}

export default Characters
