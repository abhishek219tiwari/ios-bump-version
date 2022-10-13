const core = require("@actions/core");
const github = require("@actions/github");
async function run() {
  try {
    // `who-to-greet` input defined in action metadata file
    if (
      !core.getInput("marketingVersion") &&
      !core.getInput("project-path") &&
      !core.getInput("Scheme")
    ) {
      throw new Error(
        "make sure you provided marketingVersion, project-path and scheme ......"
      );
    }
    process.env.MARKET_VERSION = core.getInput("marketingVersion");
    process.env.PROJECT_PATH = core.getInput("project-path");
    process.env.SCHEME = core.getInput("scheme");
    await exec.exec(`bash ${__dirname}/../build.sh`);
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();
