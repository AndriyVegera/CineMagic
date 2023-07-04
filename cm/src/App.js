import './App.css';
import {fetchDataFromApi} from "./utils/api";
import {useEffect} from "react";

function App() {
    useEffect(()=>{
        apiTesting();
    },[])
    const apiTesting = ()=>{
        fetchDataFromApi('/movie/popular?api_key=dbf166fac1aa4fe7d19eb9a2ab837477')
            .then((res)=>console.log(res))
    }
  return (
    <div className="App">
        App
    </div>
  );
}

export default App;
