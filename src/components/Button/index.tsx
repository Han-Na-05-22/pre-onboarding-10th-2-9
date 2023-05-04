import { ButtonProps } from '../../@types';
import ButtonContainer from './style';

const Button = ({ children, className, disabled = false, onClick }: ButtonProps) => {
  return (
    <ButtonContainer className={className} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
