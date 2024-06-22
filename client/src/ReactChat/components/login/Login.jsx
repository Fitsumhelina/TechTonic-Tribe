import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../server/lib/firebase";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [isSad, setIsSad] = useState(false);
  const [isLooking, setIsLooking] = useState(false);
  const [isPasswordFieldFocused, setIsPasswordFieldFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (event) => {
    if (!isPasswordFieldFocused && !isSad) {
      const eyes = document.getElementsByClassName("eye");
      for (let eye of eyes) {
        const x = eye.getBoundingClientRect().left + 10;
        const y = eye.getBoundingClientRect().top + 10;
        const rad = Math.atan2(event.pageX - x, event.pageY - y);
        const rot = rad * (180 / Math.PI) * -1 + 180;
        eye.style.transform = `rotate(${rot}deg)`;
      }
    }
  };

  const handleFocusPassword = () => {
    setIsPasswordFieldFocused(true);
    document.getElementById("face").style.transform = "translateX(30px)";
    const eyes = document.getElementsByClassName("eye");
    for (let eye of eyes) {
      eye.style.transform = `rotate(100deg)`;
    }
  };

  const handleFocusOutPassword = (event) => {
    setIsPasswordFieldFocused(false);
    if (event.target.checkValidity()) {
      setIsSad(true);
    } else {
      setIsSad(true);
      const eyes = document.getElementsByClassName("eye");
      for (let eye of eyes) {
        eye.style.transform = `rotate(215deg)`;
      }
    }
  };

  const handleMouseOverSubmit = () => {
    setIsLooking(true);
  };

  const handleMouseOutSubmit = () => {
    setIsLooking(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/chat"); // Redirect to chat on successful login
      e.target.reset();
    } catch (err) {
      let errorMessage = "An error occurred. Please try again.";
      if (err.code === "auth/wrong-password") {
        errorMessage = "The password is incorrect.";
        toast.error(err.message);
      } else if (err.code === "auth/user-not-found") {
        errorMessage = "User not found. Please register first.";
        toast.error(err.message);
      }

      console.log(err);
      toast.error(err.message);
      setLoading(false);
      e.target.reset();
    }
  };

  return (
    <section className="login">
      <main onMouseMove={handleMouseMove} className="loginmain">
        <div className="loginform">
          <div className="logo">
            <img
              src="https://media.licdn.com/dms/image/D4E0BAQFtoH7AFayJWw/company-logo_200_200/0/1703627777248/techtonic_tribe_logo?e=1721260800&v=beta&t=a_wB0QFrU-XKXYfxBs58Uz8q1nsZ3PArl0hUeCxyQ7Y"
              alt=""
            />
            <h1 className="form__title">Log in to your Account</h1>
            <p className="form__description">
              Welcome back! Please, enter your Email and password
            </p>
          </div>

          <form className="loginform" onSubmit={handleLogin}>
            <label className="form-control__label">Email</label>
            <input
              type="email"
              className="form-control"
              required
              placeholder="youremail@gmail.com"
              name="email"
            />

            <label className="form-control__label">Password</label>
            <div className="password-field">
              <input
                type="password"
                required
                name="password"
                className="form-control"
                minLength="6"
                id="password"
                onFocus={handleFocusPassword}
                onBlur={handleFocusOutPassword}
              />
            </div>
            <button
              type="submit"
              className={`form__submit ${isLooking ? "look_at" : ""}`}
              onMouseOver={handleMouseOverSubmit}
              onMouseOut={handleMouseOutSubmit}
              disabled={loading}
            >
              {loading ? "Loading" : "Log In "}
            </button>
          </form>

          <p className="lform__footer">
            Don't have an account? <br /> <br />{" "}
            <Link to="/register">
              {" "}
              <button> Create an account</button>
            </Link>
          </p>
        </div>

        <div className="form__animation">
          <div id="ball" className={isSad ? "sad" : ""}>
            <div className="ball">
              <div id="face">
                <div className="ball__eyes">
                  <div className="eye_wrap">
                    <span className="eye"></span>
                  </div>
                  <div className="eye_wrap">
                    <span className="eye"></span>
                  </div>
                </div>
                <div className="ball__mouth"></div>
              </div>
            </div>
          </div>
          <div className="ball__shadow"></div>
        </div>
      </main>
    </section>
  );
};

export default Login;