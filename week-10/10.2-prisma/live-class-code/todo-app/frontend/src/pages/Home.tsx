import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn, username } = useUserContext();
  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center text-center px-4 gap-7">
      <h1 className="font-bold">BEST TODO APP</h1>
      <h3 className="text-xl">Create todos instantly</h3>
      {isLoggedIn ? (
        <p className="text-xl font-semibold">Welcome back {username}</p>
      ) : (
        <button onClick={() => navigate("/login")}>LOGIN</button>
      )}
    </div>
  );
};

export default Home;
