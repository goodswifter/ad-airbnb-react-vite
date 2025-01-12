import { styled } from 'styled-components'

export const BrowserWrapper = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background: #212121;
  color: #fff;

  .top {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 86px;
    padding-right: 25px;

    .close-btn {
      cursor: pointer;
    }
  }

  .center {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;

    .control {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .btn {
        display: flex;
        align-items: center;
        width: 83px;
        cursor: pointer;
      }
    }

    .pic-wrapper {
      position: relative;
      width: 100%;
      max-width: 105vh;
      height: 100%;

      .pic-enter {
        transform: translateX(${props => (props.$isNext ? '100%' : '-100%')});
        opacity: 0;
      }
      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 250ms ease;
      }
      .pic-exit {
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
        transition: all 250ms ease;
      }

      img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        object-fit: cover;
      }
    }
  }

  .bottom {
    position: relative;
    height: 100px;
    margin-top: 10px;
    font-size: 14px;

    .inner {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 10px;
      max-width: 105vh;
      margin: 0 auto;

      .desc {
        display: flex;
        justify-content: space-between;
      }

      .left {
        padding: 5px 0;
      }

      .right {
        cursor: pointer;
        padding: 5px 0;

        .title {
          margin-right: 4px;
        }

        .arrow-enter {
          transform: rotate(180deg);
        }

        .arrow-enter-active {
          transform: rotate(360deg);
          transition: transform 300ms ease-in;
        }

        .arrow-enter-done {
          transform: rotate(360deg);
        }

        .arrow-exit {
          transform: rotate(0deg);
        }

        .arrow-exit-active {
          transform: rotate(180deg);
          transition: all 300ms ease-in;
        }

        .arrow-exit-done {
          transform: rotate(180deg);
        }
      }

      .indicator-wrapper {
        width: 100%;
        height: ${props => (props.$isShowIndicator ? '67px' : '0px')};
        margin-top: 4px;
        overflow: hidden;
        transition: all 250ms ease;

        .indicator-list {
          margin: 0;

          .item {
            height: 67px;
            margin-right: 15px;

            img {
              height: 100px;
              object-fit: cover;
              opacity: 0.5;
              cursor: pointer;
            }

            &.active img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`
