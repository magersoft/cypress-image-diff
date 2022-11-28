import path from 'path'

const parentDirFolderName = 'visual'
const parentDir = path.join(process.cwd(), 'cypress', 'screenshots', parentDirFolderName)
const baseline = path.join(parentDir, 'baseline')
const comparison = path.join(parentDir, 'comparison')
const diff = path.join(parentDir, 'diff')
const reportDir = path.join(process.cwd(), 'cypress', 'screenshots', 'report')

const paths = {
  image: {
    baseline: (testName) => { return path.join(baseline, `${testName}.png`) },
    comparison: (testName) => { return path.join(comparison, `${testName}.png`) },
    diff: (testName) => { return path.join(diff, `${testName}.png`) },
  },
  dir: {
    baseline,
    comparison,
    diff,
  },
  parentDir,
  reportDir,
  report: instance => { return path.join(reportDir, `cypress-visual-report${instance}.html`) },
}

export default paths
