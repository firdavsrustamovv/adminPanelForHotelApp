import "./index.css";
const App = ({ myimg, textImg }: { myimg: string; textImg: string }) => {
  return (
    <div className="container">
      <div>
        <img src={myimg} alt="BMW" />
        <p>{textImg}</p>
      </div>
    </div>
  );
};

export default App;
