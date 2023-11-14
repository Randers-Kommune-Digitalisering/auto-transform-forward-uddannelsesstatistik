const Node = {
  "id": "7daf978fbe4fb478",
  "type": "change",
  "z": "bbeb8dfaa79c297c",
  "d": true,
  "name": "delete file from list",
  "rules": [
    {
      "t": "set",
      "p": "files",
      "pt": "global",
      "to": "$globalContext(\"files\") ~> | $ | {}[payload.file] |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 500,
  "wires": [
    [
      "292d143d80b9ff98"
    ]
  ],
  "_order": 171
}

module.exports = Node;