/**
 * 컴포넌트
 */

/**
 * 함수형 컴포넌트
 */
function Welcome(prorps) {
  return <h1>hellow , {props.name}</h1>;
}

/**
 * 클래스형 컴포넌트
 */
class Welcome2 extends React.Component {
  render() {
    return <h1>hello, {this.props.name}</h1>;
  }
}
<Welcome name="철수"></Welcome>;
