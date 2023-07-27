const Node = {
  "id": "1b4b06f054a726ba",
  "type": "debug",
  "z": "971a7ae6df987a48",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0 ?\t{\t    $flowContext(\"metadata_tablename\"): \"table exists\"\t}\t:\t{\t    $flowContext(\"metadata_tablename\"): \"table created\"\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 880,
  "y": 260,
  "wires": [],
  "_order": 62
}

module.exports = Node;