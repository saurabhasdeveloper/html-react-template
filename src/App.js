import Home  from './components/home'
import About from './components/about'
import Services from './components/services'
import ContactUs from './components/contact-us'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exect path='/' element={<Home />} />
        <Route exect path='/about' element={<About />} />
        <Route exect path='/service' element={<Services />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
