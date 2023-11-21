import { ReactElement } from 'react';
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

interface UserListProps {
  data: UserData[];
}

const UserList: React.FC<UserListProps> = ({ data }): ReactElement => {
  const userElements = data.map((userData) => (
    <div key={userData.id}>
      <p>Name: {userData.name}</p>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      <p>
        Address: {`${userData.address.street} ${userData.address.suite} ${userData.address.city} ${userData.address.zipcode} ${userData.address.geo}`}
      </p>
      <p>Phone: {userData.phone}</p>
      <p>
        Company: {`${userData.company.name} ${userData.company.catchPhrase} ${userData.company.bs}`}
      </p>
    </div>
  ));

  return <div>{userElements}</div>;
};

UserList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        geo: PropTypes.string.isRequired,
      }).isRequired,
      phone: PropTypes.string.isRequired,
      company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        bs: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export default UserList;
