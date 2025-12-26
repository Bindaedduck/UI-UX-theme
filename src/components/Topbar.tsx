import { 
  Box, Typography, Avatar, IconButton,  AppBar, Toolbar, 
} from '@mui/material';
import { HelpOutlineOutlined, NotificationsNoneOutlined } from '@mui/icons-material';

interface Option{
    sidebarWidth: number;
    mainMenu: string;
    subMenu: string;
}

export default function Topbar(props: Option) {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                p: 0.3,
                bgcolor: '#fff',
                borderBottom: '1px solid #eaeef3',
                color: 'text.primary',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                left: `${props.sidebarWidth}px`,
                width: `calc(100% - ${props.sidebarWidth}px)`,
            }}
        >
  
            <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
                {/* 왼쪽과 오른쪽에 content 배치 */}

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="body1" color="text.secondary">
                    {props.subMenu}&nbsp; / &nbsp;
                    </Typography>

                    <Typography variant="body1" color="text.primary">
                    <b>{props.mainMenu}</b>
                    </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                     <IconButton sx={{ '&:focus': { outline: 'none' }}}>
                        <NotificationsNoneOutlined />
                    </IconButton>
                    
                    <IconButton sx={{ '&:focus': { outline: 'none' }}}>
                        <HelpOutlineOutlined />
                    </IconButton>

                    <IconButton sx={{ '&:focus': { outline: 'none' }}}>
                        <Avatar sx={{ width: 32, height: 32 }} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}