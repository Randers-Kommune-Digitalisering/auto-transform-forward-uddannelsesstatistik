const Node = {
  "id": "c977932510d6f420",
  "type": "change",
  "z": "971a7ae6df987a48",
  "d": true,
  "g": "13cb76c02d53c334",
  "name": "Find indeværende skoleår",
  "rules": [
    {
      "t": "set",
      "p": "currentSchoolYear",
      "pt": "msg",
      "to": "(\t    $currentYear := $millis() ~> $fromMillis(\"[Y0001]\") ~> $number;\t\t   /* Er skoleåret startet efter sommerferien? */\t    $millis() > ( yearBeginsAt ~> $toMillis(yearBeginsAt_format) ) ?\t    \t        /* Ja */\t        $currentYear & \"/\" & ($currentYear +1)\t    :\t        /* Nej */\t        ($currentYear -1) & \"/\" & $currentYear\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 290,
  "y": 720,
  "wires": [
    []
  ],
  "_order": 76
}

module.exports = Node;