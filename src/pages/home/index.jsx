import { Container } from "./style";
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import LogoKH from '../../assets/logo.png';
import ImgCover1 from '../../assets/home1.png';
import ImgCover2 from '../../assets/home2.png';

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

                <Button onClick={() => handleButton("/login")}>Login</Button>
                <Button whiteSchema={true} onClick={() => handleButton("/cadastro")}>Cadastro</Button>
            </div>
        </Container>
    )
}

export default Home;