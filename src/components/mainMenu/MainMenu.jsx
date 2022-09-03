import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BrandLogo from '../../assets/logotip.png'
import '../mainMenu/MainMenu.css'
import { BrowserRouter, BrowserRouter as Router, Link, NavLink, Route, Routes } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextareaAutosize, TextField } from '@mui/material';

const drawerWidth = 240;

function MainMenu(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const textAreaRef = React.useRef(null)
  // const [textareaValue, setTextareaValue] = React.useState('')
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const writeMeFunc = (event) => {
    // сделать в этой функции запрос на отправление
    console.log(textAreaRef.current.value, 'данные из инпута')

  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={BrandLogo} alt="Logo" style={{ width: '100%' }} />
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center', }}>
            <Link to="/companies" className="link_mobile"><ListItemText primary='Компании' /></Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <Link to="/about" className="link_mobile"><ListItemText primary='Обо мне' /></Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link to="/myWorks" className="link_mobile"><ListItemText primary='Мои работы' /></Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
          >
            <img src={BrandLogo} alt="Logo" style={{ width: '100px' }} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }}>
              <Link to="/companies" className="link">Компании</Link>
            </Button>
            <Button sx={{ color: '#fff' }}>
              <Link to="/about" className="link">Обо мне</Link>
            </Button>
            <Button sx={{ color: '#fff' }}>
              <Link to="/myWorks" className="link">Мои работы</Link>
            </Button>

          </Box>
          <button className='btn_writeMe_2' onClick={handleClickOpen}>
            НАПИСАТЬ МНЕ
          </button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Связаться со мной &#128579;</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Для того, чтобы связаться со мной, оставьте заявку и заполните поля ниже.&#128071;
              </DialogContentText>
              <TextField
                id="standard-basic"
                label="Ваше имя"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Ваш email"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextareaAutosize
                fullWidth
                aria-label="empty textarea"
                placeholder="Пожалуйста, введите своё сообщение здесь..."
                style={{ marginTop: '30px', display: 'block', width: '96%', height: '200px', resize: 'none', outline: 0, padding: '10px' }}
                ref={textAreaRef}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Отмена</Button>
              <Button onClick={writeMeFunc}>Отправить</Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'linear-gradient(red, blue)', color: '#fff', fontWeight: 900, },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box >
  );
}

MainMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainMenu;
