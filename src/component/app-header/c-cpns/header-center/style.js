import styled from "styled-components";

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;
  

  .search-bar{
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    margin: -1px;
    padding:  0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
    box-shadow: 0 0 6px 0 rgba(0,0,0,.1);

    .text{
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }

    .icon{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
      border-radius: 50%;
    }
  }

  .search-detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform opacity;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .detail-enter{
    transform: scale(0.35,0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active{
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .detail-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .detail-exit-active{
    transform: scale(0.35,0.727273) translateY(-58px);
    opacity: 0;
    transition: all 250ms ease;
  }

  .bar-enter{
    transform: scale(2.85714,1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active{
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-exit{
    opacity: 0;
  }
`