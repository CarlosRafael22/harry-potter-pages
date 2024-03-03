import Image from 'next/image'

import BodyInfo from '@/components/molecules/characters/BodyInfo'
import { CharacterAttributes } from '@/entities/characters'
import GeneralInfo from '@/components/molecules/characters/GeneralInfo'
import InfoListSection from '@/components/molecules/characters/InfoListSection'

const Character = (props: CharacterAttributes) => {
    const { hair_color, eye_color, skin_color, weight, height } = props
    const characterProps = { hair_color, eye_color, skin_color, weight, height }

    const { name,
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
    } = props

    const generalInfoProps = { name,
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
    }

    return (
      <div className="p-4 w-full border-2 border-solid border-white rounded">
            <GeneralInfo {...generalInfoProps} />
            <BodyInfo {...characterProps} />
            <InfoListSection title='Alias names' infoList={props.alias_names} />
            <InfoListSection title='Wands' infoList={props.wands} />
            <InfoListSection title='Titles' infoList={props.titles} />
            <InfoListSection title='Jobs' infoList={props.jobs} />
            <InfoListSection title='Family members' infoList={props.family_members} />
            <InfoListSection title='Romances' infoList={props.romances} />
      </div>
    )
  }

export default Character