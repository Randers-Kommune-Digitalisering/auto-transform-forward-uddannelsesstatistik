const Node = {
  "id": "445f839d33b983da",
  "type": "function",
  "z": "c7d12dee3aab4a6e",
  "name": "merge arrays",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 250,
  "y": 360,
  "wires": [
    [
      "eccaf45cdd0ea7a6"
    ]
  ],
  "_order": 166
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const mergedArray = [];
  msg.payload.forEach((arr) => { Array.prototype.push.apply(mergedArray, arr); })
  msg.payload = mergedArray;
  
  /*
  if(Array.isArray(msg.payload)) {
      if(Array.isArray(msg.payload[0])) {
          const mergedArray = [];
          msg.payload.forEach((arr) => { Array.prototype.push.apply(mergedArray, arr); })
          msg.payload = mergedArray;
      }
  } else throw Error('Payload not an array!')
  */
  
  return msg;
}

module.exports = Node;