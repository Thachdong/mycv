import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getAuth } from "../../redux/actions/authActions";

const Login = ({ auth, getAuth }) => {
  const [key, setKey] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  const authHandle = async (e) => {
    e.preventDefault();
    const result = await getAuth({ key });
    if (result) {
      setError(result);
    } else {
      history.push("/admin");
    }
  };

  return (
    <div className="login flex-box container">
      <form className="flex-box">
        <h3>Enter secret key and access admin page</h3>
        <input
          value={key}
          onChange={(e) => setKey(e.target.value)}
          type="password"
          placeholder="Secret key ..."
        />
        {error && (
          <p style={{ margin: "-0.5rem 0 .5rem 0", color: "red" }}>{error}</p>
        )}
        <button type="text" onClick={authHandle}>
          Enter
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = {
  getAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
