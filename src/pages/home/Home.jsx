import Card from "../../components/shared/card/Card"
import Banner from "./banner/Banner"
import HomeCard from "./homeCard/HomeCard"
import Services from "./services/Services"

const Home = () => {
  return (
    <>
       <Banner />
       <Services />
       <HomeCard />
       <Card /> 
    </>
  )
}

export default Home