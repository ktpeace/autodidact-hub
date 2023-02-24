import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import {
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const Learn = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Learn</title>
        </Head>
        <SimpleGrid columns={4} spacing="5">
          <Card align="center">
            <CardBody
              _hover={{
                color: "teal.500",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3" align="center">
                <Heading size="md">Hard Science</Heading>
                <Text>
                  Learn sciences through study or hands on, from biology to
                  mechanics.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card align="center">
            <CardBody
              _hover={{
                color: "teal.500",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3" align="center">
                <Heading size="md">Sciences of Humanities</Heading>
                <Text>
                  Subjects such as psychology, philosophy, and sociology.
                  Includes history.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Link href="/learn/art">
            <Card align="center">
              <CardBody
                _hover={{
                  color: "teal.500",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align="center">
                  <Heading size="md">Art</Heading>
                  <Text>
                    Includes visual and musical arts. See "physical skills" for
                    dance.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Link>
          <Card align="center">
            <CardBody
              _hover={{
                color: "teal.500",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3" align="center">
                <Heading size="md">Literature</Heading>
                <Text>
                  All forms of fiction and artistic nonfiction, including
                  poetry.
                </Text>
              </Stack>
            </CardBody>
          </Card>{" "}
          <Card align="center">
            <CardBody
              _hover={{
                color: "teal.500",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3" align="center">
                <Heading size="md">Language</Heading>
                <Text>Linguistics and individual language study.</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card align="center">
            <CardBody
              _hover={{
                color: "teal.500",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3" align="center">
                <Heading size="md">Practical Skills</Heading>
                <Text>Everything from fire-building to baking.</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card align="center">
            <CardBody
              _hover={{
                color: "teal.500",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3" align="center">
                <Heading size="md">Physical Skills</Heading>
                <Text>Martial arts, dance, yoga, etc.</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card align="center">
            <CardBody
              _hover={{
                color: "teal.500",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3" align="center">
                <Heading size="md">Being A Human</Heading>
                <Text>
                  Meditation, social skills, self-care, and just plain becoming
                  a better person.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Layout>
    </>
  );
};

export default Learn;
