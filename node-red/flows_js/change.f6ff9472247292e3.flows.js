const Node = {
  "id": "f6ff9472247292e3",
  "type": "change",
  "z": "c7d12dee3aab4a6e",
  "g": "eacb60100e0da03c",
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
  "x": 900,
  "y": 240,
  "wires": [
    [
      "6c27415ccfcd2eb8"
    ]
  ],
  "_order": 161
}

module.exports = Node;