import styled from 'styled-components';

export const FiltersStyles = styled.div`
    /* margin-inline: 8%; */
    .filters-container {
        display: flex;
        background-color: var(--text-primary);
        /* flex-wrap: wrap; */
        justify-content: space-between;
        /* gap: 2rem; */
        .searchIcon__wrapper {
            color: var(--jet-stream);
            width: 50px;
            cursor: pointer;
            svg {
                padding: 5px;
            }
        }
    }
    .filters{
        flex-wrap: wrap;
        background-color: var(--text-primary);
        display: flex;
    }
    button {
        color: var(--white);
        display: flex;
        padding: 16px;
        align-items: center;
        padding-inline: 64px;
        border: none;
        background: transparent;
        font-size: 16px;
        cursor: pointer;
        &:hover {
            color: var(--jet-stream);
        }
        &.active {
            background-color: var(--jet-stream);
            color: var(--text-primary);
            &:hover {
                color: var(--text-primary);
            }
        }
    }
    @media (max-width: 400px) {
        .filters {
            button {
                font-size: 12px;
                padding: 12px;
            }
        }
    }
`