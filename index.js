const express = require('express');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/generar-pdf', async (req, res) => {
    try {
        console.log(req.body);

        const { nombre, apellido, calle ,aField1
        ,bField2
        ,cField3  
        ,dField4 
        ,eField5  
        ,fField6  
        ,gField7
        ,hField8
        ,iField9 
        ,jField10 
        ,kField11
        ,lField12
        ,mField13  
        ,nField14 
        ,oField15  
        ,pField16 
        ,qField17 
        ,rField18 
        ,sField19 
        ,tField20
        ,uField21
        ,vField22
        ,wField23
        ,xField24
        ,yField25 
        ,zField26  
        ,aaField27 
        ,abField28
        ,acField29
        ,adField30
        ,aeField31
        ,afField32  
        ,agField33 
        ,ahField34
        ,aiField35 
        ,ajField36
        ,akField37 
        ,alField38 
        ,amField39
        ,anField40
        } = req.body;

        const existingPdfBytes = fs.readFileSync('VPF002.pdf');
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        const form = pdfDoc.getForm();

        const datosField = form.getTextField('DATOS DEL PROPIETARIO');
        const propietarioField = form.getTextField('Nombre del propietario s');
        const calleField = form.getTextField('Calle');
        const aField = form.getTextField('No Ext');
        const bField = form.getTextField('No Int');
        const cField = form.getTextField('Colonia o Fracc');
        const dField = form.getTextField('Localidad');
        const eField = form.getTextField('Municipio');
        const fField = form.getTextField('Estado');
        const gField = form.getTextField('Teléfono de Contacto');
        const hField = form.getTextField('Celular');
        const iField = form.getTextField('Correo Electrónico');
        const jField = form.getTextField('DATOS DEL INMUEBLE');
        const kField = form.getTextField('Denominación del Inmueble');
        const lField = form.getTextField('Calle_2');
        const mField = form.getTextField('No Ext_2');
        const nField = form.getTextField('No Int_2');
        const oField = form.getTextField('Colonia o Fracc_2');
        const pField = form.getTextField('Localidad_2');
        const qField = form.getTextField('Municipio_2');
        const rField = form.getTextField('Estado_2');
        const sField = form.getTextField('Superficie');
        const tField = form.getTextField('Fecha de la escritura');
        const uField = form.getTextField('Partida');
        const vField = form.getTextField('undefined');
        const wField = form.getTextField('undefined_2');
        const xField = form.getTextField('Tomo número');
        const yField = form.getTextField('Folio real electrónico');
        const zField = form.getTextField('DATOS DE LA OPERACIÓN');
        const aaField = form.getTextField('TIPO DE LA OPERACIÓNRow1');
        const abField = form.getTextField('Nombre');
        const acField = form.getTextField('Código Postal');
        const adField = form.getTextField('Teléfono');
        const aeField = form.getTextField('Distrito Judicial');
        const afField = form.getTextField('Calle_3');
        const agField = form.getTextField('Núm Exterior');
        const ahField = form.getTextField('Núm InteriorLetra');
        const aiField = form.getTextField('Colonia');
        const ajField = form.getTextField('Localidad_3');
        const akField = form.getTextField('Municipio_3');
        const alField = form.getTextField('Estado_3');
        const amField = form.getTextField('FIRMA DEL FEDATARIO PÚBLICORow1');
        const anField = form.getTextField('SELLORow1');


        datosField.setText(nombre);
        propietarioField.setText(apellido);
        calleField.setText(calle);
        aField.setText(aField1);
        bField.setText(bField2);
        cField.setText(cField3); 
        dField.setText(dField4);  
        eField.setText(eField5);  
        fField.setText(fField6);  
        gField.setText(gField7);  
        hField.setText(hField8);  
        iField.setText(iField9);  
        jField.setText(jField10);  
        kField.setText(kField11);  
        lField.setText(lField12);  
        mField.setText(mField13);  
        nField.setText(nField14);  
        oField.setText(oField15);  
        pField.setText(pField16);  
        qField.setText(qField17);  
        rField.setText(rField18);  
        sField.setText(sField19);  
        tField.setText(tField20);  
        uField.setText(uField21);  
        vField.setText(vField22);  
        wField.setText(wField23);  
        xField.setText(xField24);  
        yField.setText(yField25);  
        zField.setText(zField26);  
        aaField.setText(aaField27);  
        abField.setText(abField28);  
        acField.setText(acField29);  
        adField.setText(adField30);  
        aeField.setText(aeField31);  
        afField.setText(afField32);  
        agField.setText(agField33);  
        ahField.setText(ahField34);  
        aiField.setText(aiField35);  
        ajField.setText(ajField36);  
        akField.setText(akField37);  
        alField.setText(alField38);  
        amField.setText(amField39);  
        anField.setText(anField40);  



        const pdfBytes = await pdfDoc.save();

        res.setHeader('Content-Type', 'application/pdf');
        res.send(Buffer.from(pdfBytes));

    } catch (error) {   // 👈 aquí se cierra correctamente el try
        console.error("ERROR COMPLETO:");
        console.error(error);
        res.status(500).send(error.message);
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

