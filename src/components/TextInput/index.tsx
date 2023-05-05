import { TextInputProps } from '../../@types';
import TextInputContainer from './style';

const TextInput = ({ className, onChange, onClick, name, value }: TextInputProps) => {
  return (
    <TextInputContainer className={className}>
      <input
        type="text"
        name={name}
        value={value}
        onClick={onClick}
        onChange={onChange}
        placeholder="질환명을 입력해주세요."
      />
    </TextInputContainer>
  );
};

export default TextInput;
