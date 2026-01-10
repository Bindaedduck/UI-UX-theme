import { Box, Typography, Avatar, IconButton,  AppBar, Toolbar } from '@mui/material';
import { 
    HelpOutlineOutlined as HelpIcon, 
    NotificationsNoneOutlined as NotificationsIcon
} from '@mui/icons-material';

interface Option{
    mainMenu: string;
    subMenu: string;
}

export default function Topbar(props: Option) {
    return (
        <AppBar
            position="sticky" //Topbar 고정
            elevation={0}
            sx={{
                p: 0.3,
                bgcolor: '#fff',
                borderBottom: '1px solid #eaeef3',
                color: 'text.primary',
                flexShrink: 0
            }}
        >
            <Toolbar sx={{ height: 65, px: 4, display: 'flex', alignItems: 'cneter'}}>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 0.5,  
                        whiteSpace: 'nowrap',
                        minWidth: 250, //좌측 contents 최소너비 확보
                        overflow: 'hidden',
                    }}>
                    <Typography variant="body1" color="text.secondary" noWrap>
                        {props.subMenu}&nbsp; / &nbsp;
                    </Typography>

                    <Typography variant="body1" color="text.primary" noWrap>
                        <b>{props.mainMenu}</b>
                    </Typography>
                </Box>
                
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1, 
                        ml: 'auto', //우측 정렬 
                        flexShrink: 0
                    }}>
                     <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    
                    <IconButton>
                        <HelpIcon />
                    </IconButton>

                    <IconButton>
                        <Avatar sx={{ width: 32, height: 32 }} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}