import type { PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';

import { Container } from 'src/components';

const MainLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LayoutElement = ({ children }: PropsWithChildren): ReactElement => (
  <MainLayout>
    <Container>{children}</Container>
  </MainLayout>
);

export const Layout = LayoutElement;
