import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { CartRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <CartRoutes/>
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}