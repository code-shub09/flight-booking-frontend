import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
// import SearchResults from "../pages/SearchResults";
// import FareSelection from "../pages/FareSelection";
// import PassengerDetails from "../pages/PassengerDetails";
// import ExtraServices from "../pages/ExtraServices";
// import Payment from "../pages/Payment";
// import Confirmation from "../pages/Confirmation";
import MainLayout from "../layout/MainLayout";
import AllFlight from "../pages/AllFlight";
import ReviewDetails from "../pages/ReviewDetails";
import LoadingAllFlight from "../pages/LoadingAllFlight";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home />} /> {/* Stage 1 */}
          <Route path="/details" element={<AllFlight></AllFlight>}></Route>
          <Route path="/loading" element={<LoadingAllFlight></LoadingAllFlight>}> </Route>
          <Route
            path="/review"
            element={<ReviewDetails></ReviewDetails>}
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
}
