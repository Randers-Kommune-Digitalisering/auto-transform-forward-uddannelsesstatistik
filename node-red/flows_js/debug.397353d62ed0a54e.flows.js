const Node = {
  "id": "397353d62ed0a54e",
  "type": "debug",
  "z": "971a7ae6df987a48",
  "g": "27596e92bf01726a",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    $flowContext(\"metadata_tablename\"): \"datapull complete\",\t    \"schoolYear\": schoolYear,\t    \"dataRows\": payload ~> $count(),\t    \"statusCode\": statusCode,\t    \"success\": statusCode = 200 ? true : false\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1140,
  "y": 1720,
  "wires": [],
  "_order": 133
}

module.exports = Node;