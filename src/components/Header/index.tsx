
import HeaderList from "./components/HeaderList";
import HeaderListItem from "./components/HeaderListItem";
import Logo from "../Logo";
import HeaderLinks from "./components/HeaderLinks";
import HeaderAction from "./components/HeaderAction";
import HeaderFormFilters from "./HeaderFormFilter";


const Header = () => {
    return (
        <header>
            <HeaderList>
                <HeaderListItem>
                 <Logo src='/Logo.png' />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderLinks />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderFormFilters />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderAction />
                </HeaderListItem>
            </HeaderList>
        </header>
    );
};


    export default Header;
