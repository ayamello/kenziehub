import { Container } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Link, useHistory } from 'react-router-dom';
import LogoKH from '../../assets/logo.png';
import ImgCover1 from '../../assets/login1.png';
import ImgCover2 from '../../assets/login2.png';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';

function Login() {
    const history = useHistory();

    const schema = yup.object().shape({
        email: yup.string().required("Campo obrigatório").email("Email inválido"),
        password: yup.string().required("Campo obrigatório")
    });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = ({ email, password }) => {
        api.post("/sessions", 
        {
            email: email,
            password: password,
        })
        .then(response => {
            const { id } = response.data.user;
            const { token } = response.data;
            localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
            console.log(response);
            return history.push(`/profile/${id}`);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <Container>
            <div className="Main">
                <img src={LogoKH} alt="Logo KenzieHub" />
                <h3>Login</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Email"
                        type="email" 
                        id="email"
                        name="email"
                        placeholder="Email" 
                        register={register} 
                    />
                    <Input label="Senha"
                        className="password"
                        type="password" 
                        id="password"
                        name="password"
                        placeholder="Senha" 
                        register={register} 
                    />
                    <Button type="submit">Entrar</Button>
                </form>
                <span>Não tem conta? <Link to="/cadastro">Cadastre-se</Link></span>
            </div>

            <div className="Cover">
                <h1>KenzieHub</h1>

                <div className="Illustrations">
                    <img src={ImgCover1} alt="Ilustração 1" />
                    <img src={ImgCover2} alt="Ilustração 2" />
                </div>
            </div>
        </Container>
    );
}

export default Login;