import React, { useState } from 'react'

export const QrCode = () => {
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState('https://tutorjoes.in/');
  const [qrSize, setQrSize] = useState('150');

  async function generateQr(){
    setLoading(true);
    try{
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
    setImg(url);
    }
    catch(error){
      console.error(error);
    }
    finally{
      setLoading(false);
    }
  }

  function downloadQr(){
    fetch(img)
    .then(response => response.blob())
    .then(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'qrcode.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      })
  }


  return (
    <div className='app-container'>
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>Please Wait....</p>}
      {img && <img src={img} className='qr-code-image'></img>}
      <div>
        <label htmlFor='dataInput' className='input-label' >
          Enter data to generate QR code
        </label>
        <input type='text' value={qrData} id='dataInput' placeholder='Enter a link to generate qrcode' onChange={(e)=>setQrData(e.target.value)} />
        <label htmlFor='sizeInput' className='input-label'>
          Enter size to generate QR code
        </label>
        <input type='text' value={qrSize} id='sizeInput' placeholder='Example: 150' onChange={(e)=>setQrSize(e.target.value)}/>
        <button className='generate-button' onClick={generateQr}>Generate QR Code</button>
        <button className='download-button' onClick={downloadQr}>Download QR Code</button>
      </div>
    </div>
  )
}
