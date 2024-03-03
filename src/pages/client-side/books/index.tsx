import { useEffect, useState } from 'react'
import { getBooksData } from '@/services/books'
import { BookData } from '@/entities/books'
import BookCard from '@/components/molecules/books/BookCard'

const Books = () => {
    const [books, setBooks] = useState<BookData[]>()

    useEffect(() => {
        const fetchData = async () => {
            const result = await getBooksData()
            setBooks(result.data)
        }
        fetchData()
    }, [])

  return (
    <div>
      <p className='subtitle-1 text-center'>Harry Potter books:</p>
      <div className='flex flex-wrap'>
        {books?.map((book) => {
          return <BookCard {...book.attributes} key={book.id} />
        })}
      </div>
    </div>
  )
}

export default Books