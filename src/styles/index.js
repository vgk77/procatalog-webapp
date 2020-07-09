import styled from 'styled-components';

export const Styled = {
	Wrapper: styled.div`
    min-height: 100vh;
    background: #262626;
    display: flex;
    align-items: center;
  `,
	Container: styled.div`
    width: 100%;
    min-width: 340px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
  `,
	Tag: styled.div`
    background-color: ${props => props.selected ? '#bcbcbc' : '#787878'};
    border-radius: 8px;
    padding: 2px;
    font-size: 0.786rem;
    width: fit-content;
    margin: 1px;
    cursor: pointer;

    :hover {
      text-decoration: ${props => props.selected ? 'line-through' : 'underline'};
    }

    ${props => props.category ? 'background-color: transparent;text-decoration: underline;' : ''}
  `,
	FiltersContainer: styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: flex-start;
    align-items: normal;
    width: 100%;
    text-align: left;
    border-top: solid;
  `,
	CategoryContainer: styled.div`
    border-bottom: 1px solid #aaa;
    padding-bottom: 5px;
    margin: 2px;
    width: 220px;
  `,
	Category: styled.div`
    display: flex;
    flex-flow: column wrap;
    width: fit-content;
    margin: 5px;
  `,
	TagsConteiner: styled.div`
    margin: 5px;
    display: flex;
    flex-wrap: wrap;
  `,
	SearchContainer: styled.div`
    display: flex;
  `,
	Search: styled.input`
    width: 100%;
    height: 30px;
    min-width: 320px;
    border-radius: 8px;
  `,
	Table: styled.div`
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
  `,
  SidebarContainer: styled.div`
    flex: 1;
		background: #9046d4;
		overflow-x: hidden;
		overflow-y: auto;
		max-height: 80vh;
		display: flex;
		flex-direction: column;
		align-items: start;
  `,
  FilterCategory: styled.div`
    border-bottom: 1px solid #3c3c3c;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 0 10px 10px;
  `,
  ItemsContainer: styled.div`
    flex: 4;
		background: #4c4c5f;
		overflow-y: auto;
		max-height: 80vh;
  `,
  SearchIconsContainer: styled.div`
    margin: 0px 10px 0px -58px;
		display: flex;
		color: #000;
  `,
};
