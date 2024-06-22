import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, } from "firebase/auth";
import { auth, db } from "../../../../../server/lib/firebase.js";
import { doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import upload from "../../../../../server/lib/upload.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isSad, setIsSad] = useState(false);
  const [isLooking, setIsLooking] = useState(false);
  const [isPasswordFieldFocused, setIsPasswordFieldFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState({ file: null, url: "" });
  const navigate = useNavigate();

  const handleMouseMove = (event) => {
    if (!isPasswordFieldFocused && !isSad) {
      const eyes = document.getElementsByClassName('eye');
      for (let eye of eyes) {
        const x = eye.getBoundingClientRect().left + 10;
        const y = eye.getBoundingClientRect().top + 10;
        const rad = Math.atan2(event.pageX - x, event.pageY - y);
        const rot = (rad * (180 / Math.PI) * -1) + 180;
        eye.style.transform = `rotate(${rot}deg)`;
      }
    }
  };

  const handleFocusPassword = () => {
    setIsPasswordFieldFocused(true);
    document.getElementById('face').style.transform = 'translateX(-30px)';
    const eyes = document.getElementsByClassName('eye');
    for (let eye of eyes) {
      eye.style.transform = `rotate(-100deg)`;
    }
  };

  const handleFocusOutPassword = (event) => {
    setIsPasswordFieldFocused(false);
    if (event.target.checkValidity()) {
      setIsSad(true);
    } else {
      setIsSad(true);
      const eyes = document.getElementsByClassName('eye');
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




  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    if (!username || !email || !password) {
      toast.warn("Please enter inputs!");
      setLoading(false);
      return;
    }
    if (!avatar.file) {
      toast.warn("Please upload an avatar!");
      setLoading(false);
      return;
    }

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      toast.warn("Select another username");
      setLoading(false);
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      e.target.reset();
      setAvatar({ file: null, url: "" });
      toast.success("Account created! You can login now!");
      navigate("/chat");

    } catch (err) {
      console.log(err);
      toast.error(err.message);
      e.target.reset();
      setAvatar({ file: null, url: "" });
    } finally {
      setLoading(false);
      e.target.reset();
      setAvatar({ file: null, url: "" });
    }
  };

  return (
    <section className='register'>
      <main onMouseMove={handleMouseMove} className='registermain'>
        <div className="form__animation">
          <div id="ball" className={isSad ? 'sad' : ''}>
            <div className="ball">
              <div id="face">
                <div className="ball__eyes">
                  <div className="eye_wrap"><span className="eye"></span></div>
                  <div className="eye_wrap"><span className="eye"></span></div>
                </div>
                <div className="ball__mouth"></div>
              </div>
            </div>
          </div>
          <div className="ball__shadow"></div>
        </div>
        <div className="loginform">
          <div className="logo">
            <img src="https://media.licdn.com/dms/image/D4E0BAQFtoH7AFayJWw/company-logo_200_200/0/1703627777248/techtonic_tribe_logo?e=1721260800&v=beta&t=a_wB0QFrU-XKXYfxBs58Uz8q1nsZ3PArl0hUeCxyQ7Y" alt="" />
            <h1 className="form__title"> Welcome to the Sign up Page </h1>
            <p className="form__description">Hello There Please, enter your information</p>
          </div>

          <form className='loginform' onSubmit={handleRegister} >
            <div className="avatar">
              <img src={avatar.url || "./avatar.png"} alt="profile oicture" id='picture' />
              <label htmlFor="file" id='picture_lable'>
                Upload an image
              </label>
            </div>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleAvatar}
            />

            <label className="form-control__label">username</label>
            <input type="text" className="form-control" placeholder='enter your name here' name="username" />

            <label className="form-control__label">Email</label>
            <input type="email" className="form-control" placeholder='enter your email here' name="email" />

            <label className="form-control__label">Password</label>
            <div className="password-field">
              <input
                type="password"
                className="form-control"
                minLength="4"
                id="password"
                placeholder='create password atleast 6 digit '
                name="password"
                onFocus={handleFocusPassword}
                onBlur={handleFocusOutPassword}
              />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              </svg>
            </div>

            <button
              type="submit"
              className={`form__submit ${isLooking ? 'look_at' : ''}`}
              onMouseOver={handleMouseOverSubmit}
              onMouseOut={handleMouseOutSubmit}
              disabled={loading}
            >
              {loading ? "Loading" : "Sign Up"}
            </button>
          </form>

          <p className="rform__footer">
            Do You have an account?<br /> <br /><Link to="/login"> <button > Log in</button> </Link>
          </p>
        </div>

      </main>
    </section>
  );
};

export default Register;
