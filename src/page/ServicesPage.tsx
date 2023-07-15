import { CustomCardServices } from "../components/CustomCardServices"
import data from '../data/servicesData.json'

export const ServicesPage = () => {
  return (
    <section id="services" className="my-20 min-[768px]:px-[90px] max-[768px]:px-[10px] ">
        <h4 className="text-center text-[32px] font-bold mb-[100px]">{data.pageTitle}</h4>
        <div className="flex flex-wrap justify-center px-4 sm:gap-x-36  gap-y-12">
        {data.services.map((serv, index) => (
            <CustomCardServices image={serv.image} text={serv.description} title={serv.title} key={index}/>
             
        ))}
        
        </div>
    </section>
  )
}
