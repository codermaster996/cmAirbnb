import styled from "styled-components";

export const PicturesWrapper = styled.div`
  > .pictures{
    display: flex;
    height: 600px;
    background-color: #000;

    &:hover{
      .cover{
        opacity: 1 !important;
      }
    }

    .item:hover{
      .cover{
        opacity: 0 !important;
      }
    }
  }

  .left,.right{
    width: 50%;
    height: 100%;

    .item{
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 250ms ease;
      }

      .cover{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: rgb(0,0,0,.3);
        opacity: 0;
        transition: opacity 250ms ease;
      }

      &:hover{
        img{
          transform: scale(1.08);
        }
      }
    }
  }

  .right{
    display: flex;
    flex-wrap: wrap;

    .item{
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      border: 1px solid #000;
    }
  }

`