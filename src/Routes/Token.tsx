import axios from "axios";
import React, { useEffect, useState } from "react";

function Token() {
  const [data, setData] = useState({});

  useEffect(() => {
    const params = new URL(document.location.href);
    const code = params.searchParams.get("code");
    const grant_type = "authorization_code";
    const client_id = "7c696e3a3c14642e58cb3002d74b5488";

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3000/movieclone_build/token&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => setData(res));
  }, []);
  console.log(data);

  return <div>Token</div>;
}

export default Token;
