import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = { name: "yoshi", age: 30 };
  const link = "https://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}
        <p>{10}</p>
        <p>{"hello, ninjas"}</p>
        <p>{12345}</p>
        <p>{Math.random() * 10}</p>
        {/* <a href="http://www.google.com">Google</a> */}
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
