import logo from './logo.svg';
import './App.css';
import FCRecipe from './Functional Comp/FCRecipe';
import CCMyKitchen from './Class Comp/CCMyKitchen';
import EHeader from './Elements/EHeader';


function App() {
  document.body.style.backgroundColor='#90b1e6' 
  return (
    <div>{EHeader}
    <div className="App container">
      
      <CCMyKitchen/>
      
    </div>
    </div>
  );
}

export default App;
