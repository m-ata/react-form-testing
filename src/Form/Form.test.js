import React from "react";
import { render } from "@testing-library/react";
import Form from './Form';

test('renders the Form correctly', () => {

    const { getByText, getByTestId} = render(<Form />);
    const registrationLabel = getByText(/Registration/i);
    const userNameLabel = getByText(/User Name :/i);
    const emailLabel = getByText(/Email :/i);
    const passwordLabel = getByText(/Password :/i);
    const aboutLabel = getByText(/About/i);
    const registerBtn = getByTestId('register-id');
    const userNameInput = getByTestId('userName');
    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const aboutTextArea = getByTestId('about')
    expect(registrationLabel).toBeInTheDocument();
    expect(userNameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(aboutLabel).toBeInTheDocument();
    expect(registerBtn).toBeInTheDocument();
    expect(userNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(aboutTextArea).toBeInTheDocument();

});