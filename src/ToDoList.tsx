import { useForm } from "react-hook-form";
import { Button, Container, Form, FormGroup, Row } from "reactstrap";
import Message from "./components/Message";
type IFormData = {
  errors: {
    email: {
      message: string;
    };
  };
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  CheckingPassword: string;
};

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <>
      <Container className="bg-light border" fluid="lg">
        <Row xl="3">
          <Form inline className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className="d-flex flex-column">
              <input
                type="text"
                {...register("firstName", {
                  required: "빈칸을 채워주세요",
                  minLength: 3,
                })}
                placeholder="FirstName"
              />
              <input
                type="text"
                {...register("lastName", {
                  required: "빈칸을 채워주세요",
                  minLength: 3,
                })}
                placeholder="LastName"
              />
              <input
                type="text"
                {...register("email", {
                  required: "빈칸을 채워주세요",
                  minLength: 3,
                })}
                placeholder="E-mail"
              />
              <input
                type="text"
                {...register("password", {
                  required: "빈칸을 채워주세요",
                  minLength: 3,
                })}
                placeholder="Password"
              />
              <input
                type="text"
                {...register("CheckingPassword", {
                  required: "빈칸을 채워주세요",
                  minLength: 3,
                })}
                placeholder="Password Checking"
              />
              <span>{errors?.email?.message}</span>
            </FormGroup>
            <Button>Add!</Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}
export default ToDoList;
