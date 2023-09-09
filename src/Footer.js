import "./css/footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <h1>Let's Connect 😉</h1>
      <br />
      <p>
        I m very open minded , love to solve porblems using tech and lastly a
        team player that loves to work with others and share ideas. Some of the
        ways you can reach me in case you want us to collaborate on a project.
        Feel free to hit me up, lets have a chat 😉
      </p>
      <div className="contact-details">
        <p>
          Phone{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          : <a href="tel:+260978826468"> + (260) 978826468</a>
        </p>
        <p>
          Email{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
            />
          </svg>
          : <a href="mailto:mofyan39@gmail.com">mofyan39@gmail.com</a>
        </p>
        <div className="socials">
          {" "}
          <b>Connect with me:</b>{" "}
          <SocialIcon
            url="https://www.linkedin.com/in/mofya-ndabala-10a97b138/?originalSubdomain=zm"
            style={{
              width: "30px",
              height: "30px",
              marginLeft: "5px",
            }}
          />
          <SocialIcon
            url="https://github.com/HoodLegend"
            style={{
              width: "30px",
              height: "30px",
              marginLeft: "10px",
            }}
            className="github-icons"
          />
          <SocialIcon
            url="https://twitter.com/mofyandabala_27"
            style={{
              width: "30px",
              height: "30px",
              marginLeft: "10px",
            }}
          />
        </div>
      </div>
      <br />
      
      <div className="footer-note">
        <p>Mofya Ndabala Production</p>
        <p>Copyright &copy; 2023.</p>
      </div>
    </div>
  );
};

export default Footer;
