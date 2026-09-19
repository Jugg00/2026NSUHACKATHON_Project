// 1. Define the function with a Capital Letter
function Button({ text, onClick }) {
  // 2. Return JSX markup
  return (
    <button 
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
        onClick={onClick}
    >
        {text}
    </button>
  );
}

// 3. Export the component so it can be used elsewhere
export default Button;