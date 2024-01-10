import * as React from 'react';
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
import style from './contactoDeAyuda.module.css'

export default function ContactoDeAyuda() {

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    console.log(files);
  };

  return (
    <Box
      component="form"
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
            style={{ fontWeight: 'bold'}}
            disabled
          />
          <TextField
            id="outlined-apellido"
            defaultValue="Moreno"
            placeholder="Moreno"
            disabled
          />
          <TextField
            id="outlined-number"
            label="ID de Usuario"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className={style.checks}>
          <FormControlLabel
            control={<Checkbox className={style.check1} />}
            label= 'Falta Obra Social'
          />
          <FormControlLabel
            control={<Checkbox className={style.check2} />}
            label= 'Falta especialidad prestador'
          />
          <FormControlLabel
            control={<Checkbox className={style.check3} />}
            label= 'Falta Prestación'
          />
          <FormControlLabel
            control={<Checkbox className={style.check4} />}
            label= 'Otro'
          />
        </div>
        <TextareaAutosize
          aria-label="Detalle"
          placeholder="Detalle"
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
      </div>
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <IconButton color="primary" type="submit">
          <SendIcon />
        </IconButton>
      </div>
      </div>
    </Box>
  );
}