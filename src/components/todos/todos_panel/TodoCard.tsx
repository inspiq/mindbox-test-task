import { memo, type ReactElement } from 'react';
import styled, { css, useTheme } from 'styled-components';

import { UiInput } from 'src/components';
import { CheckMarkIcon } from 'src/icons';
import type { Todo } from 'src/types';

const MainLayout = styled.li<{ $isLastElement: boolean }>`
  padding: 15px 10px;
  ${({ $isLastElement, theme }) =>
    !$isLastElement &&
    css`
      border-bottom: 1px solid ${theme.light_grey};
    `}
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.label<{ $isCompleted: boolean }>`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.w400};
  color: ${({ $isCompleted, theme }) =>
    $isCompleted ? theme.light_grey : theme.text};
  ${({ $isCompleted }) =>
    $isCompleted &&
    css`
      text-decoration: line-through;
    `}
`;

interface Props {
  todo: Todo;
  index: number;
  isLastElement: boolean;
  onToggleCompleteTodo: () => void;
}

const TodoCardElement = ({
  todo,
  index,
  isLastElement,
  onToggleCompleteTodo,
}: Props): ReactElement => {
  const { title, isCompleted } = todo;
  const id = `todo-${index}`;
  const { grey } = useTheme();

  return (
    <MainLayout $isLastElement={isLastElement}>
      <UiInput
        type="checkbox"
        onChange={onToggleCompleteTodo}
        checked={isCompleted}
        id={id}
        Icon={<CheckMarkIcon color={grey} width={12} height={12} />}
        data-testid="checkbox"
      />
      <Title htmlFor={id} $isCompleted={todo.isCompleted}>
        {title}
      </Title>
    </MainLayout>
  );
};

export const TodoCard = memo(TodoCardElement);
