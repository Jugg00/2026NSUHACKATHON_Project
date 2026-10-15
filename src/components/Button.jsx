function Button({ text, onClick, type = "button" }) {
  return (
    <button
      className="px-4 py-2 bg-[var(--color-nsu-green)] text-white rounded-md"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button