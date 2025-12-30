import { useState, type ReactNode, type ElementType } from 'react';
import { 
  Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Stack, Paper
} from '@mui/material';
import {  
    Dashboard as DashboardIcon, 
    Folder as FolderIcon, 
    Assignment as AssignmentIcon, 
    Group as GroupIcon, 
    BarChart as BarCahrtIcon, 
    GridView as GridViewIcon, 
    Settings as SettingsIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export const sidebarWidth = 240;

interface sidebarItem {
    text: string;
    icon: ReactNode;
}

export default function Sidebar() {

    const [selectedItem, setSelectedItem] = useState(''); //선택된 아이템 State

    const mainMenuItems: sidebarItem[] = [
        { text: '대시보드', icon: <DashboardIcon /> },
        { text: '프로젝트', icon: <FolderIcon /> },
        { text: '작업', icon: <AssignmentIcon /> },
        { text: '팀', icon: <GroupIcon /> },
        { text: '보고서', icon: <BarCahrtIcon /> }
    ]

    const systemMenuItems: sidebarItem[] = [
        { text: '설정', icon: <SettingsIcon /> },
    ]

    const handleListItemClick = (item: sidebarItem) => {
        setSelectedItem(item.text);
    }

    return(
       <>
            <Drawer
                variant="permanent" //Sidebar를 항상 보여줌
                sx={{
                    width: sidebarWidth,
                    flexShrink: 0, //Sidebar 크기가 줄어들지 않게 고정
                    '& .MuiDrawer-paper': { width: sidebarWidth }
            }}>
               
                <Box 
                    /* 로고 클릭하면 메인페이지로 이동 */
                    component={RouterLink as ElementType} 
                    to='/'
                    
                    sx={{ 
                        p: 3, 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1, 
                        color: 'inherit',
                        textDecoration: 'none',
                        '&:visited': { color: 'inherit' },
                        '&:hover': { color: 'primary.main' }
                }}>
                    <GridViewIcon color="primary" />
                    <Typography variant="h5" fontWeight={700}>IDP Portal</Typography>
                </Box>

                {/* Main menu */}
                <Typography variant="body2" color="text.disabled" sx={{px: 2, mt: 2, letterSpacing: '0.05em'}}>
                    <b>MAIN MENU</b>
                </Typography>
                <List sx={{ px: 2}}>
                    {mainMenuItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ mb: 2}}>
                        <ListItemButton onClick={() => handleListItemClick(item)} 
                        selected={selectedItem === item.text} sx={{ borderRadius: 1 }}>
                        {/* 아이템이 선택되면 라운딩 처리 */}
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem> 
                    ))}
                </List>
                
                {/* System menu */}
                <Box sx={{borderTop: (theme) =>  `1px solid  ${theme.palette.grey[200]}`, mt: 'auto'}}>
                    <Typography variant="body2" color="text.disabled" sx={{px: 2, mt: 2, letterSpacing: '0.05em'}}>
                        <b>SYSTEM MENU</b>
                    </Typography>
                    <List sx={{ px: 2 }}>
                        {systemMenuItems.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ mb: 1}}>
                            <ListItemButton onClick={() => handleListItemClick(item)} 
                            selected={selectedItem === item.text} sx={{ borderRadius: 1 }}>
                            {/* 아이템이 선택되면 라운딩 처리 */}
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem> 
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}