import "./App.css";
import { subscriptions, models } from "./Models";

function App() {
  const key = "abc";
  const { user, userStatus } = subscriptions.useUser(key);
  return (
    <div className="App">
      <header className="App-header">
        <div
          onClick={
            user ? () => models.user.update(key, { data: { name: `${user?.name}+` } }) : undefined
          }
        >
          User "{key}": {user?.name} ({userStatus})
        </div>
      </header>
    </div>
  );
}

export default App;
