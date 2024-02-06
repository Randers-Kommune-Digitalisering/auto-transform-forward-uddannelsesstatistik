const Node = {
  "id": "cee01afb7b5d713a",
  "type": "debug",
  "z": "971a7ae6df987a48",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload ~> $count > 0 ?\t{\t    $flowContext(\"metadata_tablename\"): \"metadata retrieved\",\t    \"last_datapull\": payload[0]\t}\t:\t{\t    $flowContext(\"metadata_tablename\"): \"no metadata found\"\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 960,
  "y": 460,
  "wires": [],
  "_order": 124
}

module.exports = Node;