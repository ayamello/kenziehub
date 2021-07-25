import { Container } from './style';
import { Link, useHistory } from 'react-router-dom';
import LogoKH from '../../assets/logo.png';
import ImgCover1 from '../../assets/login1.png';
import ImgCover2 from '../../assets/login2.png';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { useState } from 'react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useEffect } from 'react';

function Signup() {
    const [countForm, setCountForm] = useState(1);
    const [isErrored, setIsErrored] = useState(false);

    const history = useHistory();

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup.string()
                     .min(8, "Mínimo 8 caracteres")
                     .required("Campo obrigatório")
                     .matches(/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g, "Senha inválida"),
        confirmPassword: yup.string()
                            .required("Campo obrigatório")
                            .oneOf([yup.ref('password'), null], "As senhas não são iguais"),
        course_module: yup.string().required("Campo obrigatório"),
        bio: yup.string().required("Campo obrigatório"),
        contact: yup.string().required("Campo obrigatório")
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        api.post("/users", {
            name: data.name,
            email: data.email,
            password: data.password,
            contact: data.contact,
            bio: data.bio,
            course_module: data.course_module
        })
        .then(response => {
            console.log(response.data);

            return history.push("/user-profile");
        })
        .catch(err => {
            console.log(err);            
        })
    }

    return (
        <Container>
            <div className="Main">
                <img src={LogoKH} alt="Logo KenzieHub" />
                <h3>Cadastro</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {countForm === 1 &&
                        <>
                            <div>
                                <span>{errors.name?.message}</span>
                                <label htmlFor="name">Nome</label>
                                <input type="text" 
                                       id="name"
                                       placeholder="Nome*"
                                       {...register("name")} 
                                />
                            </div>
                            <div>
                                <span>{errors.email?.message}</span>
                                <label htmlFor="email">Email</label>
                                <input type="text" 
                                       id="email" 
                                       placeholder="Email*" 
                                       {...register("email")}
                                />
                            </div>
                            <div>
                                <span>{errors.password?.message}</span>
                                <label htmlFor="password">Senha</label>
                                <input type="password" 
                                       id="password"
                                       placeholder="Senha*"
                                       {...register("password")} 
                                />
                            </div>
                            <div>
                                <span>{errors.confirmPassword?.message}</span>
                                <label htmlFor="confirmPassword">Confirmar senha</label>
                                <input type="password" 
                                       id="confirmPassword"
                                       placeholder="Confirmar senha*"
                                       {...register("confirmPassword")} 
                                />
                            </div>

                            <button className="BtnNext"
                                onClick={() => setCountForm(countForm + 1)}>
                                Próximo <BsArrowRight />
                            </button>
                        </>
                    }
                    {countForm === 2 &&
                        <>
                            <div>
                                <span>{errors.course_module?.message}</span>
                                <label htmlFor="course_module">Módulo do Curso</label>
                                <select {...register("course_module")} id="course_module">
                                    <option value="q1">Q1</option>
                                    <option value="q2">Q2</option>
                                    <option value="q3">Q3</option>
                                    <option value="q4">Q4</option>
                                </select>
                            </div>

                            <div>
                                <span>{errors.contact?.message}</span>
                                <label htmlFor="contact">LinkedIn</label>
                                <textarea type="text" 
                                          id="contact"
                                          placeholder="Contato*"
                                          {...register("contact")} 
                                />
                            </div>

                            <div>
                                <span>{errors.bio?.message}</span>
                                <label htmlFor="bio">Bio</label>
                                <textarea type="text" 
                                          id="bio"
                                          placeholder="Bio*"
                                          {...register("bio")} 
                                />
                            </div>

                            <button className="BtnBack"
                                onClick={() => setCountForm(countForm - 1)}>
                                <BsArrowLeft /> Anterior 
                            </button>

                            <button type="submit">Finalizar cadastro</button>
                        </>
                    }
                    
                </form>

                <span>Já tem uma conta? <Link to="/login">Entre</Link></span>
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

export default Signup;