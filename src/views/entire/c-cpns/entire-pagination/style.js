import styled from "styled-components";

export const PageinationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px;

  .info{
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiButtonBase-root.Mui-selected{
      background-color: #222;
      color: #fff;

      &:hover{
        text-decoration: none !important;
      }
    }

    .MuiButtonBase-root{
      font-weight: 700;
      margin: 0 9px;

      &:hover{
        text-decoration: underline;
      }
    }

    .MuiPaginationItem-icon {
      font-size: 24px;
    }

    .desc{
      color: #222;
      margin-top: 16px;
      font-weight: 400;
    }

  }
`