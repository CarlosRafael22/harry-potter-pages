import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const pathname = usePathname()
    const renderingTypePathRoot = pathname?.split('/')[1]

    return (
      <div className='pr-8'>
          <ul className="flex flex-row justify-end gap-4 p-4">
            <li className="subtitle-1">
                <Link href={`/${renderingTypePathRoot}`}>Homepage</Link>
            </li>
            <li className="subtitle-1">
                <Link href={`/${renderingTypePathRoot}/books`}>Books</Link>
            </li>
            <li className="subtitle-1">
                <Link href={`/${renderingTypePathRoot}/characters`}>Characters</Link>
            </li>
        </ul>
      </div>
    )
}

export default NavBar