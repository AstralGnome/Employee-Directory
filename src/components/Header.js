import "./style.css"

function Header(props) {
  return (
    //Jumbotron
    <div className="jumbotron jumbotron-fluid justify-content-center row">
      <div className="container">
        <h1 className="mb-5 text-center display-4">Employee Directory</h1>
        <input
          name="searchInput"
          // value= {props.searchInput}
          type="text"
          className="px-auto mt-4 form-control"
          id="searchInput"
          placeholder="Enter Employee Name"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="">
        <button id="sort-first" className="mt-5 mr-3 ml-auto btn btn-primary" onClick={props.handleButtonSort}>First Name A-Z</button>
        <button id="sort-last" className="mt-5 ml-3 mr-auto btn btn-primary" onClick={props.handleButtonSort}>Last Name A-Z</button>
      </div>
    </div>
  );
}

export default Header;
