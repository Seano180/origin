import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import History from "./components/History";
import PaymentHistory from "./pages/PaymentHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                background:
                  "linear-gradient(135deg, #fdf9f6, #fefbf4, #ffffff)",
                padding: "1rem",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <History />
                </div>
                
                <h1
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontSize: "2.5rem",
                    margin: 0,
                    textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  Energy Dashboard
                </h1>
              </div>

              <div
                className="App"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "2rem",
                  minHeight: "100vh",
                  background:
                    "linear-gradient(135deg, #fdf9f6, #fefbf4, #ffffff)",
                  color: "#fff",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  textAlign: "center",
                }}
              >
                <Card />
              </div>
            </div>
          }
        />
        <Route path="/PaymentHistory" element={<PaymentHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
