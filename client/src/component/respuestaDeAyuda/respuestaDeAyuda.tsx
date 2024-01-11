import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useLocation } from 'react-router-dom';
import style from './respuestaDeAyuda.module.css'

export default function RespuestaConsulta() {
  const location = useLocation();
  const [consultaInfo, setConsultaInfo] = React.useState({
    nombre: '',
    apellido: '',
    usuario: '',
    descripcion: '',
    opcionesSeleccionadas: {
      faltaObraSocial: false,
      faltaEspecialidadPrestador: true,
      faltaPrestacion: false,
      otro: false
    },
  });

  // Función para enviar la respuesta
  const enviarRespuesta = () => {
    // Aquí deberías implementar la lógica para enviar la respuesta
    console.log('Respuesta enviada:', consultaInfo);
  };

  // Función para manejar el cambio de estado de las opciones de los checkboxes
  const handleCheckboxChange = (event) => {
    setConsultaInfo({
      ...consultaInfo,
      opcionesSeleccionadas: {
        ...consultaInfo.opcionesSeleccionadas,
        [event.target.name]: event.target.checked,
      },
    });
  };

  // Obtener la información de la consulta del estado de ubicación
  React.useEffect(() => {
    const { state } = location;
    if (state && state.consultaInfo) {
      setConsultaInfo(state.consultaInfo);
    }
  }, [location]);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1.5, width: '58ch', backgroundColor: 'white' },
        display: 'flex',
        flexDirection: 'column',
        width: '40vw',
        height: '52vw',
        border: '2px solid black',
        borderRadius: '5px',
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        padding: '2em'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-nombre"
        label="Marcos"
        type="text"
        defaultValue={consultaInfo.nombre}
        disabled
      />
      <TextField
        id="outlined-apellido"
        label="Moreno"
        defaultValue={consultaInfo.apellido}
        disabled
      />
      <TextField
        id="outlined-usuario"
        label="marcosnm"
        type="text"
        defaultValue={consultaInfo.usuario}
        disabled
      />
      <FormGroup className={style.checkGroup}>
        <FormControlLabel
          control={<Checkbox checked={consultaInfo.opcionesSeleccionadas.faltaObraSocial} onChange={handleCheckboxChange} name="faltaObraSocial" />}
          label="Falta Obra Social/Prepaga"
        />
        <FormControlLabel
          control={<Checkbox checked={consultaInfo.opcionesSeleccionadas.faltaEspecialidadPrestador} onChange={handleCheckboxChange} name="faltaEspecialidadPrestador" />}
          label="Falta especialidad Prestador"
        />
        <FormControlLabel
          control={<Checkbox checked={consultaInfo.opcionesSeleccionadas.faltaPrestacion} onChange={handleCheckboxChange} name="faltaPrestacion" />}
          label="Falta Prestación"
        />
        <FormControlLabel
          control={<Checkbox checked={consultaInfo.opcionesSeleccionadas.otro} onChange={handleCheckboxChange} name="otro" />}
          label="Otro"
        />
      </FormGroup>
      <div style={{ display:'flex', border: '1.5px solid black', borderRadius: '5px', marginBottom: '1em', marginLeft: '0.8vw', width: '58ch'}}>
        <h2 style={{ top: '1.3em'}}>Detalle de consulta:</h2>
        <p>
          El motivo de la consulta es blablaba lbalblabnla lafnnalfnal banknfanoasn va
        </p>
      </div>
      <TextareaAutosize
        aria-label="Respuesta"
        placeholder="Responder la consulta..."
        minRows={4}
        style={{ width: '68ch', marginBottom: '1.5rem', marginLeft: '0.8em' }}
        onChange={(e) => setConsultaInfo({ ...consultaInfo, respuesta: e.target.value })}
      />
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <IconButton color="primary" onClick={enviarRespuesta}>
          <SendIcon />
        </IconButton>
      </div>
    </Box>
  );
}
