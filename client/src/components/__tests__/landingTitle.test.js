import React from "react";
import { render, screen } from "@testing-library/react";
import Landing from "../../routes/Landing";
import { BrowserRouter } from "react-router-dom";

describe("React App", () => {
  test("Renders Landing title", () => {
    render(
      <BrowserRouter basename="/">
        <Landing />
      </BrowserRouter>
    );
    const text = screen.getByText("Join the Mafia");
    expect(text).toBeInTheDocument();
  });
});
