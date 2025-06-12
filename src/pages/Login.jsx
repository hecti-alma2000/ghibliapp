import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navegate = useNavigate();

  const maanejarLogueo = ()=> {
    navegate('/home',{
      replace: true
    });
  }
  return (
    <div className="container ">
      <h1>Pantalla de logueo</h1>
      <button onClick={maanejarLogueo} className="btn btn-primary ">Login</button>
    </div>
  )
}
