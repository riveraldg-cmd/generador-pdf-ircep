const express = require('express');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const fields = form.getFields();
fields.forEach(field => {
    console.log(field.getName());
});
app.post('/generar-pdf', async (req, res) => {
    try {
const { nombre, apellido, calle } = req.body;

        // Cargar plantilla
        const existingPdfBytes = fs.readFileSync('ircep/pdf/VPF002.pdf');
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        const form = pdfDoc.getForm();

        // Los nombres deben coincidir EXACTAMENTE con el PDF
const datosField = form.getTextField('DATOS DEL PROPIETARIO:');
const propietarioField = form.getTextField('Nombre del propietario s:');
const calleField = form.getTextField('Calle:');

datosField.setText(nombre);
propietarioField.setText(apellido);
calleField.setText(calle);

        // ❌ NO usar flatten si quieres que sigan editables
        // form.flatten();

        const pdfBytes = await pdfDoc.save();

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=formulario-completo.pdf');
        res.send(Buffer.from(pdfBytes));

    } catch (error) {
        console.error(error);
        res.status(500).send('Error generando PDF');
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});