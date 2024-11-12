import "./App.css";
const App = ({ Name, Contact, Email }) => {
  return (
    <div id="disp">
      <h1>Name: {Name}</h1>
      <h2>Contact: {Contact}</h2>
      <h2>Email: {Email}</h2>
    </div>
  );
};

export default App;
