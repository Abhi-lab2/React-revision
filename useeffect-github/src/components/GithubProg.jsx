import axios from "axios";
import { useState, useEffect } from "react";

function Github() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState(""); //per page query
  const [data, setData] = useState([]); //to store data per page in empty array
  const [page, setPage] = useState(1); //initial page 1 will be displayed

  useEffect(() => {
    getGithubUsers(query, page);

    console.log(2);
  }, [query, page]);  //without this query the correct images wont be printed on thae DOM.

  const getGithubUsers = (q = "masai", page = 1) => {
    return (
      axios("https://api.github.com/search/users", {
        method: "GET",
        params: {
          q, //for the query to be searched
          per_page: 10, //pages of items peer page
          page, //page
        },
      })
        .then((res) => {
          setLoading(true);
          // setLoading(false);
          setData(res.data); //this prints the data in that has been fetched
          setError(false);
        })
        //   for the error
        .catch((err) => {
          setLoading(false);
          setError(true);
          console.log(err);
        })
    );
  };


  const handleClick = (query) => setQuery(query);
  // const handlePageChange = page => setPage(page)

  console.log(data);
  console.log(query);
  return (
    <div>
      <h2>Github Users</h2>
      {loading && <div>...loading</div>}
      {error && <div>...error</div>}
      <SearchBox handleClick={handleClick} />
      {data?.items?.map((item) => (
        <GithubCard key={item.id} {...item} />
      ))}
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button onClick={() => setPage(page + 1)}>NEXT</button>
      </div>
    </div>
  );
}

const SearchBox = ({ handleClick }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleClick(text)}> SEARCH </button>
    </div>
  );
};

const GithubCard = ({ avatar_url, login }) => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <img src={avatar_url} width="50px" alt={login} />
      <div>{login}</div>
    </div>
  );
};

export default Github;
