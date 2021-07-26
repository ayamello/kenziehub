import { Container } from './style';

function Input({label, name, register, error, ...rest}) {
    return(
        <Container>
            <label htmlFor={name}>{label}</label>
            <input {...register(name)} {...rest} />
        </Container>
    );
}

export default Input;