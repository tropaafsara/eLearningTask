import './App.css'
import Header from './components/Header/Header'
import PopularCourses from './components/PopularCourses/PopularCourses'
import Category from './components/Category/Category'
import Difference from './components/Difference/Difference'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import Navbar from './components/Header/Navbar'

function App() {

  return (
    <div>
      <div className='my-container'>
      <Header></Header>
      <PopularCourses></PopularCourses>
      <Category></Category>
      <Difference></Difference>
      <Testimonial></Testimonial>
      
    </div>
    <div className='footer-container'>
    <Footer></Footer>
    </div>
    </div>
  )
}

export default App
