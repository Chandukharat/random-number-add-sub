import React from 'react'
import './style.css';

function Addsub() {
    

      
          


        

      

  function add () {
    
    let one = Number(document.getElementById('numb').value);

    let two = document.getElementById('plus').value;
    let three = document.getElementById('minus').value;
    let four = Number(document.getElementById('result').value);
    let total = (four + one );
    document.getElementById('result').value= total;

    

    
      
        return (total );


      } 

      
      

      
  function  sub () {
    let one = Number(document.getElementById('numb').value);

    let two = document.getElementById('plus').value;
    let three = document.getElementById('minus').value;
    let four = Number(document.getElementById('result').value);
    let total = (four - one );
    document.getElementById('result').value= total;
    
    
      
        return (total )

      }

function cleared (){
  document.getElementById('result').value=''
  document.getElementById('numb').value=''

}

      return (
        <div >
          <div id='contain' >
            <h1>CALCULATOR</h1>
            <div><input type="text" id='numb' ></input></div>
            <div> <button id='plus' onClick={add}  >ADD</button></div>
            <div> <button id='minus' onClick={sub}>SUBSTRACT</button></div>
            <span id ='res'>RESULT</span><span><input disabled id='result' value='' ></input></span>
            <button onClick={cleared} >CLEAR</button>
          </div>
        </div>
      );
      
    }
    
    
    export default Addsub
    