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
        <section className='cards'>
          {/* Project Cards */}
          {cards}
        </section>
      </div>
    </div>
  );
};

export default Projects;
