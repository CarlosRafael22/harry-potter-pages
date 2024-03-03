import { makeRESTRequestToEndpoint } from "@/helpers/requests"

export const getCharactersData = async () => {
  return await makeRESTRequestToEndpoint('/characters')
}

export const getCharacterDataById = async (id: string) => {
  return await makeRESTRequestToEndpoint(`/characters/${id}`)
}