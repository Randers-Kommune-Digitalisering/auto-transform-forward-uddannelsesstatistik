const Node = {
  "id": "07f35f19811ea3df",
  "type": "change",
  "z": "c7d12dee3aab4a6e",
  "g": "f51e9394d30178a9",
  "name": "Definér værdier \\n for datasæt",
  "rules": [
    {
      "t": "set",
      "p": "dataset",
      "pt": "msg",
      "to": "elevtrivsel_4til9klasse",
      "tot": "str"
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
  "x": 480,
  "y": 120,
  "wires": [
    [
      "b13307f7fb5feead"
    ]
  ],
  "_order": 157
}

module.exports = Node;