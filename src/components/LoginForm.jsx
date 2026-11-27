import useForm from '../hooks/formHooks';
import {useUserContext} from '../hooks/contextHooks';

const LoginForm = () => {
  const initValues = {
    username: '',
    password: '',
  };
  const {handleLogin} = useUserContext();

  const doLogin = async (formData) => {
    try {
      handleLogin(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
  );

  // console.log(inputs);
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            minLength={3}
            maxLength={30}
            onChange={handleInputChange}
            autoComplete="username"
            required
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            minLength={8}
            maxLength={20}
            onChange={handleInputChange}
            autoComplete="current-password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
