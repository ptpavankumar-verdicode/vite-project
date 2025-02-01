import "./App.css";
import { Counter } from "./components/counter";
import { DataTable } from "./components/dataTable";
import { PostDataTable } from "./components/postTable";
import { CreatePost } from "./components/createPost";

function App() {
  return (
    <>
      <div className="card">
        <Counter />
        <DataTable />
        <CreatePost />
        <PostDataTable />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
