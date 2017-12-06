// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    ComponentPlayground,
    BlockQuote,
    Layout,
    Fill,
    Appear,
    CodePane,
    Cite,
    Link,
    Deck,
    Heading,
    ListItem,
    Image,
    List,
    Quote,
    Slide,
    Text,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const images = {
    me: require('../assets/profile.jpg'),
    js: require('../assets/jslogo.png'),
    github: require('../assets/github.png'),
    globant: require('../assets/globant.svg'),
    facebook: require('../assets/fb.png'),
    whatsapp: require('../assets/ws.png'),
    netflix: require('../assets/netflix.png'),
};

preloader(images);

const theme = createTheme(
    {
        primary: 'white',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quarternary: '#CECECE',
        green: 'rgb(164, 203, 64)',
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica',
    }
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                transition={['zoom', 'slide']}
                transitionDuration={500}
                theme={theme}
            >
                <Slide transition={['fade']} bgColor="green">
                    <Image height={500} src={images.globant.replace('/', '')} />
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Image height={200} src={images.js.replace('/', '')} />
                    <Heading size={2} caps fit textColor="secondary">
                        Functional Programming in Javascript
                    </Heading>
                    <Text
                        margin="10px 0 0"
                        textColor="tertiary"
                        textSize={30}
                        bold
                    >
                        BeerJS 2017
                    </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Image
                        height={300}
                        src={images.me.replace('/', '')}
                        style={{ borderRadius: '50%' }}
                    />
                    <Text textColor="secondary">Sebastian Vera</Text>
                    <Text textColor="green">Web UI Developer</Text>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div style={{ textAlign: 'right' }}>
                            <Image
                                height={32}
                                src={images.github.replace('/', '')}
                            />
                        </div>
                        <div
                            style={{
                                textAlign: 'left',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Link
                                href="https://github.com/sebastianvera"
                                margin="0 0 0 10px"
                                textColor="secondary"
                                textSize={20}
                            >
                                sebastianvera
                            </Link>
                        </div>
                    </div>
                </Slide>
                <Slide
                    transition={['fade']}
                    bgColor="primary"
                    textColor="tertiary"
                >
                    <Heading size={6} textColor="secondary" caps>
                        Agenda
                    </Heading>
                    <List>
                        <ListItem>Introduction</ListItem>
                        <ListItem>Pure Functions</ListItem>
                        <ListItem>Shared State</ListItem>
                        <ListItem>Immutability</ListItem>
                        <ListItem>Persistent Data Structures</ListItem>
                        <ListItem>High Order Functions</ListItem>
                        <ListItem>Q&A</ListItem>
                    </List>
                </Slide>
                <Slide
                    transition={['fade']}
                    bgColor="primary"
                    notes="<li>Facebook - spam detector en haskell</li>"
                >
                    <Heading size={6} textColor="tertiary" caps>
                        Introduction
                    </Heading>
                    <Layout>
                        <Fill>
                            <Appear fid="1">
                                <Image
                                    height={200}
                                    src={images.facebook.replace('/', '')}
                                />
                            </Appear>
                        </Fill>
                        <Fill>
                            <Appear fid="2">
                                <Image
                                    height={200}
                                    src={images.whatsapp.replace('/', '')}
                                />
                            </Appear>
                        </Fill>
                        <Fill>
                            <Appear fid="3">
                                <Image
                                    height={200}
                                    src={images.netflix.replace('/', '')}
                                />
                            </Appear>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide
                    transition={['fade']}
                    bgColor="primary"
                    textColor="tertiary"
                >
                    <Heading size={4} textColor="secondary" caps>
                        Pure Functions
                    </Heading>
                    <List>
                        <ListItem>Referential Transparency</ListItem>
                        <ListItem>Side Effects</ListItem>
                        <ListItem>Can't call impure functions</ListItem>
                    </List>
                    <Appear fid="1">
                        <div>
                            <Heading size={6} textColor="secondary">
                                Enables
                            </Heading>
                            <List>
                                <ListItem>Memoization</ListItem>
                                <ListItem>
                                    Good candidate for parallel processing
                                </ListItem>
                            </List>
                        </div>
                    </Appear>
                </Slide>
                <Slide
                    transition={['fade']}
                    bgColor="secondary"
                    textColor="primary"
                >
                    <Heading size={6} textColor="tertiary">
                        Shared State
                    </Heading>

                    <List>
                        <ListItem>Error prompt</ListItem>
                        <ListItem>Harder to debug</ListItem>
                        <ListItem>Unpredictable</ListItem>
                    </List>
                </Slide>
                <Slide
                    transition={['fade']}
                    bgColor="secondary"
                    textColor="primary"
                >
                    <Heading size={6} textColor="tertiary">
                        Immutability
                    </Heading>

                    <List>
                        <ListItem>Predictable</ListItem>
                        <ListItem>Performance cost?</ListItem>
                        <ListItem>Mutation tracking</ListItem>
                    </List>
                    <Appear fid="1">
                        <List>
                            <ListItem>Immutable.js</ListItem>
                            <ListItem>Mori</ListItem>
                        </List>
                    </Appear>
                </Slide>
                <Slide
                    transition={['fade']}
                    bgColor="secondary"
                    textColor="primary"
                >
                    <Heading size={6} textColor="tertiary">
                        Persistent Data Structures
                    </Heading>
                    <List>
                        <ListItem>Performance</ListItem>
                        <ListItem>Trees</ListItem>
                    </List>
                </Slide>
                <Slide
                    transition={['fade']}
                    bgColor="secondary"
                    textColor="primary"
                >
                    <Heading size={6} textColor="tertiary">
                        High Order Functions
                    </Heading>
                    <List>
                        <ListItem>Function that takes another function as an argument</ListItem>
                        <ListItem>Function that returns a function</ListItem>
                    </List>
                </Slide>
                <Slide
                    transition={['fade']}
                    bgColor="secondary"
                    textColor="primary"
                >
                    <Heading size={6} textColor="tertiary">
                        Q&A
                    </Heading>
                </Slide>
                <Slide transition={['fade']} bgColor="green">
                    <Image height={100} src={images.js.replace('/', '')} />
                    <Heading size={2} caps fit textColor="secondary">
                        Functional Programming in Javascript
                    </Heading>
                    <Text
                        margin="10px 0 0"
                        textColor="primary"
                        textSize={30}
                        bold
                    >
                        BeerJS 2017
                    </Text>
                    <Image
                        height={100}
                        src={images.me.replace('/', '')}
                        style={{ borderRadius: '50%' }}
                    />
                    <Image margin="15px auto" height={100} src={images.globant.replace('/', '')} />
                </Slide>
            </Deck>
        );
    }
}
