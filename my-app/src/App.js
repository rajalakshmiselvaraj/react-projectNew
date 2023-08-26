import logo from './logo.svg';
import './App.css';

function App() {
let name="kayal";
let email="kayalpetalautomations@gmail.com";
let age=22;

  return (
   
    <div style={{display:"flex",fontSize:"16px",alignItems:'center',flexDirection:'column', margin:'20px'}}>
   {name}
      <input placeholder='Enter the Name'></input>
      <input placeholder='Enter the MobileNo'></input>
      <input placeholder='Enter the Gmail-Id'></input>
      <input placeholder='Enter the Address'></input>
      <button onClick={() => {console.log('OnClieck Is working')}}>Save</button>
    
    </div>
  
  );
}

export default App;
