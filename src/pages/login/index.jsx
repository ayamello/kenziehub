import { Container } from './style';
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
            const { token } = response.data;
            localStorage.setItem("Kenziehub:token", JSON.stringify(token));

            return history.push("/profile");
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
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                               id="email"
                               placeholder="Email" 
                               {...register("email")} 
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Senha</label>
                        <input type="password" 
                               id="password"
                               placeholder="Senha" 
                               {...register("password")} 
                        />
                    </div>

                    <button type="submit">Entrar</button>
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