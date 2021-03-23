import React from 'react';
import '../Styling/About.css';
import { Link } from 'react-scroll';

import * as logos from '../Img/logos';

const About = () => {

    let skills = [];
    let tech = [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Python3',
        'React',
        'PostgreSQL',
        'Sequelize',
        'NodeJS',
        'Express',
        'MongoDB/Atlas',
        'Git',
        'Github',
        'Heroku'
    ];

    let i = 0;
    for (let logo in logos) {
        skills.push(
            <div key={i}>
                <img src={logos[logo]} alt={logo} />
                <p>{tech[i]}</p>
            </div>
        );
        i++
    }

    return (
        <div className='About' id='About'>
            <div className='container'>
                <section className='text-box'>
                    <h2>About Me</h2>
                    <h3>
                        I'm a software engineer looking to direct my work ethic towards
                        rewarding and challenging projects. I am inspired by hard work,
                        community building, and learning new things. I enjoy taking on
                        technical challenges and working alongside businesses who dream big
                        with technology! I love designing full-stack apps and learning
                        new programming languages.
                    </h3>

                    <p>
                        I was not always a software engineer. I did not realize my passion for
                        it until my most recent position as a Technical Recruiter. Through my career
                        shift into becoming a software engineer, I've realized that it's my
                        educational and professional experiences that have allowed me to thrive in
                        this transition and will continue to propel me forward. I have taken on
                        positions of leadership such as Philanthropy Chair and Alumni Chair in
                        Phi Kappa Psi beginning as a freshman. I have also interned abroad to work for
                        a technology start-up called Vodio for the sake of gaining real-world experience
                        in entrepreneurship and digital marketing. The underlying reason for this is because
                        I enjoy seeking out opportunities that allow me to move out of my comfort zone in order
                        to grow overall as a person.
                    </p>
                    <p>
                        Curious to learn more about me?{' '}
                        <Link
                            to='Contact'
                            spy={true}
                            smooth={true}
                            duration={800}>
                            Feel free to reach out!
                        </Link>
                    </p>
                </section>
                {/* <section className='profile-box'>
                    <div className='image-box'>
                        <img src={profile} alt='profile' />
                    </div>
                </section> */}
                <section className='skills-box'>{skills}</section>
            </div>
        </div>
    );
};

export default About;