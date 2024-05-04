function Menu({ id, size, color }) {
  return (
    <svg
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width={size}
      height={size}
      color={color}
    >
      <path d="M74-184v-136h812v136H74Zm0-228v-136h812v136H74Zm0-229v-136h812v136H74Z" />
    </svg>
  );
}
export default Menu;
