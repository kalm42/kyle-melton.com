---
templateKey: blog-post
title: How to test Redux connected React components
description: Ugh, higher-order components. I'm not a fan, I've never been a fan
  but they exist. They're all up in our code bases and they need to be tested
  like everything else. Like video games I go for 100%. Sometimes that means odd
  tests to make sure that I get some random edge case because some else clause
  isn't covered in tests.
tags:
  - testing
thumbnail: /img/how-to-test-redux-connected-react-components.png
date: 2021-02-17T22:26:11.434Z
---
Ugh, higher-order components. I'm not a fan, I've never been a fan but they exist. They're all up in our code bases and they need to be tested like everything else. Like video games I go for 100%. Sometimes that means odd tests to make sure that I get some random edge case because some else clause isn't covered in tests.

This is how to mock the redux state so that it get injected into your redux connected components.

## Component to test

```javascript
// App.js
import { connect } from 'reat-redux'

const App = props => <div>{props.user}</div>

const mapStateToProps = state => state

export default connect(mapStateToProps)(App)
```

I know, it's amazing. Look at that elegance, the beauty in the simplicity. But go with it, pretend there's some complex logic and we need to get to some edge case. Now for the how we do that.

First up, extend the render method from `@testing-library/react`. Shout out to Kent C Dodds. His [testing javascript](https://testingjavascript.com/) course is how I learned testing. You should buy it. Go now, pay the man. Tangent over.

We extend the render method to provide an initial state for the store. BOOM injected. The Emeril of render extensions — because of the boom. Anyway. 

```javascript
// render-util.js
import React from 'react'
import { render } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducer' // <- that's your reducer

function extRender(
  ui, {
    initialState, 
    store = createStore(reducer, initialState),
    ...renderOptions,
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{ children }</Provider>
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

export default extRender
```

Then we take the extended render and use it to inject the initial state.

```javascript
// App.test.js
import React from 'react'
import { screen } from '@testing-library/react'
import extRender from '../render-util'
import App from './App

describe('App', () => {
  it('should show the user name', () => {
    const name = `LOREM IPSUM`
    extRender(<App>, { initialState: { user: name } })
    
    expect(screen.getByText(name)).toBeInTheDocument()
  })
})
```

## Sources

Most of this code has been straight up copied from [Redux.js.org](https://redux.js.org/recipes/writing-tests) I've copied it here for my convienence. You should without a doubt go to that url and read what redux has to say about redux they are the official source.

Photo by [Museums Victoria](https://unsplash.com/@museumsvictoria?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/school?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)