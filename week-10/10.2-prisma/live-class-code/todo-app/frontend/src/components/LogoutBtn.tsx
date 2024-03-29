import { useNavigate } from "react-router-dom";
import * as requests from "../requests";
import { useMutation, useQueryClient } from "react-query";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(requests.logout, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("token");
      console.log("Logout success");
      navigate("/");
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });
  return (
    <button className="text-sm md:text-base" onClick={() => mutate()}>
      LOGOUT
    </button>
  );
};

export default LogoutBtn;
