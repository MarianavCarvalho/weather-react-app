import React from "react";


export default function Form() {
  return (
    <form id="search-form">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a City..."
            className="form-control"
            id="city-input"
            autocomplete="off"
          />
        </div>
        <div className="col-3 button">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );
}
