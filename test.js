import { execFile } from "node:child_process";
import assert from "node:assert";

const exec = async (component, props) =>
  new Promise((resolve, reject) =>
    execFile(
      "./render",
      [component, JSON.stringify(props)],
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
        }
        resolve(stdout);
      }
    )
  );

const test = async (component, props, expected) => {
  const actual = await exec(component, props);
  console.log(component, props);
  console.log(actual);
  assert.strictEqual(actual.trim(), expected);
  console.log();
};

await test(
  "Button",
  { label: "Hello" },
  `<button type="button" class="c-button c-button--clear dsa-button"><span>Hello</span></button>`
);
