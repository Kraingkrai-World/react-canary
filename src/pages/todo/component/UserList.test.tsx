import ReactDOM from 'react-dom';

import {render, act} from "core/utils/test";
import UserList from "./UserList";

describe("UserList Component", () => {
    const {container,} = render(<UserList/>)

    it("render correct.", async () => {

        act(() => {
            ReactDOM.render(<UserList/>, container);
        });
    })
})