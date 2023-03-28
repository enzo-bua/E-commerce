import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { AiOutlineLogin } from 'react-icons/ai'
import Tooltip from '@mui/material/Tooltip';
import { FaUserAlt } from "react-icons/fa";
import {userContext} from '../../Context/user'
import { useContext } from 'react';

export function MaterialDesign() {

  const { removeAuth } = useContext(userContext)


  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

 

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <FaUserAlt alt="Remy Sharp" src=""/>
              </IconButton>
            </Tooltip>
            <Menu style={{backgroundColor: 'transparent', marginLeft: '15px'}}
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              < FaUserAlt size="30px" style={{display: 'flex', marginBottom: '10px', marginLeft: '8px'}}/>
              <button style={{background: 'transparent', border: 'none'}} onClick={removeAuth}><AiOutlineLogin size="35px" /></button>

            </Menu>
 
    </>
  );
}