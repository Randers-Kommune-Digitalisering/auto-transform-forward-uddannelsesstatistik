const Node = {
  "id": "9b76c31e7766b0c7",
  "type": "debug",
  "z": "bbeb8dfaa79c297c",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    payload.file: \"file download initiated\",\t    \"fileExists\": $globalContext(\"files\") ~> $contains(payload.file)\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 740,
  "y": 140,
  "wires": [],
  "_order": 118
}

module.exports = Node;