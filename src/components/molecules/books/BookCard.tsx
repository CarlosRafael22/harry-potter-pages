import Image from 'next/image'

import { BookAttributes } from '@/entities/books'
import SimpleInfoTable from '../SimpleInfoTable'

const BookCard = (props: BookAttributes) => {
  return (
    <div className="flex flex-col gap-2 p-4 w-1/4">
        {props.cover && <Image
                src={props.cover}
                width={200}
                height={200}
                alt={props.title || 'Book cover'}
            />}
        <SimpleInfoTable>
            <SimpleInfoTable.Row title='Title' value={props.title} />
            <SimpleInfoTable.Row title='Pages' value={`${props.pages}`} />
            <SimpleInfoTable.Row title='Dedication' value={props.dedication} />
            <SimpleInfoTable.Row title='Author' value={props.author} />
        </SimpleInfoTable>
    </div>
  )
}

export default BookCard