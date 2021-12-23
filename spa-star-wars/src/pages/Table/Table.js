import { useEffect, useState, Fragment } from "react";
import Card from "../../components/UI/Card";
import People from "../People";

import classes from "./Table.module.css";

const Table = () => {
  const [incomingData, setIncomingData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchPhraseEntered, setSearchPhraseEntered] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isSortAppled, setSortApplied] = useState(false);
  const [sortResults, setSortResults] = useState([]);

  const searchItem = () => {
    if (searchInput !== "") {
      const filteredData = incomingData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setSearchPhraseEntered(true);
      setFilteredResults(filteredData);
    } else {
      setSearchPhraseEntered(false);
      setFilteredResults(incomingData);
    }
  };

  const fetchMovies = () => {
    fetch("https://swapi.dev/api/people")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIncomingData(data.results);
      });
  };

  const sortPeopleHandler = (column, ascending) => {
    let sortedTable = [];

    sortedTable = incomingData.sort((a, b) => {
      if (ascending) {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });

    setSortApplied(true);
    setSortResults(sortedTable);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Card>
      <div className={classes.area}>
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            placeholder="Type name here..."
            className={classes.input}
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </label>
        <button
          className={classes.button + " " + classes.content}
          onClick={searchItem}
        >
          Search
        </button>
      </div>
      <table className={classes.centered}>
        <tbody>
          <tr className={classes.text}>
            <th onClick={() => sortPeopleHandler("name", true)}>Name</th>
            <th onClick={() => sortPeopleHandler("birth_year", true)}>
              Birth Year
            </th>
            <th onClick={() => sortPeopleHandler("height", true)}>Height</th>
            <th onClick={() => sortPeopleHandler("mass", true)}>Mass</th>
          </tr>
          {searchPhraseEntered ? (
            <Fragment>
              {filteredResults.map((people) => {
                return (
                  <People
                    key={people.created}
                    name={people.name}
                    birth={people.birth_year}
                    height={people.height}
                    mass={people.mass}
                  />
                );
              })}
            </Fragment>
          ) : (
            <Fragment>
              {isSortAppled ? (
                <Fragment>
                  <Fragment>
                    {sortResults.map((people) => {
                      return (
                        <People
                          key={people.created}
                          name={people.name}
                          birth={people.birth_year}
                          height={people.height}
                          mass={people.mass}
                        />
                      );
                    })}
                  </Fragment>
                </Fragment>
              ) : (
                <Fragment>
                  {incomingData ? (
                    <Fragment>
                      {incomingData.map((people) => {
                        return (
                          <People
                            key={people.created}
                            name={people.name}
                            birth={people.birth_year}
                            height={people.height}
                            mass={people.mass}
                          />
                        );
                      })}
                    </Fragment>
                  ) : (
                    <div>Loading ...</div>
                  )}
                </Fragment>
              )}
            </Fragment>
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
