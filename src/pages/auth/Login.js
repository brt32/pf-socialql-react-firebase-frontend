import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, googleAuthProvider } from "../../firebase";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import AuthForm from "../../components/forms/AuthForm";

const USER_CREATE = gql`
  mutation userCreate {
    userCreate {
      username
      email
    }
  }
`;

const Login = () => {
  const { dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  const [userCreate] = useMutation(USER_CREATE);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then(async (result) => {
          const { user } = result;
          const idTokenResult = await user.getIdTokenResult();

          dispatch({
            type: "LOGGED_IN_USER",
            payload: { email: user.email, token: idTokenResult.token },
          });
          userCreate();
          history.push("/");
        });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const googleLogin = () => {
    auth.signInWithPopup(googleAuthProvider).then(async (result) => {
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      dispatch({
        type: "LOGGED_IN_USER",
        payload: { email: user.email, token: idTokenResult.token },
      });
      userCreate();
      history.push("/");
    });
  };

  return (
    <div className="container p-5">
      {loading ? <h4 className="text-danger">Loading</h4> : <h4>Login</h4>}
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loading={loading}
        setLoading={setLoading}
        handleSubmit={handleSubmit}
        showPasswordInput="true"
      />
      <button className="btn btn-raised btn-danger mt-3" onClick={googleLogin}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
