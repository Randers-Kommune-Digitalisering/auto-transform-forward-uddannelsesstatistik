const Node = {
  "id": "2b8bb316fba5fbe5",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "1a1eb8215e2a1880",
  "name": "Bestem metadata",
  "rules": [
    {
      "t": "set",
      "p": "meta",
      "pt": "msg",
      "to": "{\t    \"dataset_elementCount\": payload ~> $count,\t    \"schoolYear\": schoolYear\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "meta_columns",
      "pt": "msg",
      "to": "meta ~> $keys() ~> $join(\", \")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "meta_values",
      "pt": "msg",
      "to": "meta\t~> $each( function($v, $k) {\t\t    $v ~> $type() = \"number\" ? \t        $v ~> $string\t    :\t        \"'\" & $v & \"'\"\t} )\t~> $join(\", \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 430,
  "y": 1460,
  "wires": [
    [
      "779a2ca35eaa36d5"
    ]
  ],
  "_order": 104
}

module.exports = Node;