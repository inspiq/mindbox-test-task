import type { InputHTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  border-radius: 0px;
  outline: none;
  height: 50px;
  font-size: 16px;
  padding-left: 10px;
  font-weight: ${({ theme }) => theme.w400};
  border-bottom: 1px solid ${({ theme }) => theme.light_grey};

  &::placeholder {
    font-style: italic;
    color: ${({ theme }) => theme.light_grey};
    font-weight: ${({ theme }) => theme.w500};
  }
`;

const Checkbox = styled.input`
  display: none;

  &:checked + div {
    border: 1px solid ${({ theme }) => theme.grey};
  }
`;

const ContentLayout = styled.div`
  height: 24px;
  width: 24px;
  border: 1px solid ${({ theme }) => theme.light_grey};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: ReactElement;
}

const UiInputElement = ({ Icon, ...rest }: Props): ReactElement => {
  return (
    <>
      {rest.type === 'text' && <Input {...rest} />}
      {rest.type === 'checkbox' && (
        <label>
          <Checkbox {...rest} />
          <ContentLayout>{rest.checked && Icon}</ContentLayout>
        </label>
      )}
    </>
  );
};

export const UiInput = UiInputElement;
