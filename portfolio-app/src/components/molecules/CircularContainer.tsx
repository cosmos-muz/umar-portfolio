import styled from 'styled-components';

interface ImageProps {
  imageUrl?: string;
  imageAlt?: string;
}

interface DivProps {
  tagLine?: string;
}

const Div = styled.div`
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: space-evenly;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 85px;
  background-image: url(${(props: ImageProps) => props.imageUrl || ''});
  margin: 0 12px;
`;

type Props = ImageProps & DivProps;

export function CircularContainer(props: Props) {
  return (
    <Div>
      <Img src={`${props.imageUrl}`} alt={props.imageAlt} />
    </Div>
  );
}
