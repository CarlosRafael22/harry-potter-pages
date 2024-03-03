import { makeRESTRequestToEndpoint } from "@/helpers/requests"

export const getBooksData = async () => {
  return await makeRESTRequestToEndpoint('/books')
}