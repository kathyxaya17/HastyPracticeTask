import { React } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Swal from "sweetalert2";
import userService from "../../services/userService";
import SignUpForm from "../SignUpForm";
import "@testing-library/jest-dom";

jest.mock("sweetalert2");

describe("Sign up form", () => {
  test("should call Swal.fire when form submission is successful", () => {
    render(<SignUpForm />);

    // Mock successful form submission
    const mockResponse = { data: "Success" };
    jest.spyOn(userService, "post").mockResolvedValue(mockResponse);

    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);

    expect(Swal.fire).toHaveBeenCalledWith({
      title: "Go Bills",
      text: "Welcome to Bills Mafia!",
      imageUrl: "https://media.tenor.com/vR0wxzj7rxkAAAAC/buffalo-bills.gif",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "Broken table image :(",
    });
  });
});
