import {
  getByTestId,
  render,
  fireEvent,
  createEvent,
} from "@testing-library/react";

describe("SignIn Page", () => {

  const getContainer = () => {
    const { container } = render(
      <></>
      // <Provider store={store}>
      //   <SignInPage />
      // </Provider>
    );
    return container;
  };

  it("onChange input", () => {
    const container = getContainer();
    const usernameInput: any = getByTestId(container, "username");
    const passwordInput: any = getByTestId(container, "password");

    fireEvent.change(usernameInput, { target: { value: "username" } });
    expect(usernameInput.value).toBe("username");

    fireEvent.change(passwordInput, { target: { value: "12345" } });
    expect(passwordInput.value).toBe("12345");
  });

  it("onClick submit button", () => {
    const container = getContainer();

    const submitButton = getByTestId(container, "submit-btn");
    const myEvent = createEvent.click(submitButton);

    fireEvent(submitButton, myEvent);
    expect(myEvent.defaultPrevented).toBeTruthy();
  });
});
