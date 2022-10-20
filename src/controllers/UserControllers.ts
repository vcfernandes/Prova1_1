import { Request, Response } from 'express';
const Users = require('../users.json');
const Lista = require('../users.json');
const BuscarIdade = require('../users.json');
const BuscarSexo = require('../users.json');
const BuscarId = require('../users.json');


/**
 * Use o conteúdo da variável `Users` para desenvolver os métodos necessários
 */

export default {
    index(request, response) {
  
    },
    async find(request, response) {
        const { nome,sobrenome} = request.body;
        
},

};
    
