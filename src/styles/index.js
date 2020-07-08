import styled from 'styled-components';

export const StyledWrapper = styled.div`
  min-height: 100vh;
  background: #262626;
  display: flex;
  align-items: center;
`;

export const StyledContainer = styled.div`
    width: 100%;
    min-width: 340px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
`;

export const StyledTag = styled.div`
    background-color: ${props => props.selected
    		? '#bcbcbc'
    		: '#787878'
};
    border-radius: 8px;
    padding: 2px;
    font-size: 0.786rem;
    width: fit-content;
    margin: 1px;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }

    ${props => props.category
		? 'background-color: transparent;text-decoration: underline;'
		: ''}
`;

export const StyledFiltersContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: flex-start;
    align-items: normal;
    width: 100%;
    text-align: left;
    border-top: solid;
`;

export const StyledCategoryContainer = styled.div`
    border-bottom: 1px solid #aaa;
    padding-bottom: 5px;
    margin: 2px;
    width: 220px;
`;

export const StyledCategory = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: fit-content;
    margin: 5px;
`;

export const StyledTagsConteiner = styled.div`
    margin: 5px;
    display: flex;
    flex-wrap: wrap;
`;

export const StyledSearchContainer = styled.div`
    display: flex;
`;

export const StyledSearch = styled.input`
    width: 100%;
    height: 30px;
    min-width: 320px;
    border-radius: 8px;
`;

export const StyledTable = styled.div`
    padding: 1rem;

    table {
      width: 100%;
      text-align: left;
      border-spacing: 0;
      border: 1px solid black;

      tr {
        :hover:not(.header) {
          background-color: #a5a5a5;
          text-decoration: underline;
          cursor: pointer;
        }

        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }

      th,
      td {
        margin: 0;
        padding: 0 0.5rem;
        font-size: 0.875rem;
        border-bottom: 1px solid black;
        border-right: 1px solid black;

        :last-child {
          border-right: 0;
        }
      }
    }
`;
