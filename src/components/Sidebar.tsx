import { type ReactNode, type ElementType, useState } from 'react';
import { 
  type CSSObject, type Theme,
  Box, List, Drawer, ListItem, ListItemButton, ListItemIcon, 
  ListItemText, Typography, IconButton, styled
} from '@mui/material';
import {  
    Dashboard as DashboardIcon, 
    Folder as FolderIcon, 
    Assignment as AssignmentIcon, 
    Group as GroupIcon, 
    BarChart as BarCahrtIcon, 
    GridView as GridViewIcon, 
    Settings as SettingsIcon,
    Menu as MenuIcon
    
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const sidebarWidth = 250; //Sidebar 너비

interface SidebarItem {
    text: string;
    icon: ReactNode;
}

// Sidebar Open Style
const openedMixin = (theme: Theme): CSSObject => ({
  width: sidebarWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

// Sidebar Close Style
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const CustomDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: sidebarWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': {
           ...openedMixin(theme)
          }
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': {
            ...closedMixin(theme)
          }
        },
      },
    ],
  }),
);

export default function Sidebar() {

    const [selectedItem, setSelectedItem] = useState(''); //선택된 아이템 상태 
    const [open, setOpen] = useState(true); //Sidebar open 상태

    // Sidebar Open/Close 이벤트
    const sidebarOpen = () => setOpen(true);
    const sidebarClose = () => setOpen(false);

    //Menu Item 클릭 이벤트
    const menuItemClick = (item: SidebarItem) => setSelectedItem(item.text);

    //Sidebar Menu Item
    const mainMenuItems: SidebarItem[] = [
        { text: '대시보드', icon: <DashboardIcon /> },
        { text: '프로젝트', icon: <FolderIcon /> },
        { text: '작업', icon: <AssignmentIcon /> },
        { text: '팀', icon: <GroupIcon /> },
        { text: '보고서', icon: <BarCahrtIcon /> }
    ]

    //Sidebar System Menu Item
    const systemMenuItems: SidebarItem[] = [
        { text: '설정', icon: <SettingsIcon /> },
    ]

    return(
       <>
            <CustomDrawer
                variant="permanent" //Sidebar를 항상 보여줌
                open={open}
            >
                <Box 
                    sx={{ 
                        p: 2, 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2,
                        justifyContent: 'space-between'
                }}>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            justifyContent: open ? 'flex-start' : 'center',
                            width: '100%', 
                        }}
                    >
                        <IconButton 
                            size="small" 
                            onClick={sidebarOpen}
                        >
                            <GridViewIcon color="primary"/>
                        </IconButton>

                        <Typography 
                            //IDP Portal 클릭 시 메인 페이지 이동
                            component={RouterLink as ElementType} 
                            to='/'

                            variant="h5" 
                            fontWeight={700}
                            sx={{
                                color: 'inherit',
                                textDecoration: 'none',
                                '&:visited': { color: 'inherit' },
                                '&:hover': { color: 'primary.main' },
                                opacity : open ? 1 : 0,
                                width: open ? 'auto' : 0
                            }}
                        >
                            IDP Portal
                        </Typography>
                    </Box>
                    
                    <IconButton size="small" onClick={sidebarClose}>
                        <MenuIcon />
                    </IconButton>
                </Box>

                {/* Main menu */}
                <Typography 
                    variant="body2" 
                    color="text.disabled" 
                    sx={{px: 2, mt: 2, letterSpacing: '0.05em', opacity: open ? 1 : 0}}
                >
                    <b>MAIN MENU</b>
                </Typography>
                <List sx={{ px: 2}}>
                    {mainMenuItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ mb: 2}}>
                        <ListItemButton 
                            onClick={() => menuItemClick(item)} 
                            selected={selectedItem === item.text} 
                            sx={{ 
                                borderRadius: 1,
                                justifyContent: open ? 'initial' : 'center', 
                                px: open ? 2 : 1.5,
                            }}
                        >
                            <ListItemIcon 
                                sx={{ 
                                    minWidth: 0,                 
                                    mr: open ? 2 : 'auto',
                                    justifyContent: 'center',
                                    display: 'flex'
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }} primary={item.text} />
                        </ListItemButton>
                    </ListItem> 
                    ))}
                </List>
                
                {/* System menu */}
                <Box sx={{borderTop: (theme) =>  `1px solid  ${theme.palette.grey[200]}`, mt: 'auto'}}>
                    <Typography 
                        variant="body2" 
                        color="text.disabled" 
                        sx={{px: 2, mt: 2, letterSpacing: '0.05em', opacity: open ? 1 : 0}}
                    >
                        <b>SYSTEM MENU</b>
                    </Typography>
                    <List sx={{ px: 2 }}>
                        {systemMenuItems.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ mb: 1}}>
                            <ListItemButton 
                                onClick={() => menuItemClick(item)} 
                                selected={selectedItem === item.text} 
                                sx={{ 
                                    borderRadius: 1,
                                    justifyContent: open ? 'initial' : 'center', 
                                    px: open ? 2 : 1.5
                                }}
                            >
                                {/* 아이템이 선택되면 라운딩 처리 */}
                                <ListItemIcon 
                                    sx={{ 
                                        minWidth: 0,                 
                                        mr: open ? 2 : 'auto',
                                        justifyContent: 'center',
                                        display: 'flex'
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText sx={{ opacity: open ? 1 : 0 }} primary={item.text} />
                            </ListItemButton>
                        </ListItem> 
                        ))}
                    </List>
                </Box>
            </CustomDrawer>
        </>
    )
}