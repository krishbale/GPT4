


import './App.css'
import { Article , Brand , Cta, Feature, Navbar } from './components';
import { Footer , Blog , Possibility , Features, WhyGPT4 , Header}  from './containers'
function App() {


  return (
    <>
     <div className='App'>
     <div className="gradient__bg">
      <Navbar />
      <Header />
    

     </div>
     <Brand />
      <WhyGPT4 />
      <Features />
      <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
     </div>
    </>
  )
}

export default App
