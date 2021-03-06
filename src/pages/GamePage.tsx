import React from 'react';

import { Header } from '../components/Header/Header';
import { SelectedGame } from '../components/SelectedGame/SelectedGame';

import { Container } from '@mui/material';

export const GamePage: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <SelectedGame />
      </Container>
    </>
  );
};
