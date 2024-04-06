import './App.css';
import Navbar from'./components/navbar';
import Textform from'./components/Textform';



function App() {
  return (
    <>
      <Navbar title ="Text Utils"/>
      <div className = "container my-5">
      <Textform heading = "Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
