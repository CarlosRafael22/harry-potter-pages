const URL_BASE = `https://api.potterdb.com/v1`

export const makeRESTRequestToEndpoint = async (endpointPath: string) => {
    const url = `${URL_BASE}/${endpointPath}`
    try {
      const response = await fetch(url)
      const result = await response.json()
      return result
    } catch (error) {
      console.error('error: ', error)
    }
  }