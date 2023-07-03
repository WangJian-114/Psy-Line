import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open, handleClose, handleSubmit, timeValue, handleTimeChange}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className='time_title' id="modal-modal-title" variant="h6" component="h2">
            ELIGE UN HORARIO
          </Typography>
          <form className="time_form" onSubmit={handleSubmit}>
            <div className="">
              <label className="time_label">
                Hora:
              </label>
              <input className="time_input" type="time" value={timeValue} onChange={handleTimeChange} />
            </div>
            <button className="time_button" type="submit">Confirmar</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}