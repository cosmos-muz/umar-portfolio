import { CircularContainer } from '../atoms/CircularContainer';
import { Paragraph } from '../atoms/Paragraph';
import { Title } from '../atoms/Title';

interface Props {
  imageUrl: string;
  title: string;
  details: string[];
}

export function InformationContainer(props: Props) {
  const { details, imageUrl } = props;
  const first = details.shift() || '';
  return (
    <div>
      {imageUrl && <CircularContainer imageUrl={imageUrl} imageAlt="display picture missing" />}

      <Title fontSize="32px" text={props.title} />
      <Paragraph fontSize="16px" text={first} />
      {details && details.map((detail: string) => <Paragraph fontSize="16px" text={detail} />)}
    </div>
  );
}
