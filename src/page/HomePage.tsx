import { CardDestaque, CardIntro, InfoIntro } from "../components/home"


export const HomePage = () => {
  return (
    <header className="flex flex-wrap w-full max-w-[1664px] justify-around items-center px-8">
      <CardIntro />

      <div className="flex flex-wrap justify-center mb-16 ">
        <InfoIntro />

        <CardDestaque />
      </div>
    </header>
  )
}
