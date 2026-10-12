export type CheckoutPlan = { amountCny: number; name: string };

/** Live checkout plans. Amounts match the prices printed on the pricing cards. */
export const productionCheckoutPlans: Record<string, CheckoutPlan> = {
  feishu_gateway_install: { amountCny: 489, name: "飞书 + Gateway 快速连接包" },
  personal_pc: { amountCny: 1888, name: "个人部署（远程）" },
  managed: { amountCny: 3800, name: "托管部署" },
};

/**
 * ¥10 test checkout stays off unless ALLOW_TEST_CHECKOUT=1.
 * Preview and production both run with NODE_ENV=production, so the flag is explicit.
 */
export function checkoutPlansForEnv(env: { ALLOW_TEST_CHECKOUT?: string }): Record<string, CheckoutPlan> {
  if (env.ALLOW_TEST_CHECKOUT === "1") {
    return {
      ...productionCheckoutPlans,
      test_10: { amountCny: 10, name: "测试支付（¥10）" },
    };
  }
  return productionCheckoutPlans;
}
