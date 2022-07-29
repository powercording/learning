/**
 * useReducer
 * :state 생성및 관리 도구
 * 
 * 언제사용?
 * :여러개의 하위값을 갖는 복잡한 state를 다뤄야 할때 사용
 * {
 *    teacher : "jone",
 *    student : ["","",""],
 *    count : 3,
 *    location : [{country : 'korea', name: 'a'} ,{},{}]
 * }
 * 
 * 3가지 기본 요소
 * [Reducer]
 * : 컴포넌트 state 변경
 * 
 * [dispatch]
 * : 컴포넌트의 state 변경 요청
 * 
 * [action]
 * : 컴포넌트의 state 변경내용
 * 
 * Dispatch(Action)----->Reducer(State, Action)
 * 
 */