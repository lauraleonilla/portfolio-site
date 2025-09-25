import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Link } from 'react-router-dom';


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function HeaderNavigation() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          aria-label='basic tabs example'
          indicatorColor='secondary'
          textColor='inherit'
        >
          <Link to={'/'}>
            <Tab label='Home' {...a11yProps(0)} />
          </Link>
          <Link to={'/blog'}>
          <Tab label='Blog' {...a11yProps(1)} />
          </Link>
             <Link to={'/about'}>
          <Tab label='About' {...a11yProps(2)} />
             </Link>
        </Tabs>
      </Box>
    </Box>
  );
}
