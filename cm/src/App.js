import './App.css';
import {fetchDataFromApi} from "./utils/api";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getApiConfiguration} from "./store/homeSlice";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

function SearchResult() {
    return null;
}

function App() {
    const dispatch = useDispatch();
    const {url} = useSelector((state) => state.home)
    useEffect(()=>{
        fetchApiConfig();
    },[])
    const fetchApiConfig = ()=>{
        fetchDataFromApi('/configuration')
            .then((res)=> {
                console.log(res);
                const url = {
                    backdrop: res.images.secure_base_url + "original",
                    poster: res.images.secure_base_url + "original",
                    profile: res.images.secure_base_url + "original",
                };
                dispatch(getApiConfiguration(url))
            })
    }
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/:mediaType/:id" element={<Details />} />
              <Route path="/search/:query" element={<SearchResult />} />
              <Route path="/explore/:mediaType" element={<Explore />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
