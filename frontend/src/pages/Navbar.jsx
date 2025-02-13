import React, { useState } from 'react'
import '../style/Navbar.css';

import {
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
  CForm,
  CFormInput,
  CButton
} from '@coreui/react';

function NavbarNav3Example() {
    const [visible, setVisible] = useState(false);

    return (
      <CNavbar expand="lg" className="bg-body-tertiary" fixed="top">
        <CContainer fluid>
          <CNavbarBrand className='logoImage' href="#"><img src='../../public/Logo.png'/></CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="me-auto">
              <CNavItem>
                <CNavLink className="nav-menu-links" href="#" active>Home</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="nav-menu-links" href="#" active>Link</CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle className="nav-menu-links">Dropdown</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink href="#" disabled>Disabled</CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">Search</CButton>
              
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
    );
}

export default NavbarNav3Example;
