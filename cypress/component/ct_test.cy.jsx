import Stepper from "../test_component/Stepper.jsx";
describe("ct_test.cy.ts", () => {
  it("playground", () => {
    cy.mount(<Stepper />);
    cy.get('[aria-label="decrement"]').should("be.visible");
  });
});
