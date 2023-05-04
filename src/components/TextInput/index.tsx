// eslint-disable-next-line import/no-extraneous-dependencies
import SVG from 'react-inlinesvg';
import { TextInputProps } from '../../@types';
import TextInputContainer from './style';

const TextInput = ({ className, onChange, name, value }: TextInputProps) => {
  return (
    <TextInputContainer className={className}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder="질환명을 입력해주세요."
      />
      <SVG src="/svg/xmark.svg" className="xmark-btn" />
    </TextInputContainer>
  );
};

export default TextInput;
