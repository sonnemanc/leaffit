import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/plants">
            <h1>This page will display plants!</h1>
          </Route>

          <Route path="/">
            <h1>This will be the home page</h1>
          </Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;