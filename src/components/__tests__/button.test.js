import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import Button from "../Button"
import renderer from "react-test-renderer"
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

test('snapshot component Button exist', () => {
    const button = renderer.create(<Button />).toJSON;
    expect(button).toMatchSnapshot();
});

test('"to buy" button render', () => {
    render(<Button text='Buy' />);
    expect(screen.getByText('Buy')).toBeInTheDocument();
});

test('check single click on button', () => {
    const onClickMock = jest.fn()

    render(
        <Button
            text='Buy'
            onClick={onClickMock}
        />
    )

    const button = screen.getByText('Buy')
    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalledTimes(1)
})