import styled from 'styled-components';

export const FiltersStyles = styled.div`
    margin-inline: 15%;
    .filters {
        display: flex;
        background-color: var(--text-primary);
        /* gap: 2rem; */
        button {
            color: var(--white);
            display: flex;
            padding: 16px;
            align-items: center;
            padding-inline: 24px;
            border: none;
            background: transparent;
            font-size: 16px;
            cursor: pointer;
            &:hover {
                color: var(--jet-stream);
            }
            &.active {
                background-color: var(--jet-stream);
                &:hover {
                    color: var(--white);
                }
            }
        }
    }
`