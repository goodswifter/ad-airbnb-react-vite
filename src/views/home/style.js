import styled, { css } from 'styled-components'

const ContentWrapper = css`
  width: 1032px;
  margin: 0 auto;
`

export const HomeWrapper = styled.div`
  .content {
    ${ContentWrapper}

    .title {
      margin-top: 30px;
    }
  }
`
