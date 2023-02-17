import RoundedImg from "../../UI/roundedImg/RoundedImg";

const ServicesCard = ({serviceItem}) => {
    const { img, text, description } = serviceItem || {} ;
    
    return (
    <>
        <div className="card group services-card">
            <figure className="px-10 pt-12">
                <RoundedImg img={img}/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="group-hover:text-slate-900 font-bold duration-700 text-white text-2xl mb-4">{text}</h2>
                <p className="group-hover:text-slate-900 font-semibold duration-500 text-white mb-4">{description}</p>
            </div>
        </div>
    </>
  )
}

export default ServicesCard ;