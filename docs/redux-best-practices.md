# Redux Best Practices

Redux holds your App’s state. It is predictable and has great tooling, but might be a bit slower than something like MobX (Dan Abramov’s tweet).

React makes your UI reactive (hence its name) by treating data from your store as a fact. So you don’t have to tell your view ‘how to update the UI.’ In the same way, I also believe Redux/Flux makes your data model reactive, by treating actions as a fact, so you don’t have to tell your data model how to update themselves. — from @dtinth

## Rules

Your reducers must be pure (deterministic).

Any logic with side effects (non-deterministic) (external services, async code) belong in an action (via something like redux-thunk and/or redux-saga)

For more about the deterministic vs non-deterministic, see this Github Issue response.
Containers read a store’s data through selectors. Selectors are your “reading API” and should be co-located with their reducers.

See So you’ve screwed up your Redux store — or, why Redux makes refactoring easy
Computing Derived Data | Redux
[video] Colocating Selectors with Reducers
Use selectors everywhere. Even for the most trivial ones.

Redux should store the minimal possible state, allowing Selectors to compute derived data.

Use Reselect for selectors that need to be memoized (like derived data).

Selectors can be composed of other selectors

Normalize your data for better reducer composition

See the output of normalizr for an example

## Reducer composition

Redux houses your models and collections (of normalized models). It is better to think of it this way, instead of just one big blob of app state.

Just like Selectors and Components are composable, so too are Reducers!

Think of Redux as a tree of your reducers (like react’s render tree of components). Both are just compositions of functions.

Totally OK to have many, many reducers.

Dan’s videos:

Redux: Reducer Composition with Arrays
Redux: Reducer Composition with Objects
Redux: Reducer Composition with combineReducers()
Explains the point of combineReducers: to create the root reducer which branches off into all of your other reducers (which might branch off into children reducers of their own, and so on).

## Structure and Naming

Use Ducks

Note: Dan does not endorse ducks because it may confuse beginners into thinking actions map 1:1 to reducers. tweet
Use redux-actions

action name: <NOUN>\_<VERB>

action creator name: <verb><Noun>

selector name: get<Noun>

## Actions

DO name each action (constant) as <NOUN>\_<VERB> with the present tense
Why? For namespacing and sorting your reducers

`TODO_ADD`

DO build your action creators using redux-actions’s createAction()
Why? To reduce boilerplate and enforce FSA-compliant actions

`createAction( ‘TODO_ADD’ )`

DO name each action creator as <verb><Noun>
Why? As a convention to clearly identify what type of function it is

`const addTodo = createAction( ‘TODO_ADD’ )`

## Selectors

DO name each selector as get<Noun>
Why? As a convention to clearly identify what type of function it is
`const getTodo = (state) => state`

## Reducers

DO build your reducers using redux-actions’ handleActions()

```javascript
export default handleActions(
  {
    TODO_ADD: (state, action) => [...state, action.payload]

    // Other reducers
    // ...
    //
  },
  initialState
);
```

Why this instead of the documented switch statement? Primarily because it keeps a clean switch-like syntax, while adding block scoping to the cases. This means you can reuse variable of the names in each “case”. With switch, your cases are scoped to the switch, so you are forced to use var or unique names.

## Files

DO structure your Redux files with the Ducks pattern in a single folder (often called flux/, ducks/, or stores/). Here’s another helpful link.
Example reducer:

```javascript
import { createAction, handleActions } from "redux-actions";
//- Actions
export const addTodo = createAction("TODO_ADD");
//- State
const initialState = [];
//- Reducers
export default handleActions(
  {
    TODO_ADD: (state, action) => [...state, action.payload]
    // Other reducers
    // ...
    //
  },
  initialState
);
//- Selectors
export const getTodos = state => state;
```

## Types

If you are typing your code with Flow or Typescript, be sure to type your redux code as well!
Flow: Using Redux with Flow is a nice write-up
