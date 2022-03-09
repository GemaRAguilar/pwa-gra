import Home from './../Home';
import ReactDOM from 'react-dom';
//import { render, fireEvent } from 'react-dom';

it('aaa', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
/*test("Home", () => {
    const { getByPlaceholderText, getByText } = render(<Home />);
    fireEvent.change(getByPlaceholderText("placeholder"), {
      target: { value: "new value" }
    });
    expect(getByText("Input has changed")).toBeInTheDocument();
  });*/
  