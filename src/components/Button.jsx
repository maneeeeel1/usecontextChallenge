import { useTheme } from "../themes/ThemeContext";

function Button () {
    const {toggleTheme} = useTheme();

    return <button onClick={toggleTheme}>Cambiar Tema</button>
}

export default Button;