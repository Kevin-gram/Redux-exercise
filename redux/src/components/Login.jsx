import { useDispatch } from "react-redux";
import { login } from "../features/User";
function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "Nyiringango", age: 24, email: "ntayo bro " })
          );
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
