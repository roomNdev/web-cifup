import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)`
  display: inline-block;
  max-width: 84px;
  svg {
    color: #fff;
  }
  @media (max-width: 768px) {
    max-width: 60px;
  }
`;
