// eslint-disable-next-line react/prop-types
export default function Btn({ label, handleClick }) {
  return (
    <button type="submit" onClick={handleClick}>
      {label}
    </button>
  );
}
