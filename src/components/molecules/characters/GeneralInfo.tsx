import Image from 'next/image'

import { CharacterAttributes } from '@/entities/characters'
import SimpleInfoTable from '../SimpleInfoTable'

type Props = Pick<CharacterAttributes, 'name' | 'image' | 'gender' | 'house' | 'nationality' | 'blood_status' | 'born' | 'died' | 'marital_status' | 'species' | 'boggart' | 'animagus' | 'patronus'>

const GeneralInfo = ({
    name,
    image,
    gender,
    house,
    nationality,
    blood_status,
    born,
    died,
    marital_status,
    species,
    boggart,
    animagus,
    patronus
}: Props) => {
    return (
        <div className="flex flex-row p-4">
            <div className='w-1/4'>
                {image && <Image
                    src={image}
                    width={200}
                    height={500}
                    alt={name || 'Character photo'}
                />}
            </div>
            <div className='w-3/4 ml-10'>
                <SimpleInfoTable>
                    <SimpleInfoTable.Row title='Name' value={name} />
                    <SimpleInfoTable.Row title='Gender' value={gender} />
                    <SimpleInfoTable.Row title='House' value={house} />
                    <SimpleInfoTable.Row title='Nationality' value={nationality} />
                    <SimpleInfoTable.Row title='Born' value={born} />
                    <SimpleInfoTable.Row title='Died' value={died} />
                    <SimpleInfoTable.Row title='Species' value={species} />
                    <SimpleInfoTable.Row title='Blood status' value={blood_status} />
                    <SimpleInfoTable.Row title='Maritual status' value={marital_status} />
                    <SimpleInfoTable.Row title='Boggart' value={boggart} />
                    <SimpleInfoTable.Row title='Animagus' value={animagus} />
                    <SimpleInfoTable.Row title='Patronus' value={patronus} />
                </SimpleInfoTable>
            </div>
    </div>
    )
  }

export default GeneralInfo