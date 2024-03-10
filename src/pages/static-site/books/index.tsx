import { getBooksData } from '@/services/books'
import { BookData } from '@/entities/books'
import BookCard from '@/components/molecules/books/BookCard'

interface Props {
    books: BookData[]
}

const Books = ({ books }: Props) => {
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

export const getStaticProps = async () => {
    const { data } = await getBooksData()
    return {
        props: {
            books: data
        }
    }
}

export default Books