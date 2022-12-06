# My Dev Notes

## Refactoring:

- optimize section and content pages (filtering and pagination redundancy)

###### To-Do:

1. General
- Add Grid Layout to Content Pages
- Mini displayDots for Navbar
- Custom Checkbox Styling (look into external libraries)

2. Features
- PostPage: Next/Prev/Random Post Navigation Component (Might require use of context)

3. Refactor / Optimization
- Combining Content, Section, and Category Page Components into a single component
- use useMemo to avoid rerendering (see: https://alexsidorenko.com/articles)
- create placeholder image in scenario where user is offline
- have dots animation wrap
- remove category and section from frontmatter, refer strictly to slug whenever referencing caategory and/or section
- refactor: replacing any with strict types

4. Dark Mode
- Using the following link and implementing with context: https://codesandbox.io/s/dark-mode-final-4ocvs?from-embed=&file=/src/App.js
- Other: https://www.topcoder.com/thrive/articles/implementing-dark-mode-in-next-js-with-emotion

- https://www.section.io/engineering-education/dark-mode-for-react-app-using-context-api-and-hooks/#When-to-use-React's-Context-API-instead-of-Redux
https://medium.com/lets-make-something-up/creating-light-dark-mode-on-a-react-app-with-context-589a5465f639
- https://emotion.sh/docs/theming


- create context for switching darkMode
- create button that will trigger the change in global darkMode context\

questions
- how to make the switch most efficiently across all styling