import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AppNavBar } from "../common/AppNavBar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UserRegisterAction } from "../redux/UserRegisterReducer";
import { useRef, useState } from "react";

export function Registration() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userPan, setUserPan] = useState("");

  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateUserNumber = (e) => setUserNumber(e.target.value);
  const updateUserPan = (e) => setUserPan(e.target.value);

  const RegisterUser = (e) => {
    e.preventDefault();

    if (formEL.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      dispatch(
        UserRegisterAction({
          userPan,
          userNumber,
          userName,
          email,
          password,
        })
      );

      // A2: navigate to another page
      // history.push("/list-employee");

      // reset the form
      setUserName("");
      setPassword("");
      setEmail("");
      setUserNumber("");
      setUserPan("");
    }
  };

  // THIS IS REDUX ACTION CALLING

  return (
    <div>
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary">Register</h3>
          <form ref={formEL} class="needs-validation" novalidate>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={userName}
                onChange={(e) => updateUserName(e)}
                minLength="3"
                maxLength="30"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => updateEmail(e)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile"
                value={userNumber}
                onChange={(e) => updateUserNumber(e)}
                pattern="^(?=.*\d)[\d]{10,10}$"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Pan"
                value={userPan}
                onChange={(e) => updateUserPan(e)}
                pattern="^(?=.*\d)[\d]{12,12}$"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => updatePassword(e)}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^*])[a-zA-Z\d!@#%^*]{8,}$"
                required
              />
            </div>

            <div>
              <Button
                variant="outline-dark"
                className="w-100 mb-3"
                onClick={(e) => RegisterUser(e)}
              >
                Register
              </Button>
            </div>
            <div>
              <input
                type="button"
                className="btn btn-outline-dark w-100"
                value="Login"
                onClick={() => history.push("/userlogin")}
              />
            </div>
          </form>
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
}
