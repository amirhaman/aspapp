import AppBar from '@mui/material/AppBar';
import { styled as muiStyled } from '@mui/material';

const StyledNavigationComponent = muiStyled(AppBar, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'variant' && prop !== 'sx',
  name: 'StyledNavigationComponent',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [styles.root, props.color === 'primary' && styles.primary, props.color === 'secondary' && styles.secondary],
})(({ theme, color }) => ({
  margin: '0px 0px',
  padding: '0px 0px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 9,
  minHeight: '64px',
}));

export default StyledNavigationComponent;
