import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from './context/AppProvider'
import useDimensions from './hooks/useDimensions'

export const Title = styled.h1`
text-align: center;
`;


function App() {
  const {Grid, Row, Col} = useContext(AppContext)
  const { width, height, size } = useDimensions()

  return (
    <>
    <Title>Responsive grid</Title>
    <Grid
    width="100vw">
      <Row display="flex">
        <Col 
        size={1}
        height="100px"
        backgroundColor="lightblue">col1</Col>
      </Row>
      <Row display= "flex">
        <Col 
        backgroundColor="pink"
        height="100px"
        size={2}
        collapse="xs"
        >col1
        </Col>
        <Col 
        size={1}
        height="100px"
        backgroundColor="lime"
        >col2</Col>
        <Col 
        size={1}
        height="100px"
        backgroundColor="gold"
        >col3</Col>
      </Row>
    </Grid>
    </>
    
  );
}

export default App;
