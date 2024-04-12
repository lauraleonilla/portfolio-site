import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
          <Tab label='Home' {...a11yProps(0)} />
        </Tabs>
      </Box>
    </Box>
  );
}
