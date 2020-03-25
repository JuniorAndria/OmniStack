//Crypto, será usado para gerar um iD Aleatório para a ong
const crypto = require('crypto');
//Conexão com o banco de dados
const connection = require('../database/connection');

//Exportador de módulos
module.exports = {
    /**
     * Retorna todas as ongs cadastradas
     * @param {*} request 
     * @param {*} response 
     */
    async index(request, response)
    {
        const ongs = await connection('ongs').select('*');   
        return response.json(ongs);
    },
    
    
    /**
     * Resposável por criar uma nova ONG no banco de dados
     * @param {*} request 
     * @param {*} response 
     */
    async create(request, response)
    {
        const { name, email, whatsapp, city, uf }  = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
}