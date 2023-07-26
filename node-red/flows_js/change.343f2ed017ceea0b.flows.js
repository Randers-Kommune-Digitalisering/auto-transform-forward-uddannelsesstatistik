const Node = {
  "id": "343f2ed017ceea0b",
  "type": "change",
  "z": "971a7ae6df987a48",
  "d": true,
  "name": "Skab nye kolonnenavne",
  "rules": [
    {
      "t": "set",
      "p": "columns",
      "pt": "msg",
      "to": "payload[0] ~> $each( function($v, $k)\t{\t    $k ~> $contains(\"[\") ?\t    {\t        $k: $k\t            ~> $split(\".\")\t            ~> $map(function($v, $k, $i )\t            {\t                $v ~> $substring( 1, ($v ~> $length) -2 )\t            })\t            ~> $distinct()\t            ~> $join(\"_\")\t    }\t    :\t    {\t        $k: \"_\" & $k\t    }\t}) ~> $merge",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 230,
  "y": 380,
  "wires": [
    [
      "3f1fbebfb0adc88c"
    ]
  ],
  "_order": 21
}

module.exports = Node;