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