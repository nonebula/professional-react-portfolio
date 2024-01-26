import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import FeaturedProject from './components/FeaturedProject';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skill from './components/Skill';


function App() {
  return (
    <div><Navbar />,
    <Jumbotron />,
    <AboutMe />,
    <Skill />,
    <FeaturedProject />,
    <Project />,
    <ContactMe />,
    <Footer />
    </div>
  );
}

export default App;
