const Excuse = ({ text, emoji }) => {
  return (
    <>
      <img src={emoji} alt="excuse emoji"/>
      <h2 style={{ fontSize: 35 }}>{text}</h2>
    </>
  );
};

export default Excuse;
