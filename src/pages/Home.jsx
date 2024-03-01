import { Link } from "react-router-dom";
import { Button } from "@mui/joy"; // Import Button component from Joy UI
import React from "react";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <Link to="/movie">
          <Button
            style={{
              margin: "10px",
              padding: "15px 30px",
              fontSize: "1.2rem",
              backgroundColor: "#03fca1",
              color: "#FFF",
            }}
          >
            Movie
          </Button>{" "}
          {/* Use custom styling */}
        </Link>
        <Link to="/tv">
          <Button
            style={{
              margin: "10px",
              padding: "15px 30px",
              fontSize: "1.2rem",
              backgroundColor: "#03ecfc",
              color: "#FFF",
            }}
          >
            TV Show
          </Button>{" "}
          {/* Use custom styling */}
        </Link>
      </div>
    </div>
  );
}

export default Home;
