import {render, fireEvent} from "core/utils/test"
import Counters from "./Counters";

describe("Counters component", () => {
    const {getByTestId, getAllByRole} = render(<Counters/>);

    it("render and event correct.", () => {
        const varCounter = getByTestId("var-counter");
        const btnCounter = getAllByRole("button");
        const btnIncrement = getByTestId("btn-counter-increment");
        const btnDecrement = getByTestId("btn-counter-decrement");

        expect(btnCounter).toHaveLength(2);
        expect(varCounter).toHaveTextContent("1");

        fireEvent.click(btnDecrement);
        expect(varCounter).toHaveTextContent("0");
        expect(btnDecrement).toBeDisabled()

        fireEvent.click(btnIncrement);
        expect(varCounter).toHaveTextContent("1");
    });

});
