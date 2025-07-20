import Header from "./Components/Header";
import Hero from "./Components/hero";
import Footer from "./Components/Footer";
import Banner from "./Components/banner";
import About from "./Components/about";
import Features from "./Components/features";
import EventsPage from "./Components/images";

export default function Home() {
  return(
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Features/>
      <EventsPage/>
      <Banner/>
      <Footer/>
      
    </div>
  )
}