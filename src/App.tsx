import './App.css';
import { Calculator } from './components/Calculator/Calculator.tsx';
import { createTheme, ThemeProvider, useColorScheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
});

function AppUI() {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }
    return (
        <Box sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            borderRadius: "8px",
        }}>
            <Box display="flex" justifyContent={"flex-end"}>
                <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                    {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
            </Box>
            <Calculator />
        </Box>
    )
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppUI />
        </ThemeProvider>
    )
}

export default App
