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
      object-fit: cover;
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

  // 轮播样式
  .slider{
    position: relative;
    cursor: pointer;

    &:hover{
      .control{
        display: flex;
      }
    }

    .control{
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      color: #fff;

      .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left ,transparent 0%,rgba(0,0,0,.25) 100%);

        &.right{
          background: linear-gradient(to right ,transparent 0%,rgba(0,0,0,.25) 100%);
        }
      }
    }

    .indicaor{
      z-index: 9px;
      position: absolute;
      bottom: 8px;
      right: 0;
      left: 0;
      width: 40%;
      margin: 0 auto;

      .item{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.29%;

        .dot{
          width: 6px;
          height: 6px;
          background: #ffffffcc;
          border-radius: 50%;
          font-weight: 800;

          &.active{
            width: 8px;
            height: 8px;
            background: #fff;
          }
        }
      }
    }

  }
`