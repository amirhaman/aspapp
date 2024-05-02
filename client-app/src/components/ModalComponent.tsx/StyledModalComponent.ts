import { Modal } from '@mui/material';
import { styled as muiStyled } from '@mui/material';

const StyledModalComponent = muiStyled(Modal, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'color',
  name: 'StyledModalComponent',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [styles.root, props.color === 'primary' && styles.primary, props.color === 'secondary' && styles.secondary],
})(({ theme, color }) => ({
  backgroundColor: theme.palette.background.default,
}));

export default StyledModalComponent;
