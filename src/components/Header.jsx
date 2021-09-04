import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setSearch } from "../services/actions/searchActions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setSearch(e.target.search.value));
    history.push("/");
  };

  return (
    <header className="py-5 bg-danger">
      <Link to="/" className="navbar-brand">
        <h1 className="h3 text-center text-dark">React Tube</h1>
      </Link>

      <form className="col-10 col-md-6 mx-auto" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="search"
            name="search"
            defaultValue={search}
            className="form-control"
            placeholder="search"
          />
          <button type="submit" className="btn btn-dark">
            Search
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
