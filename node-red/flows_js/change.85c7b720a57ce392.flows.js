const Node = {
  "id": "85c7b720a57ce392",
  "type": "change",
  "z": "c7d12dee3aab4a6e",
  "g": "f51e9394d30178a9",
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
  "x": 920,
  "y": 120,
  "wires": [
    [
      "582c226a59689bd4"
    ]
  ],
  "_order": 164
}

module.exports = Node;