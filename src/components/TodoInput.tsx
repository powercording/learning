import { useForm } from "react-hook-form";
import styled from "styled-components";

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

function TodoInput() {
  const { register, setValue, handleSubmit } = useForm<IinputForm>();

  // const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log(inputRef.current?.value);
  // };
  const onSubmit = (data: IinputForm) => {
    console.log(data);
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
