"use strict";
// https://react-icons.github.io/react-icons/
// To use third-party icon libraries like react-icons, here are the steps:
exports.__esModule = true;
// Import the Icon component from @chakra-ui/react
// Pass the desired third party icon into the as prop
// // 1. Import
// import { Icon } from '@chakra-ui/react'
// import { MdSettings } from 'react-icons/md'
// // 2. Use the `as` prop
// function Example() {
//   return <Icon as={MdSettings} />
// }
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var Categories = function () {
  var typescriptPractice = function (person, subjects) {
    console.log(
      "".concat(person, "'s first subject was ").concat(subjects[0], ".")
    );
  };
  var name = "Karen";
  var subjects = ["philosophy", "horseback riding", "knitting"];
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
exports["default"] = Categories;
