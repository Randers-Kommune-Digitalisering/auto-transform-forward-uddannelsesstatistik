const Node = {
  "id": "925bad72492cd85e",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "7d56a32338a2cffc",
  "name": "Parse indikatorsvar \\n til float",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> | $ | {\t    \"Indikatorsvar\": Indikatorsvar ~> $replace(\",\", \".\") ~> $number\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 350,
  "y": 1880,
  "wires": [
    [
      "c36ab7a064dc10c7"
    ]
  ],
  "_order": 121
}

module.exports = Node;