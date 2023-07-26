const Node = {
  "id": "4b1e76de258feceb",
  "type": "function",
  "z": "971a7ae6df987a48",
  "name": "Konvertér til xlsx",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "xlsx",
      "module": "csvtoxlsxconverter"
    }
  ],
  "x": 600,
  "y": 660,
  "wires": [
    [
      "b936a17457cc0393"
    ]
  ],
  "_order": 27
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, xlsx) {
  xlsx('inputfile.csv', 'outputfile.xlsx',
      
      function ()
      {
          console.log("converted");
      }
  
  );
  
  return msg;
}

module.exports = Node;