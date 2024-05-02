import React from 'react';
import { Box, Grid, Modal, Typography } from '@mui/material';
import StyledModalComponent from './StyledModalComponent';

type Props = {
  open: boolean;
  onClose: () => void;
  ariaLabelledBy: string;
  ariaDescribedBy: string;
  children: React.JSX.Element
}

export const ModalComponent = ({open, onClose, ariaLabelledBy, ariaDescribedBy, children}: Props ) => {
  return (
    <StyledModalComponent hideBackdrop={true} open={open} onClose={onClose} aria-labelledby={ariaLabelledBy} aria-describedby={ariaDescribedBy}>
        <Box className="w-full h-full flex flex-col justify-center items-center">
          {open && children}
        </Box>
      </StyledModalComponent>
  )
}

export default ModalComponent;
