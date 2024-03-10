import { makeRESTRequestToEndpoint } from "@/helpers/requests"
import { Response } from '@/entities/types'
import { CharacterAttributes } from '@/entities/characters'

export const getCharactersData = async (): Promise<Response<CharacterAttributes[]>> => {
  return await makeRESTRequestToEndpoint('/characters')
}

export const getCharacterDataById = async (id: string): Promise<Response<CharacterAttributes>> => {
  return await makeRESTRequestToEndpoint(`/characters/${id}`)
}