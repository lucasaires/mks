import { createContext, useContext, useState } from "react";

interface ShoppContextData {
    open: boolean;
    toggleOpen: () => void;
}

const ShopListContext = createContext<ShoppContextData>({ open: false, toggleOpen: () => { } } as ShoppContextData);

export function ShopListContextProvider({ children }: { children: React.ReactNode }): JSX.Element {

    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }


    return (
        <ShopListContext.Provider value={{ open, toggleOpen }}>
            {children}
        </ShopListContext.Provider>
    )
}

export function useShopListContext() {
    const context = useContext(ShopListContext);
    return context
}