import { CharacterAttributes } from '@/entities/characters'
import SimpleInfoTable from '../SimpleInfoTable'

type Props = Pick<CharacterAttributes, 'eye_color' | 'hair_color' | 'height' | 'skin_color' | 'weight'>

const BodyInfo = ({
    eye_color,
    hair_color,
    height,
    skin_color,
    weight
}: Props) => {
    return (
      <div className="p-2 my-4">
        <p className="text-lg font-bold mb-2">Body info</p>
         <SimpleInfoTable>
            <SimpleInfoTable.Row title='Height' value={height} />
            <SimpleInfoTable.Row title='Weight' value={weight} />
            <SimpleInfoTable.Row title='Hair color' value={hair_color} />
            <SimpleInfoTable.Row title='Eye color' value={eye_color} />
            <SimpleInfoTable.Row title='Skin color' value={skin_color} />
        </SimpleInfoTable>
      </div>
    )
  }

export default BodyInfo