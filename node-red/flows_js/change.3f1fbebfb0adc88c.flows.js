const Node = {
  "id": "3f1fbebfb0adc88c",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "98d04e4a55a8736c",
  "name": "Omdøb kolonnenavne i data",
  "rules": [
    {
      "t": "set",
      "p": "columns",
      "pt": "msg",
      "to": "columns",
      "tot": "flow",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload @ $obj # $index . (\t\t    ( columns ~> $keys ) @ $column . {\t        columns ~> $lookup($column): payload[$index] ~> $lookup($column)\t    } ~> $merge\t\t)",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "columns",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 460,
  "y": 1280,
  "wires": [
    [
      "659c883a70e3086a"
    ]
  ],
  "_order": 76
}

module.exports = Node;