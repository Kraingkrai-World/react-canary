import logo from "assets/icon/logo.svg";
import "./styles.css";

const Readme: React.FC = () => {
   return (
      <section className="section">
         <div className="columns is-vcentered container has-text-centered">
            <a target="blank" href="https://reactjs.org/">
               <div className="column">
                  <img
                     role="button"
                     alt="react"
                     src={logo}
                     className="App-logo"
                  />
               </div>
            </a>
            <div className="column">
               <a
                  target="blank"
                  href="https://bulma.io/documentation/overview/start/"
               >
                  <img
                     alt="bulma-logo"
                     src="https://bulma.io/images/bulma-logo.png"
                  />
               </a>
            </div>
         </div>
      </section>
   );
};

export default Readme;
