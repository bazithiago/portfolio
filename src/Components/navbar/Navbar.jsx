import styled from 'styled-components';
import Menu from './Menu'

const NavbarStyles = styled.div`
    /* width: 100%; */
    /* background-color: red; */
`

export default function Navbar() {
    return(
        <NavbarStyles>
            <Menu />
        </NavbarStyles>
    )
}