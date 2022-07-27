/**
 * 스테이트란??
 *
 * => 리액트 컴포넌트의 변경 가능한 데이터 (개발자 저의)
 * => 실체: 자바스크립트 갹체 {key : value}
 * => 스테이트가 변경될 경우 컴포넌트가 재 랜더링 된다.
 *
 * 클래스형 컴포넌트: 생성자에서 스테이트 셋팅
 * 함수형 컴포넌트: 리액트 hook을 사용하여 생성
 */
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    //생정자에서 모든 state를 한번에 정의
    this.state = { liked: false };
  }

  render() {
    return <>{this.setState((current) => !current)}</>;
  }
}


/**
 * 생명주기 (Life Cycle)
 * 
 *     Mounting        updating        unmounting
 * (컴포넌트 생성) (컴포넌트 수정)  (컴포넌트 소멸)
 * 
 * componentDidMount(){}
 * componentDidUpdate(){}
 * componentWillUnMount(){}
 */