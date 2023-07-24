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
  "x": 800,
  "y": 340,
  "wires": [
    [
      "99fe4815a3a30927",
      "c36ab7a064dc10c7"
    ]
  ],
  "_order": 15
}

module.exports = Node;