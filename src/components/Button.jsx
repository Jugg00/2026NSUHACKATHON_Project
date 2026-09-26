function Button({ text, onClick }) {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded-md"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button