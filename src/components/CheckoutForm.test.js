import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)

    const formHeader = screen.getByText(/checkout form/i)

    expect(formHeader).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/first name:/i)
    userEvent.type(firstNameInput, "Christopher")
    const lastNameInput = screen.getByLabelText(/last name:/i)
    userEvent.type(lastNameInput, "Henao")
    const addressInput = screen.getByLabelText(/address:/i)
    userEvent.type(addressInput, "Christopher")
    const cityInput = screen.getByLabelText(/city:/i)
    userEvent.type(cityInput, "Tampa")
    const stateInput = screen.getByLabelText(/state:/i)
    userEvent.type(stateInput, "Florida")
    const zipInput = screen.getByLabelText(/zip:/i)
    userEvent.type(zipInput, "22000")
    const submitButton = screen.getByRole("button")
    userEvent.click(submitButton)

    const successMessage = await screen.getByText("You have ordered some plants! Woo-hoo!")
    expect(successMessage).toBeInTheDocument()
});
