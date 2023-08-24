import './css/services.css';

const Services = () => {
    return ( 
        <div className="container">
            <div className="services">
            <h1>Services</h1>
            <hr />
                <h2 className="service-1">Full Stack Development</h2>
                <p>I ll build and maintain a full-fledged web Application <br />
                from concept to deployment.</p>
                <h2 className="service-2">Backend Development</h2>
                <p>In need of a fully functional backend which consists of APIs, application logic and Database Manipulation. <br />You re in the right place hit me up for your backend services.
                from concept to deployment.</p>
                <h2 className="service-3">Frontend Development</h2>
                <p>In need of a Modern and crisp UI. <br />
                I ll build a modern and responsive UI from design to the actual web application</p>
            </div>
        </div>
     );
}
 
export default Services;