import styled, { css } from 'styled-components';

const sharedStyle = css`
  line-height: 60px;
  font-weight: 600;
  margin: 0;
`;

interface H1Props {
  type: 'H1' | 'H2';
}

interface TitleProps {
  text: string;
}

const H1 = styled.h1`
  ${sharedStyle}
  font-size: 32px;
`;

const H2 = styled.h2`
  font-size: 16px;
  ${sharedStyle}
`;

type Props = H1Props & TitleProps;

export function Title(props: Props) {
  const { type, text } = props;
  switch (type) {
    case 'H1':
      return <H1>{text}</H1>;
    default:
      return <H2>{text}</H2>;
  }
}
