import symbol from "./symbol.jpg";

function Logo(props) {
  const userPic = <img src={symbol} />;
  return userPic;
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Logo />
    </div>
  );
}

export default App;
