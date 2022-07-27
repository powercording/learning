import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

// function ToDoList() {
//   const [todo, setTodo] = useState("");

//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodo(value);
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(todo);
//   };
//   console.log(todo);
//   return (
//     <>
//       <Container className="bg-light border" fluid="lg">
//         <Row xl="2">
//           <Form inline onSubmit={onSubmit}>
//             <FormGroup floating>
//               <Input
//                 value={todo}
//                 bsSize="sm"
//                 className="mb-3"
//                 id="exampleEmail"
//                 name="email"
//                 placeholder="Write a To do..."
//                 onChange={onChange}
//               />
//               <Label for="exampleEmail">Email</Label>
//             </FormGroup>
//             <Button>Add!</Button>
//           </Form>
//         </Row>
//       </Container>
//     </>
//   );
// }

function ToDoList() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
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
                  required: "공란입니다",
                })}
                placeholder="FirstName"
              />
              <input
                type="text"
                {...register("lastName")}
                placeholder="LastName"
              />
              <input type="text" {...register("email")} placeholder="E-mail" />
              <input
                type="text"
                {...register("password")}
                placeholder="Password"
              />
              <input
                type="text"
                {...register("CheckingPassword")}
                placeholder="Password Checking"
              />
            </FormGroup>
            <Button>Add!</Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}
export default ToDoList;
