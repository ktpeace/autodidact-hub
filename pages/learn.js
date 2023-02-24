"use strict";
exports.__esModule = true;
var react_1 = require("react");
var head_1 = require("next/head");
var link_1 = require("next/link");
var layout_1 = require("../components/layout");
var react_2 = require("@chakra-ui/react");
var Learn = function () {
    return (<>
      <layout_1["default"]>
        <head_1["default"]>
          <title>Learn</title>
        </head_1["default"]>
        <react_2.SimpleGrid columns={4} spacing="5">
          <react_2.Card align="center">
            <react_2.CardBody _hover={{
            color: "teal.500",
            cursor: "pointer"
        }}>
              <react_2.Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" borderRadius="lg"/>
              <react_2.Stack mt="6" spacing="3" align="center">
                <react_2.Heading size="md">Hard Science</react_2.Heading>
                <react_2.Text>
                  Learn sciences through study or hands on, from biology to
                  mechanics.
                </react_2.Text>
              </react_2.Stack>
            </react_2.CardBody>
          </react_2.Card>
          <react_2.Card align="center">
            <react_2.CardBody _hover={{
            color: "teal.500",
            cursor: "pointer"
        }}>
              <react_2.Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" borderRadius="lg"/>
              <react_2.Stack mt="6" spacing="3" align="center">
                <react_2.Heading size="md">Sciences of Humanities</react_2.Heading>
                <react_2.Text>
                  Subjects such as psychology, philosophy, and sociology.
                  Includes history.
                </react_2.Text>
              </react_2.Stack>
            </react_2.CardBody>
          </react_2.Card>
          <link_1["default"] href="/learn/art">
            <react_2.Card align="center">
              <react_2.CardBody _hover={{
            color: "teal.500",
            cursor: "pointer"
        }}>
                <react_2.Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" borderRadius="lg"/>
                <react_2.Stack mt="6" spacing="3" align="center">
                  <react_2.Heading size="md">Art</react_2.Heading>
                  <react_2.Text>
                    Includes visual and musical arts. See "physical skills" for
                    dance.
                  </react_2.Text>
                </react_2.Stack>
              </react_2.CardBody>
            </react_2.Card>
          </link_1["default"]>
          <react_2.Card align="center">
            <react_2.CardBody _hover={{
            color: "teal.500",
            cursor: "pointer"
        }}>
              <react_2.Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" borderRadius="lg"/>
              <react_2.Stack mt="6" spacing="3" align="center">
                <react_2.Heading size="md">Literature</react_2.Heading>
                <react_2.Text>
                  All forms of fiction and artistic nonfiction, including
                  poetry.
                </react_2.Text>
              </react_2.Stack>
            </react_2.CardBody>
          </react_2.Card>{" "}
          <react_2.Card align="center">
            <react_2.CardBody _hover={{
            color: "teal.500",
            cursor: "pointer"
        }}>
              <react_2.Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" borderRadius="lg"/>
              <react_2.Stack mt="6" spacing="3" align="center">
                <react_2.Heading size="md">Language</react_2.Heading>
                <react_2.Text>Linguistics and individual language study.</react_2.Text>
              </react_2.Stack>
            </react_2.CardBody>
          </react_2.Card>
          <react_2.Card align="center">
            <react_2.CardBody _hover={{
            color: "teal.500",
            cursor: "pointer"
        }}>
              <react_2.Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" borderRadius="lg"/>
              <react_2.Stack mt="6" spacing="3" align="center">
                <react_2.Heading size="md">Practical Skills</react_2.Heading>
                <react_2.Text>Everything from fire-building to baking.</react_2.Text>
              </react_2.Stack>
            </react_2.CardBody>
          </react_2.Card>
          <react_2.Card align="center">
            <react_2.CardBody _hover={{
            color: "teal.500",
            cursor: "pointer"
        }}>
              <react_2.Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" borderRadius="lg"/>
              <react_2.Stack mt="6" spacing="3" align="center">
                <react_2.Heading size="md">Physical Skills</react_2.Heading>
                <react_2.Text>Martial arts, dance, yoga, etc.</react_2.Text>
              </react_2.Stack>
            </react_2.CardBody>
          </react_2.Card>
          <react_2.Card align="center">
            <react_2.CardBody _hover={{
            color: "teal.500",
            cursor: "pointer"
        }}>
              <react_2.Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" borderRadius="lg"/>
              <react_2.Stack mt="6" spacing="3" align="center">
                <react_2.Heading size="md">Being A Human</react_2.Heading>
                <react_2.Text>
                  Meditation, social skills, self-care, and just plain becoming
                  a better person.
                </react_2.Text>
              </react_2.Stack>
            </react_2.CardBody>
          </react_2.Card>
        </react_2.SimpleGrid>
      </layout_1["default"]>
    </>);
};
exports["default"] = Learn;
