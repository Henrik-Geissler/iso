/**
 * Copyright (c) 2021, Henrik Geißler.
 */
const Components = [
    {
      description:'',
      examples: [
        {
          description: 'Click on any Component to see Details, Examples and API',
          preSnippet: '',
          snippet: `yarn add handy-ui`,
          title: 'Getting started',
        },],
      name: 'Components',
      subtitle: 'explore them handy-ui components.',
    },
    {
      description: 'Fetching from APIs is sometimes a very specific scenario with a lot of context. But sometimes we just want to fetch a resource.',
      //demo:'Resource',
      examples: [
        {
          description: 'Fetch data from an API and render it when its loaded. In the render attribute we define what parts of the data should be rendered and how.',
          preSnippet: '',
          snippet: `<Resource
  src='myapi.com/users/1'
  render={data =>
    <Text>{data.name}</Text>
  }
/>`,
          title: 'Get data',
        },
        {
          description: 'Often times we want to loop over the fetched data. We can do so inside of the render property.',
          preSnippet: '',
          snippet: `
<ol>
  <Resource
    src='myapi.com/users'
    render={data =>
      data.map(eachUser =>
        <li>
          {eachUser.name}
          <b>{eachUser.company.name}</b>
        </li>
      )
    }
  />
</ol>`,
          title: 'Data handling',
        },
        {
            description: 'Optionally we can define a loading indicator.',
            preSnippet: '',
          snippet: `<Resource
  src='myapi.com/slowEndpoint'
  loadingIndicator={<CircularProgress />}
  render={data =>
    "I\'m done! Restart to see the loading indicator"
  }
/>`,
            title: 'Loading indicator',
          },
          {
              description: 'If we want to dynamically change the resource or just refetch, we just update the src.',
              preSnippet: '',
          snippet: `
const [user, setUser] = useState(1)
return (
  <>
    <Button
      onClick={() => setUser(user+1)}
    >
      Next User
    </Button>
    <Resource
      src={\`myapi.com/users/\${user}\`}
      render={data => data.name}
    />
  </>
)`,
              title: 'Reload',
            },
      ],
      name: 'Resource',
      subtitle: '90% of the Frontend Developers job in a single component.',
    },
    {
      description: '',
      problem:'Most modern browsers don\'t allow websites to autoplay audio files. That seems to be a missed opportunity.',
      solution:'The Audio Component allows you to autoplay audio files.',
      examples: [
        {
          description: 'You can play some background music.',
          preSnippet: '',
          snippet: `<Audio src='files/audio/exampleMusic' play/>
{'Nothing to see, just listen 🎶'}`,
          title: 'Autoplay Music',
        },
        {
          description: 'Provide a simple Audio Player.',
          preSnippet: '',
          snippet: `<Audio src='files/audio/exampleMusic'/>`,
          title: 'Simple Player',
        },
        {
          description: 'Control the Audio from anywhere in your App.',
          preSnippet: '',
          snippet: `<Audio src='files/audio/exampleMusic'/>`,
          title: 'Custom Audio Control',
        },
      ],
      name: 'Audio',
      subtitle: 'The web is strangely silent.',
    },
    {
      description: 'Creating documentation is fun with this Component.',
      examples: [
        {
          description: 'Highlight code in any language.',
          preSnippet: '',
          snippet: `const myCode = \`
@main-color: red;
.foo {
  /** red background **/
  background: @main-color;
}\`

<Code lang='css'>
  {myCode}
</Code>`,
          title: 'Automate syntax highlighting',
        },
        {
          description: 'Any children will not be rendered or executed. Instead the code of the component gets formatted and syntax highlighted. This is useful for debugging as well as for documentation.',
          preSnippet: '',
          snippet: `<Code lang='tsx'>
  <Text id="CodeSample">Hello World!</Text>
</Code>`,
          title: 'Print your components',
        },
      ],
      name: 'Code',
      subtitle: 'Documentation — Future you will thank you!',
    },
    {
      description: 'There are a lot of ways to keep your components easy to read. This component can help us to add a condition without the need of restructuring.',
        examples: [
        {
          description: 'Inside of JSX, without complex syntax.',
          preSnippet: '',
          snippet: `
const user = [
  {
    name: 'Prof Albert',
  },
  {
    name: 'Dr Bernhard',
    website: 'doc-bernhard.com',
  },
  {
    name: 'Mr Corens',
    website: 'corens.com',
  },
]

return (
  <>
    {user.map(({name, website}) =>
      <Card>
        <Text>{name}</Text>
        <If is={website}>
          <br/>
          <a href={website}>{website}</a>
        </If>
      </Card>
    )}
  </>
)`,
          title: 'Render conditionally',
        },
      ],
      name: 'If',
      subtitle: 'No more and no less.',
    },
    {
      description:
        'The prettiest option to provide placeholders for images in 2021 is the svg blurred primitive (aka sqip). Loving this technology, we combine it with a lazy load just before the image comes into the browsers viewport and an unblur transition when loaded. This is more recognizable on a slow network connection. You can throttle yours with the DevTools.',
        demo:'Jpg',
      examples: [
        {
          description: 'A single 148KB jpg with a 1KB (!) svg placeholder. It loads immediately, because it is in the viewport already. Reload to see the transition.',
          preSnippet: '',
          snippet: `<Jpg src='files/img/sky'/>`,
          title: 'An image',
        },
        {
          description: 'A long list of very huge Images. But the initial load for the page to be interactable and provide meaningful content for all of the images is less then 1% of the images size. The actual image is loaded when it comes into the viewport. (Scroll down!)',
          preSnippet: '',
          snippet: `[
  'sky',
  'city',
  // ...
].map(item => 
  <Jpg src={\`files/img/\${item}\`}/>
)`,
          title: 'Place as many images as you want',
        },
      ],
      name: 'Jpg',
      subtitle: 'Images are ugly, until they are loaded.',
    },
    {
      description: 'The css unit vh is relative to 1% of the viewport height. Except it isn\'t. On most mobile devices the OS nav bar is on top of the viewport. A DOM Element with a height of 100vh should fit the screen, but in a lot of cases it\'s larger than the inner height of the screen. We can use the VrProvider. It provides a css variable representing 1% of the actual inner height of the screen. The css variable can be used like this: calc(var(--vh, 1vh) * YOUR_PERCENTAGE)',
      examples: [
        {
          description: 'We only need one VhProvider in our App. We can see that these are not the same size on a mobile browser.',
          preSnippet: `
.noVhProvider {
  backgroundColor: 'tomato';
  height: '25vh';
}
.usingVhProvider {
  backgroundColor: 'darkseagreen';
  /** Fallback for browsers that don't support css vars **/
  height: '25vh';
  height: 'calc(var(--vh, 1vh) * 25)';
}`,
snippet: `<VhProvider/>

<div className='noVhProvider'>
  25vh no VhProvider
</div>
<div className='usingVhProvider'>
  25vh using VhProvider
</div>`,
          title: 'Use it',
        },
        {
          description: 'On most mobile devices, only the div using the VhProvider is completely in the viewport.',
          preSnippet: `
.noVhProvider {
  backgroundColor: 'tomato';
  height: '100vh';
}
.usingVhProvider {
  backgroundColor: 'darkseagreen';
  /** Fallback for browsers that don't support css vars **/
  height: '100vh';
  height: 'calc(var(--vh, 1vh) * 100)';
}`,
snippet: `<VhProvider/>
<Button onClick={() => setShow(!show)}>
  {show?'Hide':'Show'}
</Button>

<Fade in={show}>
  <div className='noVhProvider'>
    100vh no VhProvider
  </div>
  <div className='usingVhProvider'>
    100vh using VhProvider
  </div>
</Fade>`,
          title: 'Full height',
        },
      ],
      name: 'VhProvider',
      subtitle: 'Hopefully unnecessary one day',
    },
  ]
  
  export default Components
  