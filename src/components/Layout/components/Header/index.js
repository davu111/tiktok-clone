import classNames from 'classnames/bind';
import sytles from './Header.module.scss';

const cx = classNames.bind(sytles);

function Header() {
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}></div>
      </header>
   );
}

export default Header;
