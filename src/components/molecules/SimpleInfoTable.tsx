import { NullableType } from "@/entities/types"

interface SimpleInfoTableProps {
    children: React.ReactNode
}

const SimpleInfoTable = ({ children }: SimpleInfoTableProps) => {
    return (
        <table className="w-full table-auto">
            <tbody className="text-left">
                {children}
            </tbody>
        </table>
    )
}

interface SimpleInfoTableRowProps {
    title: string
    value: NullableType<string>
}

const SimpleInfoTableRow = ({title, value}: SimpleInfoTableRowProps) => {
    if (!value) return null

    return (
        <tr>
            <th scope="row">{title}</th>
            <td className="px-4">{value}</td>
        </tr>
    )
}

SimpleInfoTable.Row = SimpleInfoTableRow

export default SimpleInfoTable