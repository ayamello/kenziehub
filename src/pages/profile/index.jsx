import { Container, Content } from './style';
import CardTech from '../../components/CardTech';
import Modal from '../../components/Modal';
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
    const [dataUser, setDataUser] = useState({}); // armazenar dados do usuário
    const [viewModalAdd, setViewModalAdd] = useState(false); // modal de adicionar tech
    const [viewModalUpdate, setViewModalUpdate] = useState(false); // modal de atualizar tech
    const [techs, setTechs] = useState([]); // armazenar techs do usuário
    const [idTech, setIdTech] = useState("");
    const [textInput, setTextInput] = useState("");

    const [token] = useState(
        JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
    );

    const schema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
    });

    const { register, handleSubmit, reset } = useForm({
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
        setViewModalUpdate(false);
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
            .catch(err => {
                console.log(err);
            })
    }

    const handleOpenUpdateModal = (id) => {
        setViewModalUpdate(true);
        setIdTech(id);
    }

    const handleUpdateTech = (textInput) => {
        setViewModalUpdate(false);
        reset();

        api.put(`/users/techs/${idTech}`, {
            status: textInput,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleAddTech = (data) => {
        setViewModalAdd(false);
        reset();

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

    // armazenar dados do usuário
    useEffect(() => {
        api.get(`/users/${id}`, {
        })
            .then(response => {
                setTechs(response.data.techs);
                setDataUser(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [techs, id]);

    return (
        <Container>
            {viewModalAdd &&
                <Modal>
                    <div className="BtnClose">
                        <button onClick={handleCloseModal}><GrFormClose /></button>
                    </div>

                    <form onSubmit={handleSubmit(handleAddTech)}>
                        <span>Nova tecnologia</span>
                        <label htmlFor="title">Tecnologia</label>
                        <input type="text"
                            placeholder="Tecnologia"
                            {...register("title")}
                        />

                        <label htmlFor="status">Status</label>
                        <select id="status" {...register("status")}>
                            <option value="">Nível</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Mediano">Mediano</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <button type="submit">Adicionar</button>
                    </form>
                </Modal>
            }

            {viewModalUpdate &&
                <Modal>
                    <div className="BtnClose">
                        <button onClick={handleCloseModal}><GrFormClose /></button>
                    </div>

                    <form>
                        <span>Atualizar status</span>

                        <label htmlFor="status">Status</label>
                        <select id="status" onChange={e => setTextInput(e.target.value)}>
                            <option value="">Nível</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Mediano">Mediano</option>
                            <option value="Avançado">Avançado</option>
                        </select>

                        <button type="submit" onClick={() => handleUpdateTech(textInput)}>Atualizar</button>
                    </form>
                </Modal>                
            }

            <header>
                <h1>KenzieHub</h1>

                <button onClick={handleLogout}><AiOutlineLogout /></button>
            </header>

            <Content>
                <div className="HeaderProfile">
                    <h3>{dataUser.name}</h3>
                    <span>{dataUser.bio}</span>
                </div>

                <div className="Techs">
                    <div className="HeaderTechs">
                        <h4>Tecnologias</h4>
                        <button onClick={handleModal}>Add +</button>
                    </div>

                    <div className="ListTechs">
                        {techs.map(tech =>
                            <CardTech key={tech.id}
                                tech={tech.title}
                                status={tech.status}
                                id={tech.id}
                                eventDelete={handleDeleteTech}
                                eventUpdate={handleOpenUpdateModal}
                            />
                        )}
                    </div>
                </div>
            </Content>
        </Container>
    )
}

export default Profile;