const Node = {
  "id": "69e0216f7b15b156",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "13cb76c02d53c334",
  "name": "Bestem startår",
  "rules": [
    {
      "t": "set",
      "p": "startingYear",
      "pt": "msg",
      "to": "( payload ~> $count ) > 0 ?\t\t    /* Hvis data findes i DB */ \t    ( payload[0].schoolYear ~> $split(\"/\") )[1] ~> $number\t\t    : /* Hvis ingen data findes */\t    startingYear",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 680,
  "wires": [
    [
      "82e3021114461a25"
    ]
  ],
  "_order": 80
}

module.exports = Node;