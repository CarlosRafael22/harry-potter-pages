import { getBooksData } from '@/services/books'
import { BookAttributes, BookData } from '@/entities/books'

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

const HarryPotter = ({ books }: Props) => {
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

export async function getServerSideProps() {
    const result = await getBooksData()
    return {
      props: {
        books: result.data,
      },
    }
}

export default HarryPotter
