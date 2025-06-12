    
    import PropTypes from 'prop-types';
    import { Link } from 'react-router-dom';
import LoginInput from '../../../components/organism/LoginInput';
import { login } from '../../../libs/api/contact.service';
    
    
    type PropTypes = {
      loginSuccess: (data: { accessToken: string }) => void;
    }

    function LoginPage(props: PropTypes) {
      const { loginSuccess } = props;

      async function onLogin({ email, password }: { email: string; password: string }) {
        const { error, data } = await login({ email, password });
     
        if (!error) {
          loginSuccess(data);
        }
      }
     
      return (
        <section className='login-page'>
          <h2>Silakan masuk untuk melanjutkan ...</h2>
          <LoginInput login={onLogin} />
          <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
        </section>
      );
    }
     
    LoginPage.propTypes = {
      loginSuccess: PropTypes.func.isRequired,
    }
     
    export default LoginPage;