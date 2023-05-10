import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const data = [
    {
        id: 1,
        title: 'Users',
        percent: '-20%',
        icon:<PersonOutlineOutlinedIcon className='wid-icon'/>,
        view:"view more",
        number:100
    },
    {
        id: 2,
        title: 'Earning',
        percent: '-20%',
        icon:<MonetizationOnOutlinedIcon className='wid-icon'/>,
        view:"view more",
        number:100
    },
    {
        id: 3,
        title: 'Orders',
        percent: '-20%',
        icon:<ShoppingCartCheckoutOutlinedIcon className='wid-icon'/>,
        view:"view more",
        number:100
    },
    {
        id: 4,
        title: 'Balance',
        percent: '-20%',
        icon:<AccountBalanceWalletOutlinedIcon className='wid-icon'/>,
        view:"view more",
        number:100
    },

]
export default data