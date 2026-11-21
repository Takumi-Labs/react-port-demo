// function Btn() {
//   const clickHandler = () => console.log("Oh Hey there 👋");

//   return <button onClick={clickHandler}>Click Me</button>;
// }

// export default Btn;

function Btn() {
  const clickHandler = () => console.log("Oh Hey there 👋");

  return (
    <>
      <h2>Button to test </h2>
      <button onMouseOver={clickHandler}>Click Me</button>
    </>
  );
}

export default Btn;
