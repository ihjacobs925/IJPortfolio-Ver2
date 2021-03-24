import React, { Component } from 'react';
import '../Styling/FeatureCard.css';

import {
  reactLogo,
  nodeLogo,
  mongoLogo,
  postgresLogo,
  exLogo,
  htmlLogo,
  cssLogo,
  jsLogo,
} from '../Img/logos';

class FeatureCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false,
    };
  }

  flipCard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      isFlipped: !this.state.isFlipped,
    });
  };

  render() {
    let {
      title,
      description,
      techs,
      builtWith,
      github,
      live,
      image,
    } = this.props.project;

    builtWith = builtWith.join(', ');

    let logos = {
      react: reactLogo,
      node: nodeLogo,
      mongo: mongoLogo,
      postgres: postgresLogo,
      express: exLogo,
      html: htmlLogo,
      css: cssLogo,
      javascript: jsLogo,
    };

    let techLogos = techs.map(
      (tech, i) =>
        logos[tech] && (
          <img key={i} src={logos[tech]} alt={`${tech}-logo`} />
        )
    );

    return (
      <div
        className={`FeatureCard ${
          this.state.isFlipped ? 'flipped' : ''
        }`}
        onClick={this.flipCard}>
        <div className='whole-card'>
          <div className='card-front'>
            <img src={image} alt='card' />
          </div>

          <div className='card-back'>
            <section className='tech-box'>{techLogos}</section>
            <section className='title-box'>
              <h4>{title}</h4>
              <p>{description}</p>
              <em>Built With: {builtWith}</em>
            </section>
            <section className='link-box'>
              <a href={github} target="_blank" onClick={(e) => e.stopPropagation()}>
                Github
              </a>
              <a href={live} target="_blank" onClick={(e) => e.stopPropagation()}>
                Live Demo
              </a>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureCard;
