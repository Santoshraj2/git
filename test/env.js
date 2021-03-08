const gitEnv = require('../lib/env.js')
const t = require('tap')

process.env.GIT_UNKNOWN_THINGIE = 'this should not be copied'
const ga = process.env.GIT_ASKPASS
process.env.GIT_ASKPASS = 'foo'
const ge = gitEnv()
t.equal(ge.GIT_ASKPASS, 'foo', 'askpass makes it through')
t.equal(ge.GIT_UNKNOWN_THINGIE, undefined, 'unknown thing filtered out')
t.equal(ge.GIT_SSH_COMMAND, 'ssh -oStrictHostKeyChecking=accept-new')
t.equal(gitEnv(), ge, 'memoized')
