import React from 'react';
import './Hello.css';

function Hello({name,age}) {
return <div>
         Hello World From App.Js Name : {name} Age : {age - 2} 
        <br/>
        <p className="css" >This is a paragraph tag of HTML in App.js</p>   
       </div>
}

export default Hello;