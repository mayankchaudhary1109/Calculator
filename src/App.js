import logo from './logo.svg';
import './App.css';
import React, {useRef, useState}  from 'react';
function App() {
const [value, setvalue] =useState("");
const [value1, setvalue1] = useState("");
const [flag, setflag] = useState(true);
const [operator, setoperator] = useState(null);
const [value2, setvalue2] = useState(0);


const seven = useRef();
const input = useRef();
const eight =useRef(); 
const nine = useRef(); 
const four = useRef();
const five = useRef();
const six = useRef();
const one =useRef();
const two = useRef();
const three =useRef();
const zero =useRef();
const operatorref =useRef();
const percentage = useRef();
const modulos = useRef();
const multiply = useRef();
const minus = useRef();
const plus = useRef();
const equal =useRef();
function calc(ref){
  if(flag){
  setvalue(value + ref.current.textContent);
  input.current.value=value + ref.current.textContent;
}
else{
  setvalue1(value1 + ref.current.textContent);
  input.current.value=value1 + ref.current.textContent;
}
}


 function airth(ref){
     setoperator(ref.current.textContent);
    input.current.value=ref.current.textContent;
    setflag(false)
    
 }


 function ans(){
 if(operator=== '*'){
  if(value2===0){
    setvalue2(parseInt(value2) + (parseInt(value) * parseInt(value1)))
    input.current.value= parseInt(value2) + (parseInt(value) * parseInt(value1));
    setvalue(1);
    setvalue1("");
    setflag(true);
    setoperator(null);
  }
  else if(value2!==0){
    setvalue2(parseInt(value2) * parseInt(value1))
    input.current.value=parseInt(value2) * parseInt(value1);
    setvalue('');
    setvalue1('');
    setflag(true);
    setoperator(null);
  }
 }
  else if(operator=== '+'){
    if(value2===0){
      setvalue2(parseInt(value2) + (parseInt(value) + parseInt(value1)))
    input.current.value= parseInt(value2) + (parseInt(value) + parseInt(value1));
    setvalue(1);
    setvalue1("");
    setflag(true);
    setoperator(null);
    }
    else if(value2!==0){
      setvalue2(parseInt(value2) + parseInt(value1))
      input.current.value= parseInt(value2) + parseInt(value1);
      setvalue('');
      setvalue1('');
      setflag(true);
      setoperator(null);
    }
  }
  else if(operator==='-'){
    if(value2===0){
      setvalue2(parseInt(value2) + (parseInt(value) - parseInt(value1)))
    input.current.value= parseInt(value2) + (parseInt(value) - parseInt(value1));
    setvalue(1);
    setvalue1("");
    setflag(true);
    setoperator(null);
    }
    else if(value2!==0){
      setvalue2(parseInt(value2) - parseInt(value1))
      input.current.value= parseInt(value2) - parseInt(value1);
      setvalue('');
      setvalue1('');
      setflag(true);
      setoperator(null);
    }
  }
  else if(operator==='%'){
    if(value2===0){
      setvalue2(parseInt(value2) + (parseInt(value) % parseInt(value1)))
    input.current.value= parseInt(value2) + (parseInt(value) % parseInt(value1));
    setvalue(1);
    setvalue1("");
    setflag(true);
    setoperator(null);
    }
    else if(value2!==0){
      setvalue2(parseInt(value2) % parseInt(value1))
      input.current.value=parseInt(value2) % parseInt(value1);
      setvalue('');
      setvalue1('');
      setflag(true);
      setoperator(null);
    }
  }
  else if(operator==='/'){
    if(value2===0){
      setvalue2(parseInt(value2) + (parseInt(value) / parseInt(value1)))
    input.current.value= parseInt(value2) + (parseInt(value) / parseInt(value1));
    setvalue(1);
    setvalue1("");
    setflag(true);
    setoperator(null);
    }
    else if(value2!==0){
      setvalue2(parseInt(value2) / parseInt(value1))
      input.current.value=parseInt(value2) / parseInt(value1);
      setvalue('');
      setvalue1('');
      setflag(true);
      setoperator(null);
    }
  }
  
 }
 function clearall(){
  input.current.value=0;
  setvalue('');
  setvalue1('');
  setvalue2('');
 }
 function clearone(){
  if(flag){
    setvalue(value.slice(0,-1))
    input.current.value=value.slice(0,-1);
  }
  else if(!flag){
    setvalue1(value1.slice(0,-1))
    input.current.value=value1.slice(0,-1);
  }
  
 }

return (
 <div className="calc col-sm-3 border mx-auto mt-4">
  <input type="text" ref={input} class="calculator-screen z-depth-1"/>
  <button className="buttonupperleft" onClick={clearall}>AC</button>
  <button className="buttonupperleft" onClick={clearone}>C</button>
  <button className="buttonupperleft"  ref={percentage} onClick={()=>airth(percentage)}>%</button>
  <button className="buttonrightside"  ref={modulos} onClick={()=>airth(modulos)}>/</button><br></br>
  
  
  <button className="buttonleft" ref={seven} onClick={()=>calc(seven)}>7</button>
  <button className="buttonleft" ref={eight} onClick={()=>calc(eight)}>8</button>
  <button className="buttonleft" ref={nine} onClick={()=>calc(nine)}>9</button>
  <button className="buttonrightside"  ref={multiply} onClick={()=>airth(multiply)}>*</button><br></br>
  <button className="buttonleft" ref={four} onClick={()=>calc(four)}>4</button>
  <button className="buttonleft" ref={five} onClick={()=>calc(five)}>5</button>
  <button className="buttonleft" ref={six} onClick={()=>calc(six)}>6</button>
  <button className="buttonrightside"  ref={minus} onClick={()=>airth(minus)}>-</button><br></br>
  <button className="buttonleft" ref={one} onClick={()=>calc(one)}>1</button>
  <button className="buttonleft"  ref={two} onClick={()=>calc(two)}>2</button>
  <button className="buttonleft" ref={three} onClick={()=>calc(three)}>3</button>
  <button className="buttonrightside"  ref={plus} onClick={()=>airth(plus)}>+</button><br></br>
  <button className="buttonunique"ref={zero} onClick={()=>calc(zero)} >0</button>
  <button className="buttonleft">.</button>
  <button className="buttonrightside" ref={equal} onClick={ans}>=</button><br></br>
    </div>
  );
}

export default App;
