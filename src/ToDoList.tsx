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
  const { register, watch } = useForm();

  console.log(watch());

  return (
    <>
      <Container className="bg-light border" fluid="lg">
        <Row xl="2">
          <Form inline>
            <FormGroup floating>
              <Input
                {...register("toDo")}
                placeholder="Write a To do..."
                type="text"
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
