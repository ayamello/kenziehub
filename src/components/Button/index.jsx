import { Container } from './style';

function Button({ onClick, whiteSchema = false, children, ...rest }) {
    return(
        <Container type="button" onClick={onClick} whiteSchema={whiteSchema} {...rest}>
            { children }
        </Container>
    );
}

export default Button;