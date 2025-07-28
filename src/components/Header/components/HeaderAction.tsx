
import Button from '../../Button';
import {HiOutlineShoppingCart, HiOutlineUser} from 'react-icons/hi';

const HeaderAction = () => {
  return (
    <div>
        <Button variant='icon'>
          <HiOutlineShoppingCart   />
        </Button>
        <Button variant='icon'>
          <HiOutlineUser />
        </Button>
    </div>
  )
}

export default HeaderAction;