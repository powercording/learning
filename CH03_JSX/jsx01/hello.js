class Hello extends React.Component {
  render() {
    return <h1>hello, {this.props.nickname}</h1>;
  }
}

ReactDOM.render(
  //컴포넌트 사용
  <Hello nickname="우영우" />,
  document.getElementById("root")
);
