import React, { createContext, useState } from 'react';
import { themeData } from '../data/themeData';

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    // Estado para el tema y el drawer (cajón)
    const [theme, setTheme] = useState(themeData.theme);
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Función para alternar el estado del drawer
    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Valor que se pasará a través del contexto
    const value = { theme, drawerOpen, setHandleDrawer };

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;