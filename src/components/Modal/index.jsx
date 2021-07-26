import { Container, Content } from './style';

function Modal({children}) {
    return(
        <Container>
            <Content>{children}</Content>
        </Container>
    );
}

export default Modal;