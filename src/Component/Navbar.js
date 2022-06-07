import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const [show, setShow] = React.useState(false)
    function handleClick() {
        var x = document.getElementById('id');
        if (x.style.display === "none") {
            x.style.display = "block"
            setShow(true);
        } else {
            x.style.display = "none";
            setShow(false);
        }
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit"><Link to="/" className='text-light'>Home</Link></Button>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, floateft: 0 }}>
                        </Typography>
                        <span className='button'>
                            <Button color="inherit"><Link to="/signup" className='text-light'>Signup</Link></Button>

                            {
                                user ? <Button color="inherit" onClick={() => {
                                    dispatch({
                                        type: 'Logout'
                                    })
                                    localStorage.clear();
                                }}>({user.name})Logout</Button>
                                    :
                                    <Button color="inherit"><Link to="/login" className='text-light'>Login</Link></Button>

                            }

                        </span>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleClick}
                        >
                            <div className="toggle">
                                {show ?
                                    <CloseIcon /> :
                                    <MenuIcon />
                                }
                            </div>

                        </IconButton>

                    </Toolbar>

                </AppBar>
            </Box>
            <div id="id" className='side' style={{ display: "none" }}>
                <div className='nav-links'>
                    <Button color="inherit" ><Link to="/signup" >Signup</Link></Button>
                </div>
                {
                    user ? <Button color="inherit" onClick={() => {
                        dispatch({
                            type: 'Logout'
                        })
                        localStorage.clear();
                    }}>({user.name})Logout</Button>
                        : <div>
                            <Button color="inherit" ><Link to="/login">Login</Link></Button>
                        </div>
                }

            </div>
        </>
    )
}
