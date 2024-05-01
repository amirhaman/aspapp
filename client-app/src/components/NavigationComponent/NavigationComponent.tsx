import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
// import { getUser, signOut } from '@/features/authentication/authenticationSlice';
import { ThemeModeContext } from '../../styles/ThemeContext';
import Link from 'next/link';
import StyledNavigationComponent from "./StyledNavigationComponent";
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Toolbar from '@mui/material/Toolbar';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
// import CustomButton from '../CustomButton/CustomButton';
// import CustomMainMenu from '../CustomMenu/CustomMainMenu/CustomMainMenu';
// import CustomImage from '../CustomImage/CustomImage';

// import * as logoImage from '@/assets/logo.png';

export default function NavigationComponent() {
  // const user = useSelector(getUser);
  const { currentTheme } = useContext<any>(ThemeModeContext);
  const themeUtility = useContext<any>(ThemeModeContext);

  const router = useRouter();

  // const LogOutAuthUser = async () => {
  //   await signOut();
  //   router.push('/login');
  // };

  const handleThemeChange = async () => {
    themeUtility
      .muiWrapperUtils()
      .then(() => {
        localStorage.setItem('THEME_MODE', currentTheme === 'darkTheme' ? 'lightTheme' : 'darkTheme');
      })
      .catch((err: any) => {
        return err;
      });
  };

  return (
    <StyledNavigationComponent position="static" color="primary">
      <Toolbar className="w-full px-4">
        <Grid container>
          <Grid item xs={7} md={9}>
            <Box className="w-full flex flex-row justify-start items-center" style={{ minWidth: '160px' }}>
              {/* <Link href="/" style={{ minWidth: '64px' }}>
                <CustomImage imageWidth={64} imageHeight={47} alt="img" imageLink={logoImage} sizes={'(min-width): 64px, 47px'} priority={true} />
              </Link>
              <CustomMainMenu /> */}
            </Box>
          </Grid>
          <Grid item xs={5} md={3} className="w-full flex flex-row justify-end items-center">
            {/* <Box > */}
            {/* <CustomButton id="ThemeMode_Button" className="m-0" size="small" color="primary" variant="text" ariaLabel="Theme Mode" onClick={() => handleThemeChange()}>
              {currentTheme === 'darkTheme' ? <LightModeIcon color="secondary" data-animation={true} /> : <ModeNightIcon color="secondary" data-animation={true} />}
            </CustomButton>
            {!user ? (
              <CustomButton id="LogIn_Button" className="m-0" size="small" color="primary" variant="text" ariaLabel="login" onClick={() => router.push('/login')}>
                <LoginIcon color="secondary" data-animation={false} />
              </CustomButton>
            ) : (
              <>
                <CustomButton id="Account_Button" className="m-0" size="small" color="primary" variant="text" ariaLabel="account" onClick={() => router.push('/account')}>
                  <DisplaySettingsIcon color="secondary" data-animation={false} />
                </CustomButton>
                <CustomButton id="LogOut_Button" className="m-0" size="small" color="primary" variant="text" ariaLabel="logout" onClick={() => LogOutAuthUser()}>
                  <LogoutIcon color="secondary" data-animation={false} />
                </CustomButton>
              </>
            )} */}
            {/* </Box> */}
          </Grid>
        </Grid>
      </Toolbar>
    </StyledNavigationComponent>
  );
}
