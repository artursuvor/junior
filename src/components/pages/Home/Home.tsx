import React, { ReactElement, useState, useEffect } from 'react';
import { Button, Icon, UserList } from '../../shared';
import style from './Home.module.css';

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: string;
  };
  phone: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const Home = (): ReactElement => {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const fetchedData: UserData[] = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={style.home}>
      <h1>User list</h1>
      <div>
        <Button variant={'secondary'}>
          <Icon iconName="download" />
        </Button>
        <UserList data={data} />
      </div>
    </main>
  );
};

export default Home;
