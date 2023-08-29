import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ComingSoon,
  PageValidationEmail,
  EmailVerifiedPage,
  Delete,
} from "@pages";

function App() {
  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    // Simulate email verification process
    setTimeout(() => {
      setEmailVerified(true);
    }, 3000);
  }, []);

  const verifieCode = "your-verification-code";

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/verified" element={<PageValidationEmail />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
