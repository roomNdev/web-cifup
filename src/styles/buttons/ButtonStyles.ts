import { Link } from 'gatsby';
import styled from 'styled-components';
import { buttonTypes } from '../../constants/buttonTypes';

export const ButtonStyles = styled(Link)`
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: 'Inter Variable', 'sans-serif';
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.6rem;
  background: ${({ variant }) =>
    variant === buttonTypes.primary
      ? 'var(--cobalt-blue)'
      : variant === buttonTypes.secondary
      ? 'var(--white-1)'
      : variant === buttonTypes.more
      ? 'var(--text-1)'
      :'transparent'};
  border: ${({ variant }) =>
    variant === buttonTypes.outline ? '2px solid var(--primary)' : 'none'};
  color: ${({ variant }) =>
    variant === buttonTypes.secondary ? 'var(--black-1)' : 'var(--white)'};
  @media only screen and (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
  }
`;
