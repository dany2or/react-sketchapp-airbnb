import React from "react";
import {render, Text, View} from "react-sketchapp";
import type {User} from "./types";
import {fonts, spacing} from "./designSystem";
import Profile from "./components/Profile";
import Space from "./components/Space";

const Page = ({ users }: { users: Array<User> }) => (
  <View>
    <Text style={fonts['Title 1']}>Profile Cards</Text>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: users.length * 300,
      }}
    >
      {users.map(user => (
        <Space key={user.screen_name} h={spacing} v={spacing}>
          <Profile user={user} />
        </Space>
      ))}
    </View>
  </View>
);

export default (context) => {
  const DATA = [
    {
      name: 'Nazmul Idris',
      screen_name: 'nazmul',
      description: 'Developer | Designer | Communicator | Leader | Entrepreneur',
      location: 'Mountain View, CA',
      url: 'nazmulidris.com',
      profile_image_url: 'https://i2.wp.com/developerlifecom.files.wordpress.com/2017/04/nazmul.png?ssl=1&w=450',
    },
    {
      name: 'Maret Eiland',
      screen_name: 'maret',
      description: 'Full Stack Product Designer | Coding ninja',
      location: 'Mountain View, CA',
      url: 'r3bl.com',
      profile_image_url: 'https://lh5.googleusercontent.com/R_tQfrMcNL-ofrq_T-1U-XnCdcg-fP05G-YMOfv61DegG-_74pol_6SNUhKwlRbx4fztabL7=w271',
    },
  ];

  render(<Page users={DATA} />, context.document.currentPage());
}
