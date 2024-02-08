import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Landing from "./pages/Dashboard/Landing";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
