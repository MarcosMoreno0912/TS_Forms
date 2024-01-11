import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import style from './contactoDeAyuda.module.css'

export default function ContactoDeAyuda() {
  const navigate = useNavigate()

  const [formData, setFormData] = React.useState({
    nombre: 'Marcos',
    apellido: 'Moreno',
    usuario: 'marcosnm',
    faltaObraSocial: false,
    faltaEspecialidadPrestador: true,
    faltaPrestacion: false,
    otro: false,
    detalle: 'El motivo de la consulta es blablaba lbalblabnla lafnnalfnal banknfanoasn va',
    files: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Aquí puedes realizar la llamada al backend para enviar los datos
      // Supongamos que utilizas axios para hacer la llamada al servidor
      // Reemplaza la siguiente línea con tu lógica de llamada al backend
       const responseData = await axios.post('/api/enviarConsulta', formData);

      // Lógica de respuesta simulada para el ejemplo
      const response = { status: 'success' };

      if (response.status === 'success') {
        toast.success('Formulario enviado exitosamente');
      } else {
        toast.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      toast.error('Error al enviar el formulario');
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleOnClick = () => {
    navigate('/respuestaConsulta')
  }

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    console.log(files);
    setFormData({
      ...formData,
      files,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1.5, width: '38ch', backgroundColor: 'white' },
        display: 'flex',
        flexDirection: 'column',
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5ch', border: '2px solid black', borderRadius: '5px', backgroundColor: '#F1FF99', padding: '2.5ch', marginTop: '2em', width: '78vw'  }}>
        <div style={{ display: 'flex' }}>
          <TextField
            id="outlined-nombre"
            placeholder="Marcos"
            defaultValue="Marcos"
            value={formData.nombre}
            onChange={handleChange}
            style={{ fontWeight: 'bold'}}
            disabled
          />
          <TextField
            id="outlined-apellido"
            defaultValue="Moreno"
            placeholder="Moreno"
            value={formData.apellido}
            onChange={handleChange}
            disabled
          />
          <TextField
            id="outlined-usuario"
            defaultValue="marcosnm"
            placeholder="marcosnm"
            value={formData.usuario}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className={style.checks}>
          <FormControlLabel
            control={<Checkbox className={style.check1} name="faltaObraSocial" checked={formData.faltaObraSocial} onChange={handleChange} />}
            label= 'Falta Obra Social'
          />
          <FormControlLabel
            control={<Checkbox className={style.check2} name="faltaEspecialidadPrestador" checked={formData.faltaEspecialidadPrestador} onChange={handleChange} />}
            label= 'Falta especialidad prestador'
          />
          <FormControlLabel
            control={<Checkbox className={style.check3} name="faltaPrestacion" checked={formData.faltaPrestacion} onChange={handleChange} />}
            label= 'Falta Prestación'
          />
          <FormControlLabel
            control={<Checkbox className={style.check4} name="otro" checked={formData.otro} onChange={handleChange} />}
            label= 'Otro'
          />
        </div>
        <TextareaAutosize
          aria-label="Detalle"
          placeholder="Detalle"
          value={formData.detalle}
          onChange={handleChange}
          minRows={4}
          style={{ width: '140ch', marginBottom: '1.5rem', marginLeft: '1.7ch' }}
        />
        <div style={{ display: 'flex' }}>
        <TextField
          id="outlined-adjunto"
          type="file"
          onChange={handleFileInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <AttachFileIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {formData.files && (
          <div style={{ marginLeft: '1rem', marginTop: '1.5rem', color: 'black' }}>
            Archivo seleccionado: {formData.files[0].name}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <IconButton color="primary" type="submit" aria-label="Enviar">
          <SendIcon />
        </IconButton>
      </div>
      </div>
      <>
      <IconButton color="secondary" type="arrow" onClick={handleOnClick}>
        <SendIcon />
      </IconButton>
    </>
    </Box>
  );
}