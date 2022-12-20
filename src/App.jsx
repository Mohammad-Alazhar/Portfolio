import React from 'react'
import {Navbar,About,Contact,Home,Portfolio,SocialLinks,Experience} from './components'

const App = () => {
  return (
    <div>
     <Navbar /> 
     <Home />
     <About />
     <Portfolio />
     <Experience />
     <Contact />
     <SocialLinks />

    </div>
  )
}

export default App