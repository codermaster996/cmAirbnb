import styled from "styled-components";

export const PicturesWrapper = styled.div`
  position: relative;

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

  .show-btn{
    position: absolute;
    z-index: 999;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    font-weight: 800;
    padding: 6px 15px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 6px 0 rgba(0,0,0,.1);
    cursor: pointer;
  }
  

`