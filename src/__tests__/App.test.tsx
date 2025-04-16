import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from "../App";

describe('[App]', () => {
  it('Renders', async () => {

    render(<App/>)
    const countButton = screen.getByRole('button', {name: /count is 0/i})
    const editText = screen.getByText(/Edit/i)
    const readText = screen.getByText(/Click on the Vite and React logos to learn more/i)
    expect(countButton).toBeInTheDocument()
    expect(editText).toBeInTheDocument()
    expect(readText).toBeInTheDocument()

  });
});
