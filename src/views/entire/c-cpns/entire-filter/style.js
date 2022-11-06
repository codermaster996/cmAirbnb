import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 80px;
  z-index: 9;
  align-items: center;
  height: 48px;
  display: flex;
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