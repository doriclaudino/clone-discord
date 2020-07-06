import React from 'react';
import { Grid } from './styles';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../userList';
import ChannelData from '../ChannelData';

const Layout: React.FC = () => {
  return ( 
    <Grid>
      <ServerName />
      <ServerList />
      <ChannelInfo />
      <ChannelList />    
      <ChannelData />
      <UserInfo />  
      <UserList />
    </Grid>
  )
};

export default Layout;
