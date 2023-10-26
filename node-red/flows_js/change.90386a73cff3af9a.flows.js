const Node = {
  "id": "90386a73cff3af9a",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "\"DROP TABLE \" & $flowContext(\"metadata_tablename\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 580,
  "y": 180,
  "wires": [
    [
      "d45499f85e38c202",
      "15dab49ad493933d"
    ]
  ],
  "_order": 124
}

module.exports = Node;