import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Project from './components/Project';
import projects from './assets/projects.js';
import Skill from './components/Skill';
import skills from './assets/skills.js';


function App() {
  return (
    <div><Navbar />,
    <Jumbotron />,
    <AboutMe />,
    <Skill skills={skills} />
    <Project projects={projects} />,
    <ContactMe />,
    <Footer />
    </div>
  );
}

export default App;
