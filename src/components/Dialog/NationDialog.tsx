import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface NationDialogProps {
  open: boolean;
  imgUrl?: string;
  onClose: () => void;
}

export default function NationDialog({
  open,
  imgUrl,
  onClose,
}: NationDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      <Dialog
        maxWidth={'lg'}
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">위험지도확인</DialogTitle>
        <DialogContent
          sx={{
            textAlign: 'center',
          }}
        >
          {imgUrl && (
            <img
              style={{ width: '80%', height: '80%' }}
              src={imgUrl}
              alt="위험지도"
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
