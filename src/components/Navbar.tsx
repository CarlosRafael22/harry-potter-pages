import Link from 'next/link'
import useRenderingTypePath from '@/hooks/useRenderingTypePath'

const NavBar = () => {
   const renderingTypePathRoot = useRenderingTypePath()

    // Remove Navbar to initial '/' page as it's not in any rendering mechanisms page
    if (!renderingTypePathRoot) return null

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