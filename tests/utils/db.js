'use strict'

var PouchDB = require('pouchdb-core')
  .plugin(require('pouchdb-adapter-memory'))
  .plugin(require('pouchdb-replication'))

if (!PouchDB.prototype.unsyncedLocalDocs) PouchDB.plugin(require('../../'))

module.exports = function (name) {
  name = name || uniqueName()

  return new PouchDB(name)
}

var uniqueNr = 0
function uniqueName () {
  uniqueNr += 1
  return 'db-' + uniqueNr
}
