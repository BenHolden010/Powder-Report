import logo from './logo.svg';
import './App.css';
import  {useEffect}  from 'react';
import { getReportByCity } from './apiCalls';

function App() {
  useEffect(()=>{
    // getReportByCity()
    // .then(data=>console.log(data))
    
  },[])
  return (
    <div className="App">
    </div>
  );
}

export default App;
