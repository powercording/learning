import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { dragDropState } from "./atoms";

const Btn = styled.button`
  width: 100%;
  height: 25px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0.5px 1px 0.5px grey;
  margin-top: 5px;
  margin-bottom: 10px;
  background: none;
`;
const In = styled.input`
  background: transparent;
  border-radius: 5px;
  height: 25px;
  border: 1px solid grey;
`;
interface IinputForm {
  toDo: string;
}
interface Prop {
  boardId: string;
}

function TodoInput({ boardId }: Prop) {
  const setState = useSetRecoilState(dragDropState);
  const { register, setValue, handleSubmit } = useForm<IinputForm>();

  const onSubmit = ({ toDo }: IinputForm) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };
    setState((prev) => {
      return {
        ...prev,
        [boardId]: [...prev[boardId], newTodo],
      };
    });
    setValue("toDo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <In
          {...register("toDo", { required: true })}
          type="text"
          placeholder="to do here.."
        />
        <Btn>.</Btn>
      </form>
    </div>
  );
}

export default TodoInput;
