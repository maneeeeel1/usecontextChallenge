import { useTheme } from "./themes/ThemeContext";
import RoutesApp from "../routes/RoutesApp";
import './App.css'; // Archivo de estilos CSS

const App = () => {
  const { theme } = useTheme();

  return (
      <>
        <section className={`App ${theme}`}>
          <RoutesApp />
        </section>

      </> 
  );
};

export default App;
