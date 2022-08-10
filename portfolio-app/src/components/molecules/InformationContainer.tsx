import { CircularContainer } from '../atoms/CircularContainer';
import { LineBreak } from '../atoms/LineBreak';
import { Paragraph } from '../atoms/Paragraph';
import { Title } from '../atoms/Title';

interface Props {
  imageUrl?: string;
  details: string[];
  heading: string;
}

export function InformationContainer(props: Props) {
  const { imageUrl, heading, details } = props;
  return (
    <>
      {imageUrl && <CircularContainer imageUrl={imageUrl} imageAlt="No pic present :(" />}
      <Title type="H1" text={heading} />
      {details.map((detail) => {
        return (
          <>
            <Paragraph fontSize="16px" text={detail} />
            <LineBreak width="2px" />
          </>
        );
      })}
    </>
  );
}
