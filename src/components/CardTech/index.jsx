import { Container, Btns } from './style';
import { BsTrashFill } from 'react-icons/bs';

function CardTech({ tech, status, id, eventDelete }) {
    return(
        <Container>
            <div>
                <h5>{tech}</h5>
                <hr />
                <p><span>Nível: </span>{status}</p>
            </div>

            <Btns>
                <button className="BtnUpdate">Atualizar</button>
                <button className="BtnDelete" onClick={() => eventDelete(id)}>
                    <BsTrashFill />
                </button>
            </Btns>  
        </Container>
    );
}

export default CardTech;