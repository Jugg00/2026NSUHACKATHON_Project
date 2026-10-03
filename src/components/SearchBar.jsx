import Button from "./Button";
import { useState } from "react"; // React's useState lets this component remember values between renders.

function SearchBar ({ onSearch }) {
    const [searchText, setSearchText] = useState(""); // Remembers the last submitted search so we can display it on the page.

    //prevents a page reload and saves the text and sends it to the Search page
    function handleSubmit(event) { 
        const formData = new FormData(event.currentTarget);
        const enteredText = formData.get("search");
        setSearchText(enteredText); //stores the search text in the component's state so it can be displayed on the page.
        onSearch(enteredText); //send the submitted text to the Search page
        
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-3 mt-4">
        <input
            aria-label="Search events"
            type="search"
            name="search"
            placeholder="Search..."
        />
        <Button text="Search" type="submit" />
        {/* Display the last submitted search text */}
        <p>You searched for: {searchText}</p>
        </form>
    );
}

export default SearchBar;