import DisplayImage from '../../media/background.png';
import { InformationContainer } from '../molecules/InformationContainer';

interface Props {}

function MainPage(props: Props) {
  // return;
  return (
    <div>
      <InformationContainer
        imageUrl={DisplayImage}
        title={'Lorem ipsum dolor sit amet.'}
        details={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ex at mi posuere, eget suscipit tellus maximus. Proin sit amet leo a nibh maximus sagittis varius vulputate odio. Proin venenatis odio a bibendum consequat.',
          ' Sed pretium non sapien posuere auctor. Vestibulum nibh nisi, pretium vel leo sit amet, rutrum convallis risus. Ut ut lectus aliquet, consequat felis in, volutpat augue. Phasellus laoreet elit iaculis luctus cursus. Suspendisse eleifend in enim nec congue. Phasellus finibus urna at magna consequat mollis. Aliquam in gravida nibh, a congue nisi. Suspendisse vitae ligula rhoncus, vestibulum turpis a, dignissim justo. Nam euismod, metus eu faucibus suscipit, justo mauris hendrerit diam, ut ornare nulla lorem et nulla. Suspendisse ac augue id orci accumsan semper a eu magna. Donec odio augue, consectetur ut iaculis eu, laoreet efficitur tortor.',
        ]}
      />
    </div>
  );
}

export default MainPage;
