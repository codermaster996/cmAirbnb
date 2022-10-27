import styled from "styled-components";

export const TabsWrapper = styled.div`
  .item{
    box-sizing: border-box;
    flex-shrink: 0;
    flex-basis: 120px;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap;
    cursor: pointer;
    box-shadow: 0px 1px 2px rgb(0, 0, 0,.15);

    ${props => props.theme.mixin.boxShadow};

    &:last-child {
      margin-right: 0;
    }

    &.active{
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`