import { Container } from "./style";
import { Link, useHistory } from 'react-router-dom';
import LogoKH from '../../assets/logo.png';
import ImgCover1 from '../../assets/home1.png';
import ImgCover2 from '../../assets/home2.png'
import { BsArrowRight } from "react-icons/bs";

function Home() {
    const history = useHistory();

    const handleButton = (path) => {
        history.push(path);
    }

    return(
        <Container>
            <div className="Cover">
                <h1>KenzieHub</h1>

                <div className="Illustrations">
                    <img src={ImgCover2} alt="Ilustração 1" />
                    <img src={ImgCover1} alt="Ilustração 2" />
                </div>
            </div>
            
            <div className="Main">
                <img src={LogoKH} alt="Logo KenzieHub" />
                <span>Portfólio dos alunos da Kenzie Academy Brasil</span>

                <button onClick={() => handleButton("/login")}>Login</button>
                <button onClick={() => handleButton("/cadastro")}>Cadastro</button>
                <Link to="/">Ver Portfólios <BsArrowRight /></Link>
            </div>
        </Container>
    )
}

export default Home;