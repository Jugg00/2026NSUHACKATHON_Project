function Button({ text, onClick, type = "button" }) {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded-md"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button