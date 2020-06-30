import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 100vh;
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
    background-color: #9a9a9a; /* #464646 */
    border-radius: 8px;
    padding: 2px;
    font-size: 0.786rem;
    width: fit-content;
    margin: 1px;
`;

export const StyledItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    border-top: solid;
`;

export const StyledCategoryItemContainer = styled.div`
    border-bottom: 1px solid #aaa;
    padding-bottom: 5px;
`;

export const StyledCategoryItem = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: fit-content;
    max-height: 160px;
`;

export const StyledTagsConteiner = styled.div`
    margin: 5px;
    display: flex;
    flex-wrap: wrap;
`;

export const StyledSearch = styled.input`
    width: 100%;
    height: 30px;
    min-width: 320px;
    border-radius: 8px;
`;
