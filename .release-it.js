module.exports = {
  // git: {
  //   tagName: "v${version}",
  //   commitMessage: "release: v${version}",
  //   requireCleanWorkingDir: false,
  //   requireBranch: "main",
  // },
  // hooks: {
  //   "before:init": ["git pull origin main", "npm run test"],
  // },
  npm: {
    publish: true,
  },
  prompt: {
    ghRelease: false,
    glRelease: false,
    publish: false,
  },
}
