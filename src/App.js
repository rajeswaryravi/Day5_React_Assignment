import logo from './logo.svg';
import './App.css';
// import Example1 from './components/Example1.js';
// import Table from './components/Table.js';
import Header from './components/Header.js';
import AboutUs from './components/AboutUs.js';
import MyProject from './components/MyProject.js';
import ContactUs from './components/ContactUs.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
     {/* <Example1 /> */}
     {/* <Table /> */}
     <Header />
     <AboutUs />
     <MyProject />
     <ContactUs />
     <Footer />
    </div>
  );
}

export default App;
