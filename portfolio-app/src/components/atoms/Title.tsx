import styled from 'styled-components';

interface H1Props {
  fontSize: string;
}

interface TitleProps {
  text: string;
}

const Div = styled.div`
  font-size: ${(props: H1Props) => props.fontSize || '32px'};
  line-height: 60px;
  font-weight: 600;
`;

type Props = H1Props & TitleProps;

export function Title(props: Props) {
  return <Div fontSize={props.fontSize}>{props.text}</Div>;
}
