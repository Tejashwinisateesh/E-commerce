import axios from "axios";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Swal = require("sweetalert2");

const Signin = () => {
  const navigate = useNavigate();
  const header = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
    },
  };

  const login = async (e) => {
    e.preventDefault();
    const getData = new FormData(e.target);
    const data = Object.fromEntries(getData.entries());
    const valueData = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/login`,
      data
    );

    if (valueData.data.status) {
      window.localStorage.setItem("jwtToken", valueData.data.jwt);

      navigate("/home");
    }
    // else {
    //   return navigate('/Signin')
    // }
    // else {

    //   Swal.fire({
    //   icon: 'error',
    //   title:valueData.data.message,
    //   showConfirmButton: false,
    //   timer: 1500
    // })
    // }
  };

  return (
    <div className="main">
      <div className="container-fluid align-items-center">
        <section className="section2 row p-0 m-0">
          <div className="col-lg-12">
            <form className="form card p-5" id="form" onSubmit={login}>
              <div className="form-group">
                <h1>Login </h1>
                <div className="username p-4">
                  <label className="form__label" for="firstName">
                    User Name
                  </label>
                  <input
                    className="form__input"
                    type="text"
                    id="firstName"
                    placeholder="Please enter you name"
                    name="email"
                  />
                </div>
                <div className="password p-4">
                  <label className="form__label" for="password">
                    Password{" "}
                  </label>
                  <input
                    className="form__input"
                    type="password"
                    id="password"
                    placeholder="Please enter your Password"
                    name="password"
                  />
                </div>
              </div>
              <div>
                <div className="row lg-12">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <button
                      className="button"
                      onClick={() => {
                        navigate("/register");
                      }}
                    >
                      Register
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <button type="submit" className="button">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Signin;
