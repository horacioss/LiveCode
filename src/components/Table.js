const TableUserLocation = ({ data, filter }) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => filter("city")}>City</th>
          <th onClick={() => filter("state")}>State</th>
          <th onClick={() => filter("country")}>Country</th>
          <th onClick={() => filter("postcode")}>Postcode</th>
          <th onClick={() => filter("name")}>Name</th>
          <th onClick={() => filter("number")}>Number</th>
          <th onClick={() => filter("latitude")}>Latitude</th>
          <th onClick={() => filter("longitude")}>Longitude</th>
        </tr>
      </thead>

      <tbody>
        {data.map((el, i) => {
          return (
            <tr key={i}>
              <td>{el.location.city}</td>
              <td>{el.location.state}</td>
              <td>{el.location.country}</td>
              <td>{el.location.postcode}</td>
              <td>{el.location.street.name}</td>
              <td>{el.location.street.number}</td>
              <td>{el.location.coordinates.latitude}</td>
              <td>{el.location.coordinates.longitude}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableUserLocation;
