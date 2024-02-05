const Node = {
  "id": "82e3021114461a25",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "13cb76c02d53c334",
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
      "to": "(\t    /* Find indeværende år */\t    $currentYear := $millis() ~> $fromMillis(\"[Y0001]\") ~> $number;\t\t    /* Fjern 1 år hvis det nye skoleår ikke er startet i år */\t    $currentYear := $millis() > ( yearBeginsAt ~> $toMillis(yearBeginsAt_format) )\t                    ? $currentYear-1 : $currentYear-2;\t\t    /* Skab array af årstal */\t    [startingYear..$currentYear]\t    \t    /* Ændr hvert årstal til skoleår (\"årstal/årstal+1\") */\t    ~> $map( function($v, $k)\t    {\t        [ $v ~> $string, $v+1 ~> $string ] ~> $join(\"/\")\t    })\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "dataset_schoolYears",
      "pt": "flow",
      "to": "payload",
      "tot": "msg",
      "dc": true
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
  "x": 580,
  "y": 700,
  "wires": [
    [
      "6d43f9cb03b082ce",
      "f23081bda00db1be"
    ]
  ],
  "_order": 68
}

module.exports = Node;