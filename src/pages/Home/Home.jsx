import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import '../Home/Home.css';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import service from '../../service/service'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function BoxSx() {

  const obj = new service();

    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Mumbai");
    
    
  useEffect(() => {
    obj.getCity(search).then((response)=>{
    console.log(response);
    
}).catch((error)=>{
    console.log(error);
   })
})

  return (
      <div className="container">
          <Box className="box">
          <div className="search">
            <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <div ><CloseIcon className="closeIcon"/></div>
          </div>
            
            <div className="bottom-sec">
                <h2 className="location">
                <LocationOnIcon className="locationIcon"/>Pune</h2>
                <h1 className="temp">London</h1>
                <h3 className="tempmin_max"> Min : 5.34 Cel | Max : 6.45 Cel</h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </Box>
      </div>
    
  );
}
