import CommentList from "./CommentList";

const styles = {
  bgImg: {
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2022/05/08/20/39/sheep-7182968_960_720.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "none",
    height: "100vh",
    textAlign: "center",
  },
};

function App() {
  return (
    <div style={styles.bgImg}>
      <CommentList />
    </div>
  );
}

export default App;
