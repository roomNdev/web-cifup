import styled from 'styled-components';

export const SearchFieldStyles = styled.label`
  position: relative;
  width: 100%;
  height: 100%;
  input {
    width: 100%;
    font-size: 1.8rem;
    padding: 1rem;
    border-radius: 4px;
    color: var(--text-1);
    font-family: Poppins;
    border: none;
    outline: none;
    &:focus {
      outline: 3px solid var(--primary-light-blue);
    }
  }
  .searchIcon {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-1);
  }
  @media only screen and (max-width: 768px) {
    input {
      font-size: 1.6rem;
      padding: 0.6rem;
      &:focus {
        outline: 2px solid var(--primary-light-blue);
      }
    }
  }
`;
