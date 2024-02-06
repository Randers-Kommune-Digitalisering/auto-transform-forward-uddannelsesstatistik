const Node = {
  "id": "d009d89b2f749b70",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Definér værdier \\n for datasæt",
  "rules": [
    {
      "t": "set",
      "p": "dataname",
      "pt": "msg",
      "to": "Elevtrivsel 4.-9. klasse",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "dataset",
      "pt": "msg",
      "to": "elevtrivsel_4til9klasse",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metadata_tablename",
      "pt": "flow",
      "to": "dataset & \"_metadata\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "startingYear",
      "pt": "msg",
      "to": "2022",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "yearBeginsAt",
      "pt": "msg",
      "to": "01/06",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "yearBeginsAt_format",
      "pt": "msg",
      "to": "[D01]/[M01]",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 300,
  "y": 180,
  "wires": [
    [
      "3a84547d2a3de5fb"
    ]
  ],
  "_order": 129
}

module.exports = Node;