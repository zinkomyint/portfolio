import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Text from './Components/Text/Text';
import Skill from './Components/Skill/Skill';
import Project from './Components/Projects/Project';
import Design from './Components/UIpage/Design';
import Logopage from './Components/Logopage/Logopage';
import Learn from './Components/Learn/Learn';
import Footer from './Components/Footer/Footer';
import FreeScrollBar from 'react-free-scrollbar';

const App = () => {
  return (
    <div className='fix_scroll'>
      <Navbar />
      <Home />
      <About />
      <Text />
      <Skill />
      <Project />
      <Design />
      <Logopage />
      <Learn />
      <Footer />
    </div>
  );
}


export default App;
