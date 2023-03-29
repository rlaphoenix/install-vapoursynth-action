const core = require('@actions/core');
const { get_version_data } = require('./versions');
const process = require('process');

(async()=>{
  // Action inputs
  const version = core.getInput('version');
  const with_cache = core.getInput('cache') == 'true';

  // Get version data
  const version_data = await get_version_data(version);
  console.log(version_data);

  // Choose compiler based on runner OS
  if (process.platform == 'win32') {
    compiler = require('./compilers/windows');
  } else {
    compiler = require('./compilers/linux');
  }

  // Begin compiling VapourSynth
  await compiler.run(version_data, with_cache);

  // Action outputs
  core.setOutput('version', version_data.minor);
})().catch(
  (error) => {
    console.error(e);
    core.setFailed(`Installation of VapourSynth failed: ${error.message}`);
});
