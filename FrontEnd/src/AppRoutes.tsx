import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout><HomePage></HomePage></Layout>}></Route>
        <Route
          path="/contact"
          element={<h1>welcome to ContactPage</h1>}
        ></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
