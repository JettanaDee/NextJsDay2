'use client'
import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [message, setMesage] = useState('hello');

  const handleChange = () => {
    setMesage('new value');
  }

  const showAlert = async () => {
    const button = await Swal.fire({
      title: 'My Alert',
      text: 'Hello Sweet Alert',
      icon: 'question',//'success',//'warning'//'question'//'info'
      showConfirmButton: true,
      showCancelButton: true
    })

    if (button.isConfirmed){
      alert('you confirm');
      /*
      Swalfire({
      tile:
      text:
      
      })
      */
    }
  }
  return (
    <div className="test-4xl font-bold">
      <div>Hello Next.js {message}</div>
      <div>
        <input className="bg-white m-2 p-2"
        onChange={(e) => setMesage(e.target.value)}
        />
      </div>
      <button className="bg-blue-600 px-4 py-2 rounded-md"
      onClick={handleChange}>        
        click hear
      </button>
      <button onClick={showAlert} className="btn">
        Alert
        </button>
    </div>
  );
}
