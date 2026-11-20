function Btn() {
  const clickHandler = () => console.log("Oh Hey there 👋");

  return <button onClick={clickHandler}>Click Me</button>;
}

export default Btn;
