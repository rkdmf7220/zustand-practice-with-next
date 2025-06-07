export default function Square({ value, onSquareClick }) {
  const squareStyle = {
    display: "inline-block",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    backgroundColor: "#fff",
    border: "1px solid #999",
    outline: 0,
    borderRadius: 0,
    fontSize: '1rem',
    fontWeight: "bold",
  }

  return (
      <button style={squareStyle} onClick={onSquareClick}>{value}</button>
  )
}