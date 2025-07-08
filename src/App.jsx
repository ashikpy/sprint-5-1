import "./App.css";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import Filters from "./components/Filters";

function App() {
  return (
    <main className="container mx-auto">
      <Navbar />
      <div className="flex mt-10 gap-10">
        <UserList />
        <Filters />
      </div>
    </main>
  );
}

export default App;
