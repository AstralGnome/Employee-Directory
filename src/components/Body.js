function Body({ users }) {
  return (
    //card
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        {/* Can probably use the uuid for sorting or whatever */}
        {users.map((user) => (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={user.picture.large} alt="Professional Headshot" />
                  </td>
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

//Insert Search Bar

//List Item

export default Body;
