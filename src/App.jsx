import { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const apiTesting = () => {
      fetchDataFromApi("/movie/popular")
        .then((res) => dispatch(getApiConfiguration(res.results)))
        .catch((err) => console.log(err));
    };
    apiTesting();
  }, []);
  return (
    <div className="App">
      <h1>MOVIE PIX</h1>
    </div>
  );
}

export default App;
