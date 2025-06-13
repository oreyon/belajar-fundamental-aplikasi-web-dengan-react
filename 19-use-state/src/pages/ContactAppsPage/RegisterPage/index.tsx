import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../../libs/api/contact.service';
import RegisterInput from '../../../components/organism/RegisterInput';
    
type RegisterRequest = {
  name: string;
  email: string;
  password: string;
}
     
function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user: RegisterRequest) {
    const {error} = await register(user);
    
    if (!error) {
      await navigate('/');
    }
    
  }
  
  return (
    <section className='register-page'>
      <h2>Gak perlu serius-serius ya isinya ...</h2>
      <RegisterInput register={onRegisterHandler} />
      <p className={"text-center"}>Kembali ke <Link to="/" className={"text-lg font-semibold"}>Masuk</Link></p>
    </section>
  )
}
  
export default RegisterPage;