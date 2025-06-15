import { useContext, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../libs/api/note.service";
import LanguageContext from "../../contexts/LanguageContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const {language} = useContext(LanguageContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError(language === 'id' ? 'Kata sandi tidak cocok' : 'Passwords do not match');
      return;
    }

    const response = await register({
      name: name,
      email: email,
      password: password
    });

    const responseBody = await response.json();

    if (response.status === 200) {
      await navigate({
        pathname: '/login'
      })
    } else {
      alert(responseBody.message)
    }
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">{language === 'id' ? 'Daftar Akun' : 'Register Account'}</h2>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <form onSubmit={handleRegister}>
        <label className="block mb-2">
          {language === 'id' ? 'Nama' : 'Name'}
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={name}
            onChange={(event:ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
            required
          />
        </label>
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
            minLength={6}
          />
        </label>
        <label className="block mb-4">
          {language === 'id' ? 'Konfirmasi Kata Sandi' : 'Confirm Password'}
          <input
            type="password"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={confirmPassword}
            onChange={(event:ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value)}
            required
            minLength={6}
          />
        </label>
        <button
          type="submit"
          className="w-full py-2 bg-primary text-white rounded-md hover:bg-quaternary"
        >
          {language === 'id' ? 'Daftar' : 'Register'}
        </button>
      </form>
      <p className="mt-4 text-sm">
        {language === 'id' ? 'Sudah punya akun?' : 'Already have an account?'} <Link to="/login" className="text-primary hover:underline">
          {language === 'id' ? 'Masuk di sini' : 'Login here'}
          </Link>.
      </p>
    </section>
  );
}
export default RegisterPage