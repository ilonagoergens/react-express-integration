
function Listing({ data }) {
  return (
    <div>
      <h1>Listing</h1>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            <b>Name:</b> {user.name},<b>Email:</b> {user.email},
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listing;
