import DisplayImage from '../../media/background.png';
import { InformationContainer } from '../molecules/InformationContainer';

interface Props {}

const details: string[] = [
  `A passionate Full Stack Software Developer, with years of experience and a strong ability writing clean reusable code. 
I have a focus on engineering solutions that not only solve the problem but are also maintainable long term. 
While most recently my experience has been in the React/Node ecosystem, 
I’ve previously worked in C#, research and data analysis. `,
  `I possess in-depth knowledge writing frontend components, backend services and database
queries in both NoSQL and SQL and operational tasks such as deployments via Jenkins. This
breadth of experience has enhanced my ability to multitask and manage projects in all aspects
of the SDLC. I’m an active learner who loves to share his knowledge and learn from others. `,
];
function MainPage(props: Props) {
  // return;
  return (
    <div style={{ margin: '32px' }}>
      <InformationContainer details={details} heading="Why am I here?" imageUrl={DisplayImage} />
      <InformationContainer details={details} heading="Okay, ?" />
      <InformationContainer details={details} heading="Who is Umar" />
      <InformationContainer details={details} heading="What is his Professional Background" />
    </div>
  );
}

export default MainPage;
