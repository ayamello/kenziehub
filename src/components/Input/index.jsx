import { Container } from './style';

function Input({label, name, register, error=false, ...rest}) {
    return(
        <Container>
            <span>{!!error && error}</span>
            <label htmlFor={name}>{label}</label>
            <input {...register(name)} {...rest} />
        </Container>
    );
}

export default Input;