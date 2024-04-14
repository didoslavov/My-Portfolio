import Home from './Components/Home/Home';
import { ThemeProvider } from './context/ThemeContext';

export default function Main() {
    return (
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    );
}
