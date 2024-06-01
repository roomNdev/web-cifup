import styled from 'styled-components';

export const PageSpaceStyles = styled.div`
  padding-top: ${(props) => props.top === undefined ? 100 :props.top }px;
  padding-bottom: ${(props) => props.bottom || 100}px;
`;
