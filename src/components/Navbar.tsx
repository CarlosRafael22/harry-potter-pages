import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const pathname = usePathname()
    const renderingTypePathRoot = pathname?.split('/')[1]

    return (
      <div>
          <ul className="flex flex-row justify-end gap-4 border-2 border-solid border-red-400 p-4">
            <li>
                <Link href={`/${renderingTypePathRoot}`}>Homepage</Link>
            </li>
            <li>
                <Link href={`/${renderingTypePathRoot}/books`}>Books</Link>
            </li>
            <li>
                <Link href={`/${renderingTypePathRoot}/characters`}>Characters</Link>
            </li>
        </ul>
      </div>
    )
}

export default NavBar