function Comment({ size, color, classes }) {
  return (
    <svg
      fill={color}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      className={classes}
    >
      <path
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
}

export default Comment;
