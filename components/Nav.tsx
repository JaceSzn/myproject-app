import { LINKS } from '@/constants'
import { Link } from 'react-scroll'


const Nav = ({containerStyles, linkStyles}: navProps) => {
    
  return (
    <nav className={`${containerStyles}`}>
      {/* {LINKS.map((link) =>{
        <Link
        key={link.title}
        to={link.path}
        offset={link.offset}
        spy={true}
        smooth={true}
        duration={500}
        activeClass='active'
        className={`${linkStyles}`}
        >
            {link.title}
        </Link>
      })} */}
      <Link href='/'
      offset={-50}
      spy={true}
      smooth={true}
      duration={500}
      activeClass='active'
      className={`${linkStyles} font-extrabold`}
      >
        home
      </Link>
      <Link href='#feature'
      offset={-50}
      spy={true}
      smooth={true}
      duration={500}
      activeClass='active'
      className={`${linkStyles} font-extrabold`}
      >
        feature
      </Link>
      <Link href='/'
      offset={-50}
      spy={true}
      smooth={true}
      duration={500}
      activeClass='active'
      className={`${linkStyles} font-extrabold`}
      >
        listing
      </Link>
      <Link href='/'
      offset={-50}
      spy={true}
      smooth={true}
      duration={500}
      activeClass='active'
      className={`${linkStyles} font-extrabold`}
      >
        testimonials
      </Link>
      <Link href='/'
      offset={-50}
      spy={true}
      smooth={true}
      duration={500}
      activeClass='active'
      className={`${linkStyles} font-extrabold`}
      >

      </Link>
    </nav>
  );
};
type navProps = {
    containerStyles: string;
    linkStyles: string;
}

export default Nav
