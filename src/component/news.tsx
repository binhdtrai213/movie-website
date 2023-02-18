import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { filmInformation, videoType } from './data';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function News() {
  const [value, setValue] = React.useState(0);
  const [show, setShow] = React.useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight: 'calc(100vh - 100px)' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        textColor='primary'
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', minWidth: '150px' }}
      >
        <Tab label="Video One" {...a11yProps(0)} />
        <Tab label="Video Two" {...a11yProps(1)} />
        <Tab label="Video Three" {...a11yProps(2)} />
        <Tab label="Video Four" {...a11yProps(3)} />
        <Tab label="Video Five" {...a11yProps(4)} />
        <Tab label="Video Six" {...a11yProps(5)} />
        {/* <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      {filmInformation.map((film: videoType, index: number) => 
        <TabPanel value={value} index={index}>
          <Grid container spacing={5}>
            <Grid item xs={9}>
              <div 
                style={{ position: 'relative', width: '84%', borderRadius: '5px', overflow: 'hidden' }} 
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
              >
                <img src={film.img} className="card-img-top" alt="film"/>
                {show && <div className='layer'></div>}
                {show && <NavLink to={`/watch/${film.id}`} className='hover-watch'>Watch video</NavLink>}
              </div>
            </Grid>
            <Grid item xs={3} style={{ display: 'flex', alignItems: 'center' }}>
              <img src={film.gif} className="gif-news" alt="film"/>
            </Grid>
          </Grid>
          
          <div className="card-body">
            <h5 style={{ margin: '10px 0' }}>{film.name}</h5>
            <p className="card-text">{film.description}</p>
          </div>
        </TabPanel>
      )}
    </Box>
  );
}