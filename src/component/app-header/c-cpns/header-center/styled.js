import styled from "styled-components";

export const CenterWrapper = styled.div`
  .search-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    margin: -1px;
    padding:  0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
    box-shadow: 0 0 6px 0 rgba(0,0,0,.1);

    .text{
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }

    .icon{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
      border-radius: 50%;
    }
  }

`