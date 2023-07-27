const Node = {
  "id": "f8c26cdb9fa70b0f",
  "type": "debug",
  "z": "971a7ae6df987a48",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningCount > 0 ? \t{\t    $flowContext(\"metadata_tablename\"): \"error inserting new metadata\",\t    \"error\": error,\t    \"metadata\": meta\t}\t:\t{\t    $flowContext(\"metadata_tablename\"): \"meta data inserted\",\t    \"metadata\": meta\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1120,
  "y": 1180,
  "wires": [],
  "_order": 77
}

module.exports = Node;