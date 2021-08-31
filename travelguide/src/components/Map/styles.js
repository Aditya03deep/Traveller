import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
  },
  mapContainer: {
    height: '80vh',
    width: '100%',
    backgroundColor: '#2f3542',
    marginTop: '2.5rem',
    boxShadow:"5px 6px 8px #888888",
    [theme.breakpoints.down('sm')]:{
      marginLeft: theme.spacing(2) 
    }
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
}));