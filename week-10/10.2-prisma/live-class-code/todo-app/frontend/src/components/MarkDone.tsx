import { FaCheck } from "react-icons/fa6";
import { useMutation } from "react-query";

import { TodoType } from "../contexts/TodosContext";
import { ModifiedTodoType } from "../../../backend/src/model/todo.model";

import * as requests from "../requests";

const MarkDone = () => {
  return <FaCheck className="text-gray-100" />;
};

export default MarkDone;
