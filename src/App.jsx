import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import AppRoutes from "./routes/AppRoutes";
import DataProvider from "./context/flightContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DataProvider>
        <div className="min-h-screen bg-gray-50">
          <AppRoutes></AppRoutes>
        </div>
      </DataProvider>
    </>
  );
}

export default App;
