import React,{ReactNode,useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import {Code, If, Space} from 'handy-ui'
import Components from '../Components/Components';
import Demo from '../Demo/Demo';
import { Box, Link, Button } from '@material-ui/core';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

interface Props {
    children: ReactNode
}

export default function ResponsiveDrawer(props: Props) {
  const { children } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [load,setLoad] = useState(0)
    const [openComponent, setOpenComponent] = React.useState(0);
    const component = Components[openComponent]
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Divider />
      <List>
        {Components.map(({name}, index) => (
          <ListItem button key={name} onClick={() => {handleDrawerToggle();setOpenComponent(index)}}>
            <ListItemText primary={name}/>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <CssBaseline />
        <link href="css/prism-coldark-cold.css" rel="stylesheet" />
      <AppBar position="fixed" style={{backgroundColor: 'white',
    color: 'black'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{marginLeft:'20px'}}>
            {'handy-ui > '} {component.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav>
          <Drawer
            variant="temporary"
            anchor={'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
      </nav>
      <main className='handy-spacing' style={{marginTop:'100px',marginBottom:'20px'}}>
          <Typography variant="h4" noWrap>
            {component.name}
          </Typography>
          <Typography variant="h6">
            Motivation: <i>"{component.subtitle}"</i>
          </Typography>
          <Typography variant="body1">
            {component.description}
          </Typography>
          <If is={component.problem}>
            <Typography variant="h6">
                {'The Problem:'}
            </Typography>
            <Typography variant="body1">
                {component.problem}
            </Typography>
          </If>
          <If is={component.solution}>
            <Typography variant="h6">
                {'The Solution:'}
            </Typography>
            <Typography variant="body1">
                {component.solution}
            </Typography>
          </If>
          <If is={component.demo}>
            <Typography variant="body1">
                {'See this in a live '}<Link href='demo/Jpg' target='_blank'>Demo</Link>
            </Typography>
          </If>
          {component.examples.map((item,index)=>{return (<>
          <Paper className='handy-spacing' style={{ marginTop:'30px'}}>
            <Typography variant="h5">
                {item.title}
            </Typography>
            <Typography variant="body1">
                {item.description}
            </Typography>
            <Box className='handy-box' flexDirection="row" style={{display:'flex',marginBottom:'30px', marginTop:'30px'}}>
                <div className='handy-code'>
                    <If is={item.preSnippet!==''}>
                      <Code lang='css' >{item.preSnippet}</Code>
                      <br/>
                    </If>
                    <Code lang='tsx' >{item.snippet}</Code>
                </div>
                <Paper
                    variant="outlined"
                    className='handy-spacing'
                    style={{
                        marginLeft:'auto',
                        marginRight:'auto',
                        marginTop:'auto',
                        marginBottom:'auto',
                        overflow:'scroll',
                        maxHeight:'80vh',
                        borderStyle:'dashed',
                        borderWidth:'2px',
                        transition: '1s ease',
                    }}
                >
                    <Demo demo={`${component.name}: ${item.title}`} setOpenComponent={(aha) => setOpenComponent(aha)} load={load}/>
                </Paper>
            </Box>
            <Button onClick={() => {setLoad(load+1)}}>Reload</Button>
            </Paper>
            </>)}
            )}
            <If is={component.demo}>
              <Typography variant="body1" style={{marginTop:'30px'}}>
                  {'See this in a live '}<Link href='demo/Jpg' target='_blank'>Demo</Link>
              </Typography>
            </If>
      </main>

  <Divider />
    </div>
  );
}
