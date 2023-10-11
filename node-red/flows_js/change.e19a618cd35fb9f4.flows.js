const Node = {
  "id": "e19a618cd35fb9f4",
  "type": "change",
  "z": "fc46f6d88e3fdc07",
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
  "x": 340,
  "y": 100,
  "wires": [
    [
      "44cd41a60354b55a"
    ]
  ],
  "_order": 148
}

module.exports = Node;