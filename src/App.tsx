import classNames from "classnames/bind";

import MessageDisplay from "./components/Layouts/MessageDisplay";
import Sidebar from "./components/Layouts/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <MessageDisplay />
    </div>
  );
}

export default App;
