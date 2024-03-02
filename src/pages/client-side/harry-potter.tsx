import { useEffect, useState } from 'react'
import { getBooksData } from '@/services/books'
import { BookAttributes, BookData, ResponseData } from '@/entities/books'

const BookCard = (props: BookAttributes) => {
  return (
    <div className="border-2 border-solid border-red-400 p-4">
        <p>{`Title: ${props.title}`}</p>
        <p>{`Pages: ${props.pages}`}</p>
      <p>{`Dedication: ${props.dedication}`}</p>
      <p>{`Author: ${props.author}`}</p>
    </div>
  )
}

interface Props {
    books: BookData[]
}

const HarryPotter = () => {
    const [books, setBooks] = useState<BookData[]>()

    useEffect(() => {
        console.log('EFFECT ONCE')
        const fetchData = async () => {
            const result: ResponseData = await getBooksData()
            setBooks(result.data)
        }
        fetchData()
    }, [])

  console.log('RENDER HarryPotter COMPONENT AND DATA is: ', books)
  return (
    <div>
      Harry Potter books:
      {books?.map((book) => {
          return <BookCard {...book.attributes} key={book.id} />
        })}
    </div>
  )
}

export default HarryPotter
