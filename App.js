import react from "react";
import ReactDOM, { createRoot } from "react-dom/client";
const Title = () => {
  <h1 id="title" key="h2">
    Namaste React
  </h1>;
};

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React functional component</h2>
      <h2>This is a h2 Tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
