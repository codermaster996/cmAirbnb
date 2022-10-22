import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color:${props => props.theme.text.primaryColor};

  .btns{
    display: flex;
    box-sizing: content-box;
    padding-right: 5px;

    .btn{
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;
      box-sizing: content-box;
      font-weight: 600;

      &:hover{
        background-color: #f5f5f5;
      }
    }

  }

  .profile{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 77px;
    height: 42px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    /** 过渡动画 */
    ${props => props.theme.mixin.boxShadow}

    .icon-left{
      color: #303030;
    }
    
    .icon-right{
      color: #717171;
    }

    .panel{
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgb(0,0,0,.1);
      color: ${props => props.theme.text.secondaryColor};

      .top,.bottom{
        padding: 8px 0;
        
        .register{
          color: ${props => props.theme.text.secondaryColor};
          font-weight: 600;
        }

        .item{
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover{
            background-color: #f7f7f7;
          }
        }
      }

      .top{
        border-bottom: 1px solid #ddd;
      }
    }
  }
`