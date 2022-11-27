# My Dev Notes
## Refactoring:

- optimize section and content pages (filtering and pagination redundancy)

## DisplayDots Animation:

The idea is to have the animation work with responsive design, where:
  a. the string can have flex wrap (requires segmenting the string into words)
  b. size can shrink and grow based on viewport

###### Notes to Self:
- find out how to work around nested mapping
- find out how to avoid rerendering for following approach 

#### Part 2: Approach to updating DotCell Styling

##### Updating Styles

1. In DotCell Component: Create a local state 'active' with type boolean.
2. In DotCell Styled Component: Create conditional styling logic based on active state.
3. In DotCell Component: have a useEffect that watches for changes in deactivatedCoords context state.
  i. If a change occurs, check if the last coord in the array matches the DotCell's coord. If it does, change the 'active' state to false.