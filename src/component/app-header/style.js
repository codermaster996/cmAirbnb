import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  
  &.fixed{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }

  .content{
    position: relative;
    z-index: 19;
    transition: all 250ms ease;
    background-color: ${props => props.theme.isAlpha ? 'rgb(255,255,255,0)' : 'rgb(255,255,255,1)'};
    border-bottom: 1px solid #eee;
    border-bottom-color: ${props => props.theme.isAlpha ? 'rgb(233,233,233,0)' : 'rgb(233,233,233,1)'};
    padding: 0 24px;

    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgb(0,0,0,.3);
  }
`

export const SearchAreaWrapper = styled.div`
  transition: height 150ms ease;
  height: ${props => props.isSearch ? '100px' : '0'};
`