const Node = {
  "id": "fae186651921580a",
  "type": "debug",
  "z": "971a7ae6df987a48",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    $flowContext(\"metadata_tablename\"): \"datapull complete\",\t    \"schoolYear\": schoolYear,\t    \"dataRows\": payload ~> $count(),\t    \"statusCode\": statusCode,\t    \"success\": statusCode = 200 ? true : false\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1000,
  "y": 1140,
  "wires": [],
  "_order": 101
}

module.exports = Node;