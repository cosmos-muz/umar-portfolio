import styled from 'styled-components';

interface DivProps {
  fontSize: string;
}

interface PatagraphProps {
  text: string;
}

const P = styled.p`
  font-size: (${(props: DivProps) => props.fontSize || '12px'});
  line-height: 24px;
`;

type Props = DivProps & PatagraphProps;

export function Paragraph(props: Props) {
  return <P fontSize={props.fontSize}>{props.text}</P>;
}
