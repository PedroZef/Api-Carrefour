const axios = require('axios');
const fs = require('fs');

const cep =  12248631; //seu cep

module.exports = (req, res, next) => {

    const viacep = (async() => {

        const { data } = await axios('https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq={seller_name}')


        fs.writeFile('endereco.json', JSON.stringify(data, null, 2), err => {
            
            if(err) throw new Error('algo deu errado');

            console.log('tudo certo');
        })
    })();

    next()

}







