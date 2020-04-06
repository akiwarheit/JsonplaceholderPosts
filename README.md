# JsonplaceholderPosts

Written using `react-native`, tested on both iOS & Android.

## Considerations

There were a couple of considerations I had when I started the project.

1. Do I need unit & snapshot tests?
2. Do I need storybook?
3. Do I need redux? (and should I use redux-saga?)
4. How do I incorporate good 12factor practices in this exam?
5. Do I follow atomic design?
5. Do I structure using a straightforward variant of `ducks` or follow domain-driven folder structure?

In the end - I ended up with a simple solution using component state instead of redux, no unit tests (as there are no domain-specific logic), no snapshot tests (I designed on the fly), no 12factor (too complex), followed atomic design (but lacking `organisms`), and used a variant of `ducks` following domain-driven folder structure. (see: https://github.com/erikras/ducks-modular-redux)

## Running

Extra setup requried for setting up : Android Studio & XCode for Android & iOS respectively.

1. Clone the project
2. `yarn`
3. `react-native run-ios` or `react-native run-android`

![Posts](https://raw.githubusercontent.com/akiwarheit/JsonplaceholderPosts/master/Screen%20Shot%202020-03-31%20at%2012.24.25%20PM.png)
![Comments](https://raw.githubusercontent.com/akiwarheit/JsonplaceholderPosts/master/Screen%20Shot%202020-03-31%20at%2012.24.36%20PM.png)
