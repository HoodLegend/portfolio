import './css/about.css';

const About = () => {
    return ( 
        <div className="container" id="about">
            <article className='about-hero'>
            <h2>About Me</h2>
            <hr />
            <p>Passionate and results driven web and Software Developer <br/>
            with over 3+ years experience of successful work completion.<br />
            Experienced in project completion, Good software development practices and
            Project management <br />
            Expertise in diverse technologies and a problem fixer at heart 😉.<br />Thrives in collaboration , the design process to seamless deployment.<br/>
            Lets connect and explore how I can contribute to your organization's success. Check out the proof of work <a href="#projects">here</a>.
            </p>
            <a href='/' className='resume-btn'>My Resume ↗</a >
            </article>
        </div>
     );
}
 
export default About;