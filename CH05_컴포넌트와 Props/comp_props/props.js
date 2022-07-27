/**
 * 컴포넌트 입력 (props)
 * :속성
 * 읽기전용
 *
 * 자바스크립트 객체 { }
 */

function App(props) {
  return <Profile mame={"tom"} intro={"안녕"} hit={100} />;
}

function Profile(props) {
  return (
    <>
      <h2>{props.name}의 블로그 입니다. </h2>
      <p>{props.intro}</p>
      <hr />
      <span>{props.hit}</span>
    </>
  );
}
