import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "./apollo";
import { LoggedInRoter } from "./routers/logged-in-router";
import { LoggedOutRoter } from "./routers/logged-out-router";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <LoggedInRoter /> : <LoggedOutRoter />;
}

export default App;
