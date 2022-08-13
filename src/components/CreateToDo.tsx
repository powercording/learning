import { Button, Container, Form, FormGroup, Row } from "reactstrap";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoCategory, toDoState } from "./atoms";
interface IForm {
  // [key: string]: string;
  toDo: string;
  id: string;
  email: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const selectedCategory = useRecoilValue(toDoCategory);
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { list: toDo, id: Date.now(), category: selectedCategory },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  console.log(errors);

  const ERROR = errors.email || errors.id || errors.toDo;

  return (
    <Container className="bg-light border" fluid="lg">
      <Row xl="3">
        <Form inline className="mx-auto" onSubmit={handleSubmit(handleValid)}>
          <FormGroup className="d-flex flex-column">
            <input
              type="text"
              {...register("toDo", {
                required: "Please write a To Do ",
              })}
              placeholder="Write a to do"
              className="form-control"
              draggable="true"
            />
            <input
              type="text"
              {...register("id", {
                required: "Please write a To Do ",
              })}
              placeholder="Write a to do"
              className="form-control"
              draggable="true"
            />
            <input
              type="text"
              {...register("email", {
                required: "Please write a To Do ",
              })}
              placeholder="Write a to do"
              className="form-control"
              draggable="true"
            />
            <span>{ERROR?.message}</span>
          </FormGroup>
          <Button>Add!</Button>
        </Form>
      </Row>
    </Container>
  );
}

export default CreateToDo;
