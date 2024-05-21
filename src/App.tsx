import { AnimatePresence } from "framer-motion";
import { createContext, useState } from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Works from "./pages/Works";
import ContactMe from "./pages/ContactMe";

type ThemeContextType = {
  isDarkmode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDarkmode: false,
  toggleTheme: () => "",
});

function App() {
  const [isDarkmode, setIsDarkMode] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkmode);
  };

  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <ContactMe />,
    },
    {
      path: "/works",
      element: <Works />,
    },
    {
      path: "*",
      element: <div>404 page</div>,
    },
  ]);

  if (!element) return null;

  return (
    <ThemeContext.Provider value={{ isDarkmode, toggleTheme }}>
      <AnimatePresence mode="wait" initial={false}>
        <div
          className={isDarkmode ? "dark" : ""}
          key={element.props.match.pathname}
        >
          <span id="top" className="absolute top-0"></span>
          {element}
        </div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export default App;
