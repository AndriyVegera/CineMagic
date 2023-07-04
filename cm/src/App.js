import './App.css';
import {fetchDataFromApi} from "./utils/api";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getApiConfiguration} from "./store/homeSlice";

function App() {
    const dispatch = useDispatch();
    const {url} = useSelector((state) => state.home)
    useEffect(()=>{
        apiTesting();
    },[])
    const apiTesting = ()=>{
        fetchDataFromApi('/movie/popular?api_key=dbf166fac1aa4fe7d19eb9a2ab837477')
            .then((res)=> {
                console.log(res);
                dispatch(getApiConfiguration(res))
            })
    }
  return (
    <div className="App">
        App
        {/*{url?.total_pages}*/}
    </div>
  );
}

export default App;
