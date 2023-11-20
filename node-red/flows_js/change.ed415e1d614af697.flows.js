const Node = {
  "id": "ed415e1d614af697",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "547b60b86161002f",
  "name": "Bestem fildata",
  "rules": [
    {
      "t": "set",
      "p": "file",
      "pt": "msg",
      "to": "{\t    \"filename\": filename,\t    \"data\": filedata\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "file_columns",
      "pt": "msg",
      "to": "file ~> $keys() ~> $join(\", \")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "file_values",
      "pt": "msg",
      "to": "file\t~> $each( function($v, $k) {\t\t    $v ~> $type() = \"number\" ? \t        $v ~> $string\t    :\t        \"'\" & $v & \"'\"\t} )\t~> $join(\", \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 2520,
  "wires": [
    [
      "2abe62af81764bee"
    ]
  ],
  "_order": 141
}

module.exports = Node;