import { CharacterAttributes } from '@/entities/characters'

type Props = Pick<CharacterAttributes, 'eye_color' | 'hair_color' | 'height' | 'skin_color' | 'weight'>

const BodyInfo = ({
    eye_color,
    hair_color,
    height,
    skin_color,
    weight
}: Props) => {
    return (
      <div className="border-2 border-solid border-red-400 p-4">
          <p>{`Height: ${height}`}</p>
          <p>{`Weight: ${weight}`}</p>
          <p>{`Hair color: ${hair_color}`}</p>
          <p>{`Eye color: ${eye_color}`}</p>
          <p>{`Skin color: ${skin_color}`}</p>
      </div>
    )
  }

export default BodyInfo