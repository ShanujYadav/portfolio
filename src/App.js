import './App.css';
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';
import Skill from './components/common/Skill';
import Expreince from './components/home/Expreince';
import Hero from './components/home/Hero';

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Skill />
      <Expreince/>
      <Footer />
    </>
  )
}
export default App;
