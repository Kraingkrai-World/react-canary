import {
   getByTestId,
   render,
   fireEvent,
   getAllByRole,
} from "@testing-library/react";
import Counter from "./counter";

describe("<Counter/>", () => {
   const getContainer = () => {
      const { container } = render(<Counter />);
      return container;
   };

   it("render counter correct.", () => {
      const container = getContainer();
      const varCounter = getByTestId(container, "var-counter");
      const btnCouner = getAllByRole(container, "button");
      expect(btnCouner).toHaveLength(2);
      expect(varCounter).toHaveTextContent("1");
   });

   it("handle counter function", () => {
      const container = getContainer();

      const varCounter = getByTestId(container, "var-counter");
      const btnIncrement = getByTestId(container, "btn-counter-increment");
      const btnDecrement = getByTestId(container, "btn-counter-decrement");

      fireEvent.click(btnDecrement);
      expect(varCounter).toHaveTextContent("0");
      expect(btnDecrement).toHaveAttribute("disabled");

      fireEvent.click(btnIncrement);
      expect(varCounter).toHaveTextContent("1");
   });
});
