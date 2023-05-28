import { useEffect, useState } from "react";
import { Home } from "./pages/home";
import { Thanks } from "./pages/thanks";

function App() {
  const [email, setEmail] = useState("");
  const [page, setPage] = useState("home");
  const [isMobile, setIsMobile] = useState(window.screen.width <= 576);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = (e) => {
    setIsMobile(e.target.screen.width <= 576);
  };

  switch (page) {
    case "thanks":
      return <Thanks email={email} setPage={setPage} isMobile={isMobile} />;
    default:
      return (
        <Home
          email={email}
          setEmail={setEmail}
          changePage={setPage}
          isMobile={isMobile}
        />
      );
  }
}

export default App;
