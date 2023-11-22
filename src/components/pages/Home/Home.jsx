import { useState } from 'react';
import { Button, Icon, UserList } from '../../shared';
import style from './Home.module.css';

export default function Home() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  function fetchData() {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }

  const userElements = userData.map((user) => {
    return (
      <UserList
        key={user.id}
        name={user.name}
        email={user.email}
        address={user.address}
        phone={user.phone}
      />
    );
  });

  return (
    <main className={style.home}>
      <h1 className={style.title}>User list</h1>
      <div>
        <Button variant={'secondary'} onClick={fetchData}>
          <Icon iconName="download" />
        </Button>
      </div>
      {loading ? <Icon iconName="search" className={style.icon} /> : userElements}
    </main>
  );
}
