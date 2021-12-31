import { useEffect, useState } from 'react';
import axios from 'axios';
import TableCoins from './components/TableCoins';

import './App.css';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");

    console.log(res.data)
    setCoins(res.data)
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div className="container">
      <div className="row">
        <input type='search' placeholder="Search Coin" className="form-control border-0 text-light bg-dark mt-5 text-center" onChange={e => setSearch(e.target.value)} />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
