const Node = {
  "id": "7daf978fbe4fb478",
  "type": "change",
  "z": "bbeb8dfaa79c297c",
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
  "x": 450,
  "y": 260,
  "wires": [
    [
      "292d143d80b9ff98"
    ]
  ],
  "_order": 144
}

module.exports = Node;