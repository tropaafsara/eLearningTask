import './App.css'
import Header from './components/Header/Header'
import PopularCourses from './components/PopularCourses/PopularCourses'
import Category from './components/Category/Category'
import Difference from './components/Difference/Difference'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import Navbar from './components/Header/Navbar'
import Dot from './components/Difference/Dot'

function App() {

  return (
    <div className='bg-violet-950'>
      <div className='my-container  relative'>
      <div className='semi-circle1'></div>
      <div className='half-circle-1'></div>
      <div className='half-circle-2'></div>
      <div className='element-1'></div>
      <div className='element-2'></div>
      <div className='element-3 bg-red-500'></div>
      <div className='small-circle1'></div>
      <div className='small-circle2'></div>
      <div className='element-4'>
      <Dot></Dot>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
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
