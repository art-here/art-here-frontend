import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { INotFoundProps } from '../types';

const NotFoundView = ({ text, onGoHome }: INotFoundProps) => {
  return (
    <Container>
      <Typography>{text}</Typography>
      <Button onClick={onGoHome}>메인으로 돌아가기</Button>
    </Container>
  );
};

export default NotFoundView;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
