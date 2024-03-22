
import './App.css';
import song from './song.mp3';


function App() {


  function Enter(){
      console.log("899");
      document.getElementById("user_name").innerHTML="Hey  "+(document.getElementById("fname").value)+",MOHIT this side and Wishing you a Holi filled with fun-filled moments, delicious sweets, and beautiful memories"
      document.getElementById("holi").innerHTML="Happy holi"
      new Audio (song).play();
      
  }


 
  return (
    <>
    <div className="App">
  

   <p id="input_name">enter your name</p>
   <input  type="text" id="fname" name="fname"/><button id='btn' onClick={Enter}>ok</button>

    <div className='total'>
      <div>
       <h3 id="user_name"></h3> 
       <h1 id="holi"></h1>
       <h2>this web page is Created by-@j_mohitsrivastava(insta-id)</h2>
      </div>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>
      
  </div>  
    </>
  );

 
}

export default App;
