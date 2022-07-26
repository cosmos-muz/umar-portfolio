import styled from 'styled-components';

interface DivProps {
  fontSize: number;
}

interface PatagraphProps {
  text: string;
}

const P = styled.p`
  font-size: (${(props: DivProps) => `${props.fontSize}px` || '12px'});
  line-height: 24px;
`;

type Props = DivProps & PatagraphProps;

export function Paragraph(props: Props) {
  return <P fontSize={props.fontSize}>{props.text}</P>;
}
