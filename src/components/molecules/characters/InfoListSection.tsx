
interface Props {
    title: string
    infoList: string[]
}

const InfoListSection = ({
    title,
    infoList
}: Props) => {
    if (infoList.length === 0) return null

    return (
      <div className="p-2 my-4">
        <p className="subtitle-1">{title}</p>
        <div className="my-2">
            {infoList.map((info, index) => (
                <p className='inline-block px-2 py-1 m-1 font-semibold text-sm bg-white text-black rounded shadow-sm' key={index}>{info}</p>
            ))}
        </div>
      </div>
    )
  }

export default InfoListSection