import "./Chip.css"

export function Chip({
  label = "",
  isActive = false,
  onClick = () => {},
  onClose = () => {}
}) {
  
    const buttonClassName = isActive ? "chip active" : "";

  return (
    <button className="chip" onClick={onClick}>
      <p className="label">{label}</p>
      <span className={buttonClassName} role="button" onClose={onClose}>{`X`}</span>
    </button>
  )
}

export default Chip
