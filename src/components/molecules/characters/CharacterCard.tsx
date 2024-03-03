import Image from 'next/image'
import { useRouter } from 'next/router'

import { CharacterAttributes } from '@/entities/characters'

interface Props extends CharacterAttributes {
    id: string
}

const CharacterCard = (props: Props) => {
    const router = useRouter()

    return (
      <div className="border-2 border-solid border-red-400 p-4 w-1/5" onClick={() => router.push(`/client-side/characters/${props.id}`)}>
            {props.image && <Image
                src={props.image}
                width={200}
                height={200}
                alt={props.name || 'Character photo'}
            />}
          <p>{`Name: ${props.name}`}</p>
          <p>{`Gender: ${props.gender}`}</p>
          <p>{`House: ${props.house}`}</p>
          <p>{`Nationality: ${props.nationality}`}</p>
      </div>
    )
  }

export default CharacterCard