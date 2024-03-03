import Image from 'next/image'

import BodyInfo from '@/components/molecules/characters/BodyInfo'
import { CharacterAttributes } from '@/entities/characters'

const Character = (props: CharacterAttributes) => {
    const { hair_color, eye_color, skin_color, weight, height } = props
    const characterProps = { hair_color, eye_color, skin_color, weight, height }
    return (
      <div className="border-2 border-solid border-red-400 p-4 w-full">
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
          <BodyInfo
            {...characterProps}
          />
      </div>
    )
  }

export default Character