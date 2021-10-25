import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title='Text Processing' aboutSite='About Text Processing'/>
      <TextForm heading="Enter your text here"/>

    </>
  );
}

export default App;
