import { Header } from "./components/header";
import { Main } from "./components/main";
import { Services } from "./components/services";
import "./events/scrollCapture";
import "./styles/global.scss";
export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Services />
    </>
  );
}
