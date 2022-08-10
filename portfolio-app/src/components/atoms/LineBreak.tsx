import styled from 'styled-components';

interface Props {
  width: number;
  show?: boolean;
}

const Div = styled.div`
  margin: ${(props: Props) => `${props.width}px` || '0'};
  ${(props) =>
    props.show &&
    `
    border-top: solid 2px;
    position: absolute;
    width:100%;
  `}
`;

export function LineBreak(props: Props) {
  return <Div width={props.width} show={props.show} />;
}
