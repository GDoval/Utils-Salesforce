/*
  
  Esta función se usó para la página de Descartes de GDM. Básicamente trae desde el controlador el Body del objeto Attachment usando este código:

  String pdfBlob = EncodingUtil.base64Encode(tmpPdf.Body);

  Donde tmpPdf es un objeto de tipo Attachment, al que se lo querea junto con su Body: [SELECT Id, Body FROM Attachment]
  
  Ese pdfBlob es lo que se le pasa a la función generarBlob. La función descargarPdf solo genera el link de descarga
  y lo asocia a un tag de tipo <a> en el DOM

  */

function generarBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;
  var byteCharacters = atob(b64Data);
  var byteArrays = [];
  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);
    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

function descargarPDF(){
  var blob = generarBlob("{!pdfBlob}", "application/pdf");
  var blobUrl = URL.createObjectURL(blob);
  var link = document.createElement('a');
  link.href = blobUrl;
  link.download = '{!nombrePDF}';
  link.dispatchEvent(new MouseEvent('click'));
}