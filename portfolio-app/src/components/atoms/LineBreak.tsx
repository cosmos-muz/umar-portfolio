import styled from 'styled-components';

interface Props {
  width: string;
}

const Div = styled.div`
  margin: ${(props: Props) => props.width || '0'};
`;

export function LineBreak(props: Props) {
  return <Div width={props.width} />;
}
