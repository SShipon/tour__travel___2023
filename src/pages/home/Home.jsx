import Banner from "./banner/Banner"
import HomeCard from "./homeCard/HomeCard"
import HomeSlider from "./homeSlider/HomeSlider"
import InfoSection from "./infoSection/InfoSection"
import Services from "./services/Services"

const Home = () => {
  return (
    <>
       <Banner />
       <Services />
       <HomeCard />
       <HomeSlider />
       <InfoSection />
    </>
  )
}

export default Home