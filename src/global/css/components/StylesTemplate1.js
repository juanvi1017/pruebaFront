import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

export const drawerWidth = 260;

export const stylesTemplate1 = makeStyles((theme) => ({
    BlueColor:{
        color:'#3498db'
    },
    expandLeftPlace: {
      width: '80%',
      backgroundColor: 'white',
      height: '100%!important',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    MainDeleteMarginLeft:{
      [theme.breakpoints.down('sm')]: {
        marginLeft: '0px!important'
      },
    },
    ReduceFontSizeOfTittle: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px!important'
      },
    },
    ToolBarStyle:{
        backgroundColor: '#3498db', 
        display: 'flex'
    },
    ColorWhiteIcons:{
        color:'#ffffff'
    },
    MenuStyles:{
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
        },
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        },
    },
    DrawerStyles:{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        },
    },
    DrawerHeaderStyles:{
        backgroundColor: '#3498db', 
        color: '#ffffff'
    },
    DrawerListStyles:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: '5px'
    },
    textOfTitleCourse:{
        fontSize: '18px!important', 
        fontWeight: '500!important'
    },
    textOfDescriptionCourse:{
        fontSize: '12px!important', 
        fontWeight: 'thin', 
        color: '#c3c0bc'
    },
    ListItemIconStyles:{
        width: '24px',
        height: '24px',
        textAlign: 'center',
        color: '#ffffff',
        borderRadius: '100%'
    },
    ListItemTextFont:{
        fontSize: '12px!important' 
    },
    ListItemTypographyFont:{
        fontSize: '14px!important', 
        fontWeight: 'thin'
    }
}));

export const stylesTemplate1SectionMain = makeStyles((theme) => ({
    BackgroundSectionMain:{
        height: 'calc(100vh - 56px)',
        backgroundColor: '#131313'
    },
    FirstSectionMain:{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        padding: '20px',
        backgroundColor: '#131313'
    },
    FirstSectionMainLeft:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    FirstSectionTittleLeft:{
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            display: 'none!important',
        },
    },
    FirstSectionMainRight:{
        width: '20%',
        height: '100%',
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none!important',
        },
    },
    FirstSecionMainRightButtons:{
        display:'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    FirstSecionMainRightButtonsBack:{
        backgroundColor: '#3498db',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px'
    },
    FirstSecionMainRightButtonsNext:{
        backgroundColor: '#3498db',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px'
    },
    FirstSectionMainRightMobile:{
        width: '100%',
        marginTop:'20px',
        display: 'none',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            display: 'flex'
        },
    },
    FirstSecionMainRightButtonsMobile:{
        display: 'none',
        alignItems: 'center', 
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'flex'
        },
    },
    FirstSecionMainRightButtonsNextMobile:{
        backgroundColor: '#3498db',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px'
    },
    FirstSecionMainRightButtonsBackMobile:{
        backgroundColor: '#3498db',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px'
    },
    Description:{
        width: '100%', 
        color: '#3498db', 
        backgroundColor: '#131313', 
        padding: '20px'
    },
    DescriptionHtml:{
        width: '100%', 
        marginTop: '50px', 
        color: '#3498db'
    },
    SectionMainFirstMount:{
        width: '100%',
        height: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            height: 'calc(100vh - 56px)',
        },
    },
    SectionPresentationOfCourse:{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#131313',
    },
    SectionPresentationOfCourseBox:{
        width: '500px',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#202020',
        borderRadius: '20px'
    },
    SectionPresentationText:{
        color: '#3498db',
        fontSize: '1.125rem!important',
        fontWeight: '700!important',
        lineHeight: '1.75rem!important',
        marginBottom: '.5rem!important'
    },
    SectionPresentationTextDescription:{
        color: '#3498db',
        fontSize: '1rem!important',
        lineHeight: '1.75rem!important',
        marginBottom: '.5rem!important'
    }
}))

export const stylesTemplate1ClientHome = makeStyles((theme) => ({
    BlueColor:{
        color:'#3498db'
    },
    SectionMain:{
        backgroundColor: '#131313',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '64px',
        height: 'calc(100vh - 64px)',
        [theme.breakpoints.down('xs')]: {
            marginTop: '56px',
            height: 'calc(100vh - 56px)',
        },
    },
    SectionMainMiddleBox:{
        marginTop:'20px',
        width: '1200px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    SectionMainMiddleBoxTittle:{
        display: 'flex',
        alignItems: 'center',
        flexDirection:'column'
    },
    SectionMainMiddleBoxName:{
        color: '#3498db',
        fontSize: '1.125rem!important',
        fontWeight: '700!important',
        lineHeight: '1.75rem!important',
        marginBottom: '.5rem!important'
    },
    SectionMainMiddleBoxDescription:{
        color: '#3498db',
        fontSize: '1rem!important',
        lineHeight: '1.5rem!important',
        marginBottom: '1rem!important'
    },
    SectionMainBoxGraph:{
        backgroundColor: '#202020',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '25px',
        height: '250px',
        margin: '10px'
    },
    SectionMainBoxCourses:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    SectionMainBoxCoursesTittle:{
        color: '#3498db',
        fontSize: '1.125rem!important',
        fontWeight: '700!important',
        lineHeight: '1.75rem!important',
        marginBottom: '.5rem!important',
        padding: '15px'
    },
    SectionMainBoxCoursesCards:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
}))

export const stylesTemplate1Loading = makeStyles((theme) => ({
    boxLoading:{
        display: 'flex', 
        width: '100vw', 
        height: 'calc(100vh - 68px)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '68px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '60px',
            height: 'calc(100vh - 58px)',
        },
    },
    boxLoadingMenu:{
        display: 'flex', 
        width: '100%', 
        height: 'calc(100vh - 64px)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            height: 'calc(100vh - 56px)',
        },
    }
}))

export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );
  
export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));