
import Banner from "./banner/Banner"
import HomeCard from "./homeCard/HomeCard"
import HomeSlider from "./homeSlider/HomeSlider"
import Services from "./services/Services"

const Home = () => {
  return (
    <>
       <Banner />
       <Services />
       <HomeCard />
       <HomeSlider />
    </>
  )
}

export default Home