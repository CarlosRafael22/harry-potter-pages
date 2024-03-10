import Image from 'next/image'
import { useRouter } from 'next/router'

import { CharacterAttributes } from '@/entities/characters'
import useRenderingTypePath from '@/hooks/useRenderingTypePath'

import SimpleInfoTable from '../SimpleInfoTable'

interface Props extends CharacterAttributes {
    id: string
}

const CharacterCard = (props: Props) => {
    const router = useRouter()
    const renderingTypePathRoot = useRenderingTypePath()
    const { name, gender, house, nationality, image } = props

    return (
      <div className="border-2 border-solid border-white p-4 w-1/5 cursor-pointer" onClick={() => router.push(`/${renderingTypePathRoot}/characters/${props.id}`)}>
            {image && <Image
                src={image}
                width={200}
                height={200}
                alt={name || 'Character photo'}
            />}
            <SimpleInfoTable>
                <SimpleInfoTable.Row title='Name' value={name} />
                <SimpleInfoTable.Row title='Gender' value={gender} />
                <SimpleInfoTable.Row title='House' value={house} />
                <SimpleInfoTable.Row title='Nationality' value={nationality} />
            </SimpleInfoTable>
      </div>
    )
  }

export default CharacterCard