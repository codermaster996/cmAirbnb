import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;

  .filter{
    display: flex;

    .item{
      margin: 0 4px 0 8px;
      padding: 6px 12px;
      border-radius: 4px;
      border: 1px solid rgb(220,224,224);
      cursor: pointer;

      &.active{
        background: #008489;
        border: 1px solid #008489;
        color: #fff;
      }
      
    }

    
  }
`