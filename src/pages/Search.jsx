import SearchBar from "../components/SearchBar";

// 1. Define the function with a Capital Letter
function Search() {
  // 2. Return JSX markup
  return (
    <>
      <h1 className="text-4xl font-bold">Search Page</h1>
      <SearchBar />
    </>
  )
}

// 3. Export the component so it can be used elsewhere
export default Search;