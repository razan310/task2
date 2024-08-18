
import './App.css'
import NavBar from './component/navbar/NavBar'
import Properties from './component/Properties/Properties'
import Featured from './component/Featured/Featured'
import Slider from './component/slider/Slider'
import VideoSection from './component/videoSection/VideoSection'
import BestDeal from './component/bestDeal/BestDeal'
import ContactPage from './component/contactUs/ContactPage'





function App() {
  

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
    <meta className="viewport" content="width=device-with, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
    <NavBar/>
    <Slider/>
    <Featured/>
    <VideoSection/>
    <BestDeal/>
    <Properties/>
    <ContactPage/>
    
    </>
  )
}

export default App
