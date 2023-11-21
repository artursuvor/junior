import { useState, useEffect } from 'react';
import { Button, Icon } from '../../shared';
import style from './Home.module.css';

function Home() {
  const [userData, setData] = useState([]);

  function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  console.log(userData);
  return (
    <main className={style.home}>
      <h1>User list</h1>
      <div>
        <Button variant={'secondary'} onClick={fetchData}>
          <Icon iconName="download" />
        </Button>
      </div>
    </main>
  );
}
export default Home;
