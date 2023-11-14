const Node = {
  "id": "f8f955378d43b663",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "57e65c48f5b0a2e1",
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
    },
    {
      "t": "set",
      "p": "files_tablename",
      "pt": "flow",
      "to": "uddannelsesstatistik_files",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "files_tablename",
      "pt": "global",
      "to": "files_tablename",
      "tot": "flow",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 440,
  "y": 100,
  "wires": [
    [
      "d4b9b2485f323623"
    ]
  ],
  "_order": 77
}

module.exports = Node;