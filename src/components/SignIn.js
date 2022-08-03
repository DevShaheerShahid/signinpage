import React from "react";

const SignIn = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  // const changePlace = React.useRef(null);

  // const location =()=>{

  // }

  return (
    <>
      <div className="d-flex con justify-content-center">
        <div className="wrapper">
          <div className=" text-center ">
            <img
              className="bootstrapLogo "
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              alt="Bootstrap Logo"
            />
            <h3 className="mt-3">Sign In Page</h3>
            <p>
              Build a sign in page to display your command on bootstrap:
              <span className="text-danger"> text with color red </span>
              psedo-element
            </p>
            <a href="https://www.google.com/" target="_blank">
              <p className="text-primary">
                Works in latest chrome ,Safari and Firefox. This is a clickable
                sectionthat will take us to a new page
              </p>
            </a>
          </div>

          <form>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setUserName(e.target.value)}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />

                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  console.log(`UserName: ${userName}`);
                  console.log(`Password: ${password}`);
                }}
              >
                Submit
              </button>
            </div>

            <p className="text-center mt-4">&#169;2017-2018</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
