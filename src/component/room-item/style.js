import styled from "styled-components";

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${props => props.itemWidth};
  padding: 8px;
  flex-shrink: 0;

  .inner{
    width: 100%;
  }

  .cover{
    position:relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;

    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc{
    padding-top: 8px;
    font-size: 12px;
    color: ${props => props.verifyColor};
    font-weight: 800;
    cursor: pointer;
  }

  .name{
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2 ;
    -webkit-box-orient: vertical;
  }

  .price{
    font-weight: 400;
    margin: 8px 0;
  }

  .bottom{
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;

    .count{
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
`