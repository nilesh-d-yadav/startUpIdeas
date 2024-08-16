import { useState } from "react";
import "./App.css";
import HomeScreen from "./Screens/Home/HomeScreen";
import { ThemeContext } from "./context/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNewScreen from "./Screens/NewIdea/AddNewScreen";
import About from "./Screens/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/new",
    element: <AddNewScreen />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  const [theme, setTheme] = useState("nord");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className="flex flex-col items-center p-4 md:p-10 "
        data-theme={theme}
      >
        <div className="max-w-2xl w-full items-center ">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
