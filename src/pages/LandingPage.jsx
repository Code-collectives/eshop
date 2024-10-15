import Banner from '../components/Banner'
import Category from '../components/category'
import Category2 from '../components/category2'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

import Services from '../components/Services'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden'>
<NavBar />
<Hero />
<Category />
<Category2 />
<Services />
<Banner />
<Footer/>
    </div>
  )
}

export default LandingPage
