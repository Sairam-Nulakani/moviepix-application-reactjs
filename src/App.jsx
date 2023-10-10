import { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    const apiTesting = () => {
      fetchDataFromApi("/movie/popular")
        .then((res) => dispatch(getApiConfiguration(res)))
        .catch((err) => console.log(err));
    };
    apiTesting();
  }, []);
  return (
    <div className="App">
      <h1>{url.total_pages}</h1>
    </div>
  );
}

export default App;
