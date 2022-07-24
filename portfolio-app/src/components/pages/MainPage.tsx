import { CircularContainer } from '../atoms/CircularContainer';
import DisplayImage from '../../media/background.png';

interface Props {}

function MainPage(props: Props) {
  return <CircularContainer imageUrl={DisplayImage} imageAlt="display picture missing" />;
}

export default MainPage;
