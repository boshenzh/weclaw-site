import assert from "node:assert/strict";
import test from "node:test";
import { untitled } from "./page-title.ts";

test("strips a duplicated WeClawd suffix before the site title template", () => {
  assert.equal(untitled("Freight Forwarder AI Assistant | WeClawd"), "Freight Forwarder AI Assistant");
  assert.equal(untitled("WeClawd vs ChatGPT | WeClawd Compare"), "WeClawd vs ChatGPT");
  assert.equal(untitled("货代 AI 助手｜喂龙虾"), "货代 AI 助手");
});
