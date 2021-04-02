import '../Styling/Projects.css';
import FeatureCard from '../Components/FeatureCard';

import { feature } from '../Data/project';

const Projects = (props) => {
  let cards = feature.map((project, i) => {
    return <FeatureCard key={i} project={project} />;
  });

  return (
    <div className='Projects' id='Projects'>
      <div className='container'>
        <h2>Projects</h2>
        <h5>Please click on the cards to flip and see a summary of info 
          for each project as well as links to live demos and Github repos.
        </h5>
        <section className='cards'>
          {cards}
        </section>
      </div>
    </div>
  );
};

export default Projects;
