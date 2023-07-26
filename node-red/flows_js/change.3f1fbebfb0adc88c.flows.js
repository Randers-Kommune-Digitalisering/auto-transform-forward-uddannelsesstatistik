const Node = {
  "id": "3f1fbebfb0adc88c",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Omdøb kolonnenavne i data",
  "rules": [
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
  "x": 580,
  "y": 440,
  "wires": [
    [
      "99fe4815a3a30927",
      "f13064df4203d26c"
    ]
  ],
  "_order": 21
}

module.exports = Node;