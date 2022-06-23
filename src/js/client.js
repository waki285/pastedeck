import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import * as ReactBootstrap from "react-bootstrap";

class Layout extends React.Component {
  render() {
    return (
      <div className="bg-dark text-light" id="wrapper">
        <Header />
        <h1>どわーーーー；かなC；</h1>
        <h1>わーー</h1>
        <Footer />
      </div>
    );
  }
}

const app = document.getElementById('app');
const root = createRoot(app);
root.render(<Layout />);