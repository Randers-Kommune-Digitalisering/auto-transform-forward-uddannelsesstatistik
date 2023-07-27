const Node = {
  "id": "82e3021114461a25",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Find alle skoleår \\n fra startingYear til nu",
  "rules": [
    {
      "t": "set",
      "p": "latestData_schoolYear",
      "pt": "msg",
      "to": "payload[0].schoolYear",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(\t    /* Find indeværende år */\t    $currentYear := $millis() ~> $fromMillis(\"[Y0001]\") ~> $number;\t\t    /* Fjern 1 år hvis det nye skoleår ikke er startet i år */\t    $currentYear := $millis() > ( yearBeginsAt ~> $toMillis(yearBeginsAt_format) )\t                    ? $currentYear : $currentYear-1;\t\t    /* Skab array af årstal */\t    [startingYear..$currentYear]\t    \t    /* Ændr hvert årstal til skoleår (\"årstal/årstal+1\") */\t    ~> $map( function($v, $k)\t    {\t        [ $v ~> $string, $v+1 ~> $string ] ~> $join(\"/\")\t    })\t)",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "startingYear",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "yearBeginsAt",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "yearBeginsAt_format",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 540,
  "wires": [
    [
      "f23081bda00db1be",
      "6d43f9cb03b082ce"
    ]
  ],
  "_order": 50
}

module.exports = Node;