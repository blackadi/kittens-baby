import { useEffect, useState } from "react";
import CardList from "../components/CardList.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Scroll from "../components/Scroll.jsx";
import { kittens } from "../kittens.js";

function App() {
  const [kittens, setKittens] = useState([]);
  const [searchfield, setSearchField] = useState("");

  useEffect(() => {
    async function fetchData() {
      const respose = await fetch("https://jsonplaceholder.typicode.com/users");
      const kittens = await respose.json();
      setKittens(kittens);
    }
    fetchData();
  }, []); // the second args is any empty list since we need the useEffect to run only once, which act as componentDidMount() for the Legacy class components

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredKittens = kittens.filter((kitten) => {
    return kitten.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !kittens.length ? (
    <div className="flex items-center justify-center pt5">
      <h1>Loading</h1>
      <div className="waving-loader flex items-center">
        <div className="dot bg-dark-gray br-100 h1 w1 mh1"></div>
        <div className="dot bg-dark-gray br-100 h1 w1 mh1"></div>
        <div className="dot bg-dark-gray br-100 h1 w1 mh1"></div>
      </div>
    </div>
  ) : (
    <div>
      <h1 className="f2">KittenFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList kittens={filteredKittens} />
      </Scroll>
    </div>
  );
}

export default App;
