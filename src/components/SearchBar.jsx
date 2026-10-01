function SearchBar() {
    return (
        <form>
        <input
            type="search"
            name="search"
            placeholder="Search..."
        />
        <button type="submit">
            Search
        </button>
        </form>
    );
}

export default SearchBar;