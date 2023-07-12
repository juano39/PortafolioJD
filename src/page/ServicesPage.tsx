import { CustomCardServices } from "../components/CustomCardServices"
import data from '../data/servicesData.json'

export const ServicesPage = () => {
  return (
    <section className="my-20">
        <h4 className="text-center text-[32px] font-bold mb-[100px]">{data.pageTitle}</h4>
        <div className="flex flex-wrap justify-center gap-x-36  gap-y-12">
        {data.services.map((serv, index) => (
            <CustomCardServices image={serv.image} text={serv.description} title={serv.title} key={index}/>
             
        ))}
        
        </div>
    </section>
  )
}
