import {  useCallback, useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LanguageContext from "../../contexts/LanguageContext";

// interface PropTypes {
//   login: (email: string, password: string) => Promise<void>;
// }

const LoginPage = () => {
  const { authedUser, login} = useAuth();
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await login(email, password);
      await navigate('/notes'); 
    } catch (err) {
      setError('Login failed. Please check your email and password.');
    }
  };

  useEffect(() => {
    if (authedUser) {
      navigate('/notes');
    }
  }, [authedUser, navigate]);
  return (
    <section className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">
        {language === 'id' ? 'Masuk' : 'Login'}
      </h2>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          {language === 'id' ? 'Email' : 'Email'}
          <input
            type="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(event:ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            required
          />
        </label>
        <label className="block mb-4">
          {language === 'id' ? 'Kata Sandi' : 'Password'}
          <input
            type="password"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(event:ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="w-full py-2 bg-primary text-white rounded-md hover:bg-quaternary"
        >
          {language === 'id' ? 'Masuk' : 'Login'}
        </button>
      </form>
      <p className="mt-4 text-sm">
        {
          language === 'id' ? 'Belum punya akun?' : 'Don\'t have an account?'
        } <Link to="/register" className="text-primary hover:underline">
          {language === 'id' ? 'Daftar sekarang' : 'Register now'}
          </Link>.
      </p>
    </section>
  )
}
export default LoginPage