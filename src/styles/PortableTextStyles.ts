import styled from 'styled-components';

export default styled.div`
  a {
    color: var(--cobalt-blue);
  }
  li {
  font-family: 'Inter Variable', sans-serif;
  color: var(--grey);
  font-size: 1.6rem;
  line-height: 1.5;
  list-style: inherit !important;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
  }
`;
