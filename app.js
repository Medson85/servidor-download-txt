/*const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Rota para baixar o arquivo
app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'teste-uart.txt');
    
    // Verificando se o arquivo existe
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('O arquivo não existe');
            return res.status(404).send('Arquivo não encontrado');
        }

        // Enviando o arquivo como resposta
        res.download(filePath, 'teste-uart.txt', (err) => {
            if (err) {
                console.error('Erro ao baixar o arquivo:', err);
                return res.status(500).send('Erro ao baixar o arquivo');
            }
            console.log('Arquivo enviado com sucesso');
        });
    });
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`App Express está rodando!`);
});
*/

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Rota para autenticação
app.post('/login', (req, res) => {
    // Lógica de autenticação...
    res.json({ token: '123456' });
});

// Rota para baixar o arquivo
app.get('/download', (req, res) => {
    const filePath = 'C:\\Users\\medson.silva\\Desktop\\teste-uart.txt';
    
    // Verificando se o arquivo existe
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('O arquivo não existe');
            return res.status(404).send('Arquivo não encontrado');
        }

        // Enviando o arquivo como resposta
        res.download(filePath, 'teste-uart.txt', (err) => {
            if (err) {
                console.error('Erro ao baixar o arquivo:', err);
                return res.status(500).send('Erro ao baixar o arquivo');
            }
            console.log('Arquivo enviado com sucesso');
        });
    });
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`App Express está rodando!`);
});
