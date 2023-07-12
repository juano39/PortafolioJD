interface Props {
  image: string
  leguage: string
}
export const CustomCardXp = ({image, leguage}: Props) => {
  return (
    <article data-aos="flip-up" className="text-center h-[91px] w-[100px] flex flex-col justify-end">
        <img className="w-[60px] mx-auto" src={image} alt="" />
        <p className="font-bold mt-1  uppercase">{leguage}</p>
    </article>
  )
}
