import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getCharacterDataById } from '@/services/characters'
import Character from '@/components/organisms/characters/Character'
import { CharacterAttributes } from '@/entities/characters'
import { ResponseData } from '@/entities/types'

const Characters = () => {
    const { query, isReady } = useRouter()
    const [character, setCharacter] = useState<ResponseData<CharacterAttributes> | undefined>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCharacterDataById(query.id as string)
            setCharacter(result.data)
            setLoading(false)
        }
        if (isReady && query.id) {
            fetchData()
        }
    }, [isReady, query.id])

  return (
    <div className='my-8'>
      {
        loading ? <p>Loading....</p> : (
            <div className='flex flex-row flex-wrap gap-4 w-6/12 mx-auto justify-between'>
                <Character {...character!.attributes} />
            </div>
        )
      }
    </div>
  )
}

export default Characters
