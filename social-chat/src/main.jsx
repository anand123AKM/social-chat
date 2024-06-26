import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./routes/App";
import CreatePost from "./post";
import Postlist from "./postlist";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Postlist />} />
          <Route path="Create-Post" element={<CreatePost />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
