import { ThemeProvider } from "styled-components";
import CardList from "./components/CardsList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ShopListContextProvider, useShopListContext } from "./hooks/useOpenCart";

import { Provider } from 'react-redux'
import store from './redux/store'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <ShopListContextProvider>
          <GlobalStyle />
          <Header />
          <CardList />
          <Footer />
        </ShopListContextProvider>
      </Provider>
    </ThemeProvider>
  );
}
