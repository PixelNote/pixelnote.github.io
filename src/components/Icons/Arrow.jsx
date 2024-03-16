function Arrow({ id, color, classes }) {
  return (
    <svg
      id={id}
      width={5}
      height={5}
      viewBox="0 0 16 35"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M7.29289 34.7071C7.68342 35.0976 8.31658 35.0976 8.70711 34.7071L15.0711 28.3431C15.4616 27.9526 15.4616 27.3195 15.0711 26.9289C14.6805 26.5384 14.0474 26.5384 13.6569 26.9289L8 32.5858L2.34315 26.9289C1.95262 26.5384 1.31946 26.5384 0.928932 26.9289C0.538408 27.3195 0.538408 27.9526 0.928932 28.3431L7.29289 34.7071ZM7 0L7 34H9L9 0L7 0Z"
        fill={color}
      />
    </svg>
  );
}

export default Arrow;
