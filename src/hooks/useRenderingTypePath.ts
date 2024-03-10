import { usePathname } from 'next/navigation'

const useRenderingTypePath = () => {
    const pathname = usePathname()
    const renderingTypePathRoot = pathname?.split('/')[1]
    return renderingTypePathRoot
}

export default useRenderingTypePath