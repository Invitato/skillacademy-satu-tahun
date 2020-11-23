import { css } from '@emotion/core';

export const styWrapper = css`
  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
  }

  img {
    max-width: 120px;
  }

  .notes {
    font-size: 12px;
    text-align: left;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  .text-table {
    text-transform: unset;
    font-weight: normal;
    color: var(--font-black-ui);
    font-size: 14px;
    letter-spacing: normal;

    a {
      color: var(--font-blue-ui) !important;
      font-weight: 600 !important;
    }
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    .title-logo {
      font-size: 1.1em;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;
