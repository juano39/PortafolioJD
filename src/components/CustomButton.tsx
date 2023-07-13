interface Props {
    text: string
    classStyle?: string
    visivility?: boolean
}
export const CustomButton = ({text, classStyle, visivility}: Props) => {
  return (
    <button className={`${classStyle} max-lg:w-full transition duration-300 ease-in-out  hover:shadow-lg hover:shadow-[rgba(255,255,255,0.1)] hover:border-[#dadce0] font-bold ${visivility ? 'border border-[#1C9EE7]' : 'bg-gradient-to-r from-[#1C9EE7] to-[#551160] '} uppercase  rounded-[10px] px-5 py-[10px] `}>{text}</button>
  )
}

// .button-16:hover {
//   border-color: #dadce0;
//   box-shadow: rgba(0, 0, 0, .1) 0 1px 1px;
//   color: #202124;
// }