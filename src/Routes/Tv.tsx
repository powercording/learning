function Tv() {
  const REST_API_KEY = "7c696e3a3c14642e58cb3002d74b5488";
  const REDIRECT_URI = "http://localhost:3000/movieclone_build/token";

  return (
    <div style={{ marginTop: "150px" }}>
      <a
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`}
      >
        dd
      </a>
    </div>
  );
}

export default Tv;
