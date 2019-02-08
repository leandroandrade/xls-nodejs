'use strict';

const express = require('express');
const router = express.Router();

const xl = require('excel4node');

router.get('/', createXlsFile);


function createXlsFile(req, res) {
    const wb = new xl.Workbook();
    const ws = wb.addWorksheet('Sheet 1');

    const style = wb.createStyle({
        // font: {
        //     color: '#1611ff',
        //     size: 12,
        // },
        numberFormat: '$#,##0.00; ($#,##0.00); -',
    });

    const users = [
        { name: 'John Carter', color: 'red', fruit: 'apple' }
    ];

    ws.cell(1, 1)
        .string('Name')
        .style(style);

    ws.cell(1, 2)
        .string('Color')
        .style(style);

    ws.cell(1, 3)
        .string('Fruit')
        .style(style);

    for (let i = 0; i < users.length; i++) {
        const { name, color, fruit } = users[i];

        ws.cell(2, 1)
            .string(name)
            .style(style);

        ws.cell(2, 2)
            .string(color)
            .style(style);

        ws.cell(2, 3)
            .string(fruit)
            .style(style);
    }

    ws.cell(3, 1)
        .string('Footer Sheet')
        .style(style);

    wb.write('users-data.xlsx', res);
}

module.exports = router;
