import AboutUs from '../../components/AboutUs'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import Header from "../../components/Header/index"
import MentalHealthArticles from "../../components/MentalHealthArticles"
import Services from "../../components/Services"
import Team from '../../components/Team'


const Home = () => {
  return (
    <>  
      <Header title="PSY" />
      <Carousel />
      <MentalHealthArticles />
      <Services />
      <AboutUs />
      <Team />
      <Footer />
    </>
  )
}

export default Home