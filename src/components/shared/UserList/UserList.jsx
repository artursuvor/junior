import styles from './UserList.module.css';

function UserList(props) {
  const { name, email, phone, address } = props;
  const mapUrl = `https://mapy.cz/turisticka?source=coor&id=${address.geo.lng}%2C${address.geo.lat}&x=${address.geo.lng}&y=${address.geo.lat}&z=16`;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Details</h2>
      <div className={styles.details}>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>
          Location: <a className={styles.link} href={mapUrl} target="_blank" rel="noopener noreferrer">Show on map</a>
        </p>
      </div>
    </div>
  );
}
export default UserList;
