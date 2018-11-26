const fs = require('fs');

const controller = {
  readFile: async () => {
    return new Promise((resolve, reject) => {
      fs.readFile('model.json', 'utf8', (err, response) => {
        if (err) reject(err);
        else resolve(response);
      });
    });
  },

  writeFile: async data => {
    return new Promise((resolve, reject) => {
      fs.writeFile('model.json', JSON.stringify(data), (err, response) => {
        if (err) reject(err);
        else resolve(response);
      });
    });
  },

  findOne: async id => {
    let data = await controller.readFile();
    data = JSON.parse(data);
    return data[id];
  },

  delete: async id => {
    let data = await controller.readFile();
    data = JSON.parse(data);
    delete data[id];
    const newdata = await controller.writeFile(data);
    return newdata;
  },

  update: async (id, req) => {
    let data = await controller.readFile();
    data = JSON.parse(data);
    if (data[id] != null) {
      data[id] = req.body;
      const newdata = await controller.writeFile(data);
      return newdata;
    } else {
      return null;
    }
  }
};

module.exports = controller;
