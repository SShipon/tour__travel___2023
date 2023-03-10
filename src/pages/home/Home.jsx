import Banner from "./banner/Banner"
import HomeBlog from "./homeBlog/HomeBlog"
import HomeCard from "./homeCard/HomeCard"
import HomeSlider from "./homeSlider/HomeSlider"
import InfoSection from "./infoSection/InfoSection"
import Review from "./review/Review"
import Services from "./services/Services"

const Home = () => {
  return (
    <>
       <Banner />
       <Services />
       <HomeCard />
       <HomeSlider />
       <InfoSection />
       <Review />
       <HomeBlog />
    </>
  )
}

export default Home