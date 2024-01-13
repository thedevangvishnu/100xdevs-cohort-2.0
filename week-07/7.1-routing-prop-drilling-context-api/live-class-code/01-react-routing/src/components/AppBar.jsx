import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
    </div>
  );
};

export default AppBar;
