import "bootstrap/dist/css/bootstrap.css";
import Company from "./RESTAPI/Company";

/**
 * JS 에서 비동기 HTTP 통신
 * ajax , fecth , axios
 */
/**
 * REST API
 * (Representaional State Transfer)
 * 두 컴퓨터 시스템이 인터넷을 통해
 * 정보를 교환하기 위해 사용하는 인터페이스 입니다.
 *
 * HTTP Method : GET POST
 */

function App() {
  return (
    <div className="App">
      <Company />
    </div>
  );
}

export default App;
