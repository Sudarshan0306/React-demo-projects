import { useEffect, useState } from "react";
import axios from "axios";

const DebouncedSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [debounced, setDebounced] = useState(searchText);
  const [results, setResults] = useState([]);
  let url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounced(searchText);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const filteredData = response.data.filter(
          (user) =>
            user.name.toLowerCase().includes(debounced.toLowerCase()) ||
            user.username.toLowerCase().includes(debounced.toLowerCase()) ||
            user.email.toLowerCase().includes(debounced.toLowerCase())
        );
        setResults(filteredData);
      } catch (error) {
        console.error(error);
        setResults([]);
      }
    };
    if (debounced.trim()) {
      fetchData();
    } else {
      setResults([]); // clear if input is empty
    }
  }, [debounced]);

  return (
    <>
      <div className="container mt-4">
        <h1>Debounced Search</h1>
        <div className="form-group">DebouncedSearch</div>
        <label className="form-label" htmlFor="search">
          Search
        </label>
        <input
          className="form-control"
          id="search"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by name, username, or email"
        />
        <ul className="list-group mt-3">
          {results.length > 0 ? (
            results.map((user) => (
              <li key={user.id} className="list-group-item">
                <strong>{user.name}</strong> ({user.username}) - {user.email}
              </li>
            ))
          ) : debounced ? (
            <li className="list-group-item">No results found.</li>
          ) : null}
        </ul>
      </div>
    </>
  );
};

export default DebouncedSearch;
