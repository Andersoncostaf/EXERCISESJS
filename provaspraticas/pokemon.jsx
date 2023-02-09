
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [list, setList] = useState([]);

  const fetchListData = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => setList(response.data.results));
  }, []);
}

useEffect(() => {
  fetchListData();
}, []);

//    axios
//      .get('https://pokeapi.co/api/v2/pokemon/4')
//      .then((response) => console.log(response));
//  }, []);


return (
  <>
    <h3>Desafio Pokemon 09/02</h3>
    <h1>Consumir api pokemon</h1>
    <hr />
    {list.map((item) => (
      <Pokemon key={item.name} data={item} />
    ))}
  </>
);
}

const Pokemon = ({ data }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    //charmander    
    axios.get(data.url).then((response) => setDetails(response.data));
  }, []);

  if (details === null) {
    return <div>-</div>;
  }

  return (
    <div style={{ display: 'flex' }}>
      <span>
        <b>{details.name}</b> - EXP {details.base_experience}
      </span>
      <img src={details.sprintes.front_default} style={{ width: 30 }} />
    </div>
  );
};

export default App;
