import SearchBar from "../components/SearchBar";
import ResultCard from "../components/ResultCard"; // Import the reusable result card.
import { useState } from "react";

function Search() {
  // remembers the subbmitted text so we can filter the results
  const [query, setQuery] = useState("");
  function handleSearch(searchText) {
    setQuery(searchText); //updates the pages search query when the form is submitted
  }

  //Sample results that will turn into cards.
  const results = [
    {
      id: 1,
      title: "Campus Music Night",
      description: "Enjoy live performances by student musicians."
    },
    {
      id: 2,
      title: "Campus Dance Workshop",
      description: "Learn new moves with the student dance club."
    },
    {
      id: 3,
      title: "Campus Art Exhibition",
      description: "Discover the work of talented student artists."
    }
  ];

  //Matches the titles no matter if theres capitalizion or extra spapces at the end
  const filteredResults = results.filter((result) => 
    result.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <>
      <h1 className="text-4xl font-bold">Search Page</h1>
      <SearchBar onSearch={handleSearch} />
      {/* shows feedback in case theres no matches for the search */}
      {filteredResults.length === 0 && (
        <p>No results found. Please try another search.</p>
      )}

      {/* create one card for each result in the list */}
      {filteredResults.map((result) => (
        <ResultCard
          key={result.id}
          title={result.title}
          description={result.description}
        />
      ))}
    </>
  )
}

// 3. Export the component so it can be used elsewhere
export default Search;