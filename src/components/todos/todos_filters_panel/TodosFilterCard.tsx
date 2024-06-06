import { memo, type ReactElement } from 'react';
import styled, { css } from 'styled-components';

const MainLayout = styled.li<{ $isActive: boolean }>`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.w400};
  color: ${({ theme }) => theme.grey};
  padding: 2px 5px;
  cursor: pointer;
  border-radius: 3px;
  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      border: 1px solid ${theme.light_grey};
    `}
`;

interface Props {
  title: string;
  isActive: boolean;
  onChangeFilter: () => void;
}

const TodosFilterCardElement = ({
  title,
  isActive,
  onChangeFilter,
}: Props): ReactElement => (
  <MainLayout onClick={onChangeFilter} $isActive={isActive}>
    {title}
  </MainLayout>
);
export const TodosFilterCard = memo(TodosFilterCardElement);
