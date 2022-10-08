//JSX  syntax

/**
 *1. 태그는 무조건 닫혀야 한다.
 */
<input type="text" />;

/**
 * 2.두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져야 한다.
 */
class App2 extends React.Component() {
  render() {
    return (
      <div>
        <div>div</div>
        <button>button</button>
      </div>
    );
  }
}

/**
 * 3. JSX 내부에서 변수를 사용하려면 코드를 {} 감싸줘라.
 */
class App3 extends React.Component {
  render() {
    const title = "100분토론";

    return (
      <>
        <h1> {title} 에 오신것을 환영합니다.</h1>
      </>
    );
  }
}

/**
 * 4. {} 자바스크립트 if 조건문 (x);
 * : 삼항연산자로 표현함.
 */
class App4 extends React.Component {
  render() {
    let flag = true;

    return <div>{flag ? <p>안녕하세요</p> : <p>안녕못해요</p>}</div>;
  }
}

/**
 *5. 카멜케이스 표기법
 */
class App5 extends React.Component {
  render() {
    return (
      <div className="app5">
        <h1>내용</h1>
      </div>
    );
  }
}
