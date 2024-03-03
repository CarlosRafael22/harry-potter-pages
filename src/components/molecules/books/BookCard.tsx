import { BookAttributes } from '@/entities/books'

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

export default BookCard