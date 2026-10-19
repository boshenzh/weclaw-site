import assert from "node:assert/strict";
import test from "node:test";
import { checkoutPlansForEnv, productionCheckoutPlans } from "./checkout-plans.ts";
import { displayedCny, pricingCards } from "./pricing.ts";

test("every pricing-card checkout plan exists in the production checkout config", () => {
  const checkoutPlans = pricingCards.filter((card) => card.checkoutPlan);
  assert.ok(checkoutPlans.length >= 3);

  for (const card of pricingCards) {
    if (!card.checkoutPlan) {
      assert.equal(card.detailsHref, "/enterprise");
      continue;
    }
    const plan = productionCheckoutPlans[card.checkoutPlan];
    assert.ok(plan, `${card.checkoutPlan} is missing from production checkout plans`);
    assert.equal(plan.amountCny, displayedCny(card.price));
  }
});

test("the ¥10 test plan is absent unless ALLOW_TEST_CHECKOUT=1", () => {
  assert.equal(productionCheckoutPlans.test_10, undefined);
  assert.equal(checkoutPlansForEnv({}).test_10, undefined);
  assert.equal(checkoutPlansForEnv({ ALLOW_TEST_CHECKOUT: "0" }).test_10, undefined);
  assert.equal(checkoutPlansForEnv({ ALLOW_TEST_CHECKOUT: "1" }).test_10?.amountCny, 10);
});
