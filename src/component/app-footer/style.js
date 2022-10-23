import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #EBEBEB;
  font-weight: 600;

  .wrapper{
    width: 1080px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 48px 24px;
  }

  .serview{
    display: flex;

    .item{
      flex: 1;

      .name{
        font-weight: 800;
        padding-bottom:16px;
      }

      .list{
        color: #767676;

        .iten{
          margin-top: 6px;
          cursor: pointer;

          &:hover{
            text-decoration:underline;
          }
        }
      }
    }
  }

  .statement{
    color: #767676;
    margin-top: 16px;
    padding: 16px;
    border-top: 1px solid rgb(235,235,235);
    text-align: center;
  }
`