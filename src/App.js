
import './App.css';
import { AppBar, Box }from '@mui/material';
import{ Toolbar} from '@mui/material';
import {Typography, Button, Container} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import {DialogActions} from '@mui/material';
import {DialogContent }from '@mui/material';
import {DialogContentText} from '@mui/material';
import {DialogTitle }from '@mui/material';
import { useState } from 'react';




function App() {
const [open, setOpen] = useState(false)


const handleOpen = () => {
  setOpen(true)
}
  const handleClose = () => {
    setOpen(false)
  }



  return (
    <div className="App">

     <AppBar  position="static">
      <Toolbar>
        <Typography variant='h5'> My Material UI App</Typography>
      </Toolbar>
      </AppBar>

      <Container maxWidth="sm" >
        <Typography variant='h5' gutterBottom  > Добро пожаловать в наше приложение!</Typography>
        <Button variant="contained"
      color='primary'
      onClick={handleOpen}
        >Открыть диалоговое окно
        </Button>

<Box>
  <Dialog open= {open} onClose={handleClose}>
    <DialogTitle> Использовать Material UI?</DialogTitle>
    <DialogContent>
      <DialogContentText>
  Вы можете настроить это приложение по своему усмотрению 
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} >Закрыть </Button>
      <Button onClick={handleClose} > Применить</Button> 
    </DialogActions>
  </Dialog>
</Box>



      </Container>

    </div>
  );
}

export default App;
