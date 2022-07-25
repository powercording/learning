function Book({ title, page }) {
  let info = {
    color: "black",
    backgroundColor: "whitesmoke",
    display: "flex",
    justifyContent: "center",
    gap: "50px",
  };

  let img = {
    width: "150px",
    borderRadius: "75px",
  };

  return (
    <div style={info}>
      <img
        src="https://post-phinf.pstatic.net/MjAxODEwMjJfNjkg/MDAxNTQwMTk2ODY5ODA1.oOn9RdS4_7gC5_xIcIeNQ9thrd09FzFnSC_cNutk0XEg.r90DRdfbCz5qoJw7qt2DLuJ8ZBW-VsJtp1JMXFURDbUg.PNG/image.png?type=w1200"
        style={img}
      />
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "tomato",
          }}
        >
          title : {title}입니다.
        </h1>
        <h5>총 {page}장 입니다</h5>
      </div>
    </div>
  );
}

export default Book;
