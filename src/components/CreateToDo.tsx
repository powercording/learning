import { Button, Container, Form, FormGroup, Row } from "reactstrap";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoCategory, toDoState } from "./atoms";
type IForm = {
  toDo: string;
};

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const selectedCategory = useRecoilValue(toDoCategory);
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { list: toDo, id: Date.now(), category: selectedCategory },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

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
            />
          </FormGroup>
          <Button>Add!</Button>
        </Form>
      </Row>
    </Container>
  );
}

export default CreateToDo;
