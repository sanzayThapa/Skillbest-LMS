import Footer from './footer'
import Banner from './section/banner'
import Topcategories from './section/top-categories'
import Feature from './section/feature'
import Masterskill from './section/master-skill'
import Trendingcourse from './section/trending-course'
import Leadingcompany from './section/leading-company'
import Knowledge from './section/knowledge'
import Testimonial from './section/testimonial'
import Becomeinstructor from './section/become-instructor'
import Latestblog from './section/latest-blog'


const HomeThreeComponent = () => {
  return (
    <>
      <div className="home-3">
        <Banner />
        <Topcategories />
        <Feature />
        <Masterskill />
        <Trendingcourse />
        <Leadingcompany />
        <Knowledge />
        <Testimonial />
        <Becomeinstructor />
        <Latestblog />
        <Footer />
      </div>
    </>
  )
}

export default HomeThreeComponent
