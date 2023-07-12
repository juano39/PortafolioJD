interface Props {
    text: string
    classStyle?: string
    visivility?: boolean
}
export const CustomButton = ({text, classStyle, visivility}: Props) => {
  return (
    <button className={`${classStyle} max-[768px]:w-full transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#1C9EE7] font-bold ${visivility ? 'border border-[#1C9EE7]' : 'bg-gradient-to-r from-[#1C9EE7] to-[#551160] '} uppercase  rounded-[10px] px-5 py-[10px] `}>{text}</button>
  )
}
