import React from 'react'
import Link from '../../Link';


interface menuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    href?: string
}
const MenuItem = ({children, href = '#'}:menuItemProps ) => {
  return (
    <li>
        <Link href={href}>{children}</Link>
    </li>
  );
};

export default MenuItem;

