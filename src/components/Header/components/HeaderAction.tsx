
import Button from '../../Button';
import {HiOutlineShoppingCart, HiOutlineUser} from 'react-icons/hi';

const HeaderAction = () => {
  return (
    <div>
        <Button variant='icon'>
          <HiOutlineShoppingCart style={{ color: 'white', width: 24, height: 24 }}  />
        </Button>
        <Button variant='icon'>
          <HiOutlineUser style={{ color: 'white', width: 24, height: 24 }} />
        </Button>
    </div>
  )
}

export default HeaderAction;