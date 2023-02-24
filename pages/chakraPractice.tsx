// https://react-icons.github.io/react-icons/
// To use third-party icon libraries like react-icons, here are the steps:

// Import the Icon component from @chakra-ui/react
// Pass the desired third party icon into the as prop
// // 1. Import
// import { Icon } from '@chakra-ui/react'
// import { MdSettings } from 'react-icons/md'

// // 2. Use the `as` prop
// function Example() {
//   return <Icon as={MdSettings} />
// }
import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Link,
  Text,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  TabList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const Categories = () => {
  const typescriptPractice = (person: string, subjects: Array<string>) => {
    console.log(`${person}'s first subject was ${subjects[0]}.`);
  };

  let name = "Karen";
  let subjects = ["philosophy", "horseback riding", "knitting"];
  typescriptPractice(name, subjects);

  return (
    <>
      <Tabs align="center">
        <TabList>
          <Tab>
            <Link href="/">Home</Link>
          </Tab>
          <Tab>
            <Link href="/learn">Learn</Link>
          </Tab>
          <Tab>
            <Link href="/community">Community</Link>
          </Tab>
          <Tab>
            <Wrap>
              <WrapItem>
                <Avatar name="Sample User" src="https://bit.ly/sage-adebayo" />
              </WrapItem>
            </Wrap>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Home</p>
          </TabPanel>
          <TabPanel>
            <p>Learn</p>
          </TabPanel>
          <TabPanel>
            <p>Community</p>
          </TabPanel>
          <TabPanel>
            <p>Sign Up</p>
            <p>Log In</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <h1>Categories</h1>
    </>
  );
};

export default Categories;
