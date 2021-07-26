import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button, IconButton, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';

function NavBar() {
  const headerButtons = [
    {
      label: 'PRODUTOS',
      href: '/products'
    },
    {
      label: 'MEUS PEDIDOS',
      href: '/orders' 
    },
  ]

  // const { headerButtons } = this.props;
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Tabs indicatorColor="secondary" textColor="secondary">
            {headerButtons.map(({ label, href }) => (
              <Tab label={label} href={hreaf} />
            ))}
            <Tab label="PRODUTOS" href="/login" />
            <Tab label="MEUS PEDIDOS" href="/trash" />
          </Tabs>
          <Typography>User</Typography>
          <IconButton>
            <Button size="large" variant="contained" color="secondary">Sair</Button>
          </IconButton>
        </Toolbar>
      </AppBar>
      <p>Barra</p>
    </>
  );
}

export default NavBar;
