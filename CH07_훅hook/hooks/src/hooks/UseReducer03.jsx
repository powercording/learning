import React, { useReducer, useState } from "react";
import Student from "./Student";
const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name: name,
        isHere: "false",
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "delete":
      const newArr = state.students.filter((student) => {
        return student.id != action.payload.id;
      });
      return { count: state.count - 1, students: newArr };
    case "update":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id == action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};
const initialState = {
  count: 1,
  students: [
    {
      id: Date.now(),
      name: "tom",
      isHere: "true",
    },
  ],
};

function UseReducer03() {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="conatainer">
      <div className="alert alert-info">
        <div>
          <i className="fa-solid fa-book"></i>
          &nbsp; 출석부
        </div>
        <hr />
        <p>총 학생 수 : {studentInfo.count}명</p>
        <div>
          <input
            value={name}
            className="form-control"
            placeholder="이름을 입력해 주세요"
            spellCheck="false"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            className="btn btn-info mt-3"
            onClick={() => {
              if (name === "") {
                alert("이름을 입력해주세요");
              } else {
                dispatch({
                  type: "Add",
                  payload: { name },
                });
              }
            }}
          >
            추가하기
          </button>
        </div>
      </div>
      {studentInfo.students.map((student, idx) => (
        <Student
          key={idx}
          id={student.id}
          name={student.name}
          isHere={student.isHere}
          dispatcher={dispatch}
        />
      ))}
    </div>
  );
}

export default UseReducer03;
