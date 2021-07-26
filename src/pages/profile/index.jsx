import { Container, Content } from './style';
import { BsTrashFill } from 'react-icons/bs';
import { AiOutlineLogout } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { useEffect } from 'react';

function Profile() {
    const { id } = useParams();
    const history = useHistory();
    const [dataUser, setDataUser] = useState({});
    const [viewModalAdd, setViewModalAdd] = useState(false);
    const [techs, setTechs] = useState([]);

    const [token] = useState(
        JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
    );

    const schema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
    });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const handleLogout = () => {
        localStorage.clear();
        return history.push("/");
    }

    const handleModal = () => {
        setViewModalAdd(true);
    }

    const handleCloseModal = () => {
        setViewModalAdd(false);
    }

    const handleDeleteTech = (id) => {
        api.delete(`/users/techs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((_) => {
            setTechs(techs.filter(tech => tech.id !== id));
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const onSubmit = (data) => {
        setViewModalAdd(false);

        api.post("/users/techs", {
            title: data.title,
            status: data.status,
        },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            .then(response => {
                setTechs([...techs, response]);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        api.get(`/users/${id}`, {
        })
            .then(response => {
                setTechs(response.data.techs);
                setDataUser(response.data);
            })
            .catch(err => {
               // console.log(err);
            })
    }, [techs]);



    return (
        <Container>
            {viewModalAdd &&
                <div className="ModalAdd">
                    <div className="ModalContent">
                        <div className="BtnClose">
                            <button onClick={handleCloseModal}><GrFormClose /></button>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <span>Nova tecnologia</span>
                            <label htmlFor="title">Tecnologia</label>
                            <input type="text"
                                placeholder="Tecnologia"
                                {...register("title")}
                            />

                            <label htmlFor="status">Status</label>
                            <select id="status" {...register("status")}>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Mediano">Mediano</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                            <button type="submit">Adicionar</button>
                        </form>
                    </div>
                </div>
            }

            <header>
                <h1>KenzieHub</h1>

                <button onClick={handleLogout}><AiOutlineLogout /></button>
            </header>

            <Content>
                <div className="HeaderProfile">
                    <h3>{ dataUser.name }</h3>
                    <span>{dataUser.bio}</span>
                </div>

                <div className="Techs">
                    <div className="HeaderTechs">
                        <h4>Tecnologias</h4>
                        <button onClick={handleModal}>Add +</button>
                    </div>

                    <div className="ListTechs">
                        {techs.map(tech => 
                            <div key={tech.id} className="CardTech">
                                <div>
                                    <h5>{tech.title}</h5>
                                    <hr />
                                    <p><span>Nível: </span>{tech.status}</p>
                                </div>

                                <div className="Btns">
                                    <button className="BtnUpdate">Atualizar</button>
                                    <button className="BtnDelete" onClick={() => handleDeleteTech(tech.id)}><BsTrashFill /></button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Content>
        </Container>
    )
}

export default Profile;