import React, { useState } from 'react';
import { Box, Grid, Modal, Typography } from '@mui/material';
import ButtonComponent from '@/components/ButtonComponent/ButtonComponent';
import ModalComponent from '@/components/ModalComponent.tsx/ModalComponent';

type Props = {
  id: string;
  action: 'delete' | 'edit' | 'cancel' | 'save';
  className: string;
  label: string;
  variant: 'outlined';
  color: 'warning' | 'success' | 'primary';
  onClick: (id: string) => Promise<any>;
};

export const ActivityAction = ({ id, action, className, label, variant, color, onClick }: Props) => {
  const [editModalStatus, setEditModalStatus] = useState(false);

  const handleAction = () => {
    switch (action) {
      case 'delete':
        setEditModalStatus(true);
        break;
      default:
        console.log('no action matched');
    }
  };

  const handleClose = () => setEditModalStatus(false);

  return (
    <Box>
      <ButtonComponent className={className} id={id} variant={variant} color={color} onClick={() => handleAction()}>
        {label}
      </ButtonComponent>
      <ModalComponent open={editModalStatus} onClose={handleClose} ariaLabelledBy="modal-activity-confirm-action" ariaDescribedBy="modal-activity-confirm-action">
        <Grid container className="w-full max-w-120 h-full max-h-120 flex flex-col justify-center items-center">
          <Grid item className="flex flex-row">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you syre you want to perform this action?
            </Typography>
          </Grid>
          <Grid item className="flex flex-row">
            <ButtonComponent className="mt-4 mr-4" id="close-modal" variant="outlined" color="primary" onClick={handleClose}>
              Cancel
            </ButtonComponent>
            <ButtonComponent className="mt-4" id={id} variant={variant} color={color} onClick={() => onClick(id)}>
              {label}
            </ButtonComponent>
          </Grid>
        </Grid>
      </ModalComponent>
    </Box>
  );
};

export default ActivityAction;
