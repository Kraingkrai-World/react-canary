import React, {useEffect} from "react";
import Counter from "./component/counter";

// import {getTodo} from "./services/todo";
// import {setAuthorization} from "pages/authen/services/auth";

const Home: React.FunctionComponent = (): React.ReactElement => {

    useEffect(() => {
        // setAuthorization();
        // getTodo({limit: 1});
    }, []);

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-three-fifths">
                        <h1 className="title">สวัสดีชาวโลก</h1>
                        <p className="subtitle">
                            My first website with <strong>Bulma</strong>!
                        </p>
                    </div>

                    <div className="column is-one-fifths">
                        <Counter/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
