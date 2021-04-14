import {render} from "core/utils/test"
import HomePage from '.'

describe('Home Page', () => {
    const {getByText} = render(<HomePage/>);

    it("say hello", () => {
        getByText((content, node) => {
            const hasText = (node: any) => node.textContent === "สวัสดีชาวโลก";
            const nodeHasText = hasText(node as any);
            // @ts-ignore
            const childrenDontHaveText = Array.from(node.children).every(
                (child) => !hasText(child)
            );

            return nodeHasText && childrenDontHaveText;
        });
    })

})