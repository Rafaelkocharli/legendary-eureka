const ProgressBar = ({ current, maximum }: any) => {
  const currentBarStyle = {
    width: `${(current / maximum) * 100}%`,
    backgroundColor: "rgb(0, 115, 255)",
    height: 15,
    padding: 0,
    transition: "0.5s",
    borderRadius: 50,
    display: "block",
  };
  const maximumBarStyle = {
    backgroundColor: "lightgray",
    height: 15,
    padding: 0,
    margin: "0 50px",
    borderRadius: 50,
    display: "block",
  };
  return (
    <div style={maximumBarStyle}>
      <div style={currentBarStyle}></div>
    </div>
  );
};

export default ProgressBar;
