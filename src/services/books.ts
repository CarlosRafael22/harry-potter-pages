export const getBooksData = async () => {
    const url = `https://api.potterdb.com/v1/books`
    try {
      const response = await fetch(url)
      const result = await response.json()
      console.log(result)
      return result
    } catch (error) {
      console.error(error)
    }
  }