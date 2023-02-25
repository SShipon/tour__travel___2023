import RoundedImg from "../../UI/roundedImg/RoundedImg";

const ServicesCard = ({serviceItem, review}) => {
    const { img, text, description } = serviceItem || {} ;
    
    return (
    <>
        <div className="card group services-card">
            <figure className="px-10 pb-8 pt-12">
                <RoundedImg img={img}/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="services-body font-bold  text-2xl">{text}</h2>
                <p className="services-body font-semibold ">{description}</p>
            </div>
        </div>
    </>
  )
}

export default ServicesCard ;