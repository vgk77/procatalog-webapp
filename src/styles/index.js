import styled, { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
	light: '#fff',
	dark: '#262626',
});

export const textColor = theme('mode', {
	light: '#000',
	dark: '#fff',
});

export const borderColor = theme('mode', {
	light: '#3c3c3c',
	dark: '#3c3c3c',
});

export const hoverColor = theme('mode', {
	light: '#acacac',
	dark: '#3c3c3c'
});

export const GlobalStyle = createGlobalStyle`
  .popup-content {
    overflow-y: auto;
		max-height: 80vh;
		background-color: ${backgroundColor} !important;
    border-color: ${borderColor} !important;
    box-shadow: 2px 4px 8px 1px #0f0f0f !important;
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${backgroundColor};
  }

  ::-webkit-scrollbar-thumb {
    background: ${borderColor};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${hoverColor};
  }
`;

export const Styled = {
	Wrapper: styled.div`
    min-height: 100vh;
    background: ${backgroundColor};
    display: flex;
    align-items: center;
    color: ${textColor};
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
    background-color: ${props => props.selected ? '#cacaca' : '#9a9a9a'};
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
  `,
	CategoryContainer: styled.div`
    border-bottom: 1px solid ${borderColor};
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
      border: 1px solid ${borderColor};

      tr {
        :hover:not(.header) {
          background-color: ${hoverColor};
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
        border-bottom: 1px solid ${borderColor};
        border-right: 1px solid ${borderColor};

        :last-child {
          border-right: 0;
        }
      }
    }
  `,
	SidebarContainer: styled.div`
    flex: 1;
    padding: 1rem;
		overflow-x: hidden;
		overflow-y: auto;
		max-height: 100vh;
		display: flex;
		flex-direction: column;
    align-items: start;
    border-right: 1px solid ${borderColor};
  `,
	FilterCategory: styled.div`
    border-bottom: 1px solid ${borderColor};
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 0 10px 10px;
  `,
	ItemsContainer: styled.div`
    flex: 4;
		overflow-y: auto;
		max-height: 100vh;
  `,
	SearchIconsContainer: styled.div`
    margin: 0px 10px 0px -58px;
		display: flex;
		color: #000;
  `,
	FilterSwitchContainer: styled.div`
      display: flex;
      padding: 10px;
      float: right;
  `,
	ColumnFilterInput: styled.input`
      border-color: transparent;
      background-color: transparent;
      color: ${textColor};
      width: 100%;
      margin: 2px;
      margin-left: -4px;
  `,
	ItemsRoot: styled.div`
    display: ${props => props.display || 'flex'};
    border: 1px solid ${borderColor};
    border-radius: 10px;
  `,
	ToggleThemeContainer: styled.div`
    position: absolute;
    top: 10px;
    right: 0;
  `,
};

export const SwitchContainer = styled.div`
  position: relative;
  margin: 0 5px;
`;

export const SwitchSlider = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${SwitchSlider} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
