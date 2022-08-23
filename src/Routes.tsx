import * as React from "react";
import { Route, Routes } from "react-router-dom";
const App = React.lazy(() => import("./App"));
const Details = React.lazy(() => import("./Details"));

function Router() {
  return (
    <React.Suspense fallback="...loading">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:color/:type/:addon" element={<Details />} />
      </Routes>
    </React.Suspense>
  );
}
export default Router;
