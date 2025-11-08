# Display Dots Animation

A text animation component that renders text as a dot-matrix display with an animated reveal effect. The animation works by deactivating inactive dots one by one, creating a visual effect where the text appears to be "written" in dots.

## Overview

The Display Dots Animation converts text strings into a grid-based dot display, where each character is represented by a set of coordinates that define which dots should be active. The animation randomly deactivates inactive dots at regular intervals, creating a visual reveal effect.

## Features

- **Text-to-Dots Conversion**: Converts any text string into a dot-matrix representation
- **Animated Reveal**: Randomly deactivates inactive dots to create a reveal animation
- **Restart Functionality**: Optional restart button to replay the animation
- **Character Dictionary**: Supports uppercase letters A-Z, numbers 0-9, and special characters (!, ?, :, -, /, ., space)
- **Automatic Spacing**: Handles word spacing and character spacing automatically
- **Context-Based State Management**: Uses React Context for animation state management

## Architecture

### Component Hierarchy

```
DisplayDotsAnime (Main Component)
├── DotWord (Word/Space Container)
    └── DotChar (Character Container)
        └── DotRow (Row Container)
            └── DotCell (Individual Dot)
```

### Key Files

- **`DisplayDotsAnime.tsx`**: Main component that orchestrates the animation
- **`getCoords.ts`**: Core logic for coordinate calculation and grouping
- **`DisplayDotsCoordsContext.tsx`**: React Context for animation state management
- **`displayDotsDict.ts`**: Character dictionary with coordinate definitions
- **`DotWord.tsx`**: Component for rendering words and spaces
- **`DotChar.tsx`**: Component for rendering individual characters
- **`DotRow.tsx`**: Component for rendering rows of dots
- **`DotCell.tsx`**: Component for rendering individual dots

## Usage

### Basic Usage

```tsx
import DisplayDotsCoordsProvider from "../context/DisplayDotsCoordsContext";
import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";

function MyComponent() {
  return (
    <DisplayDotsCoordsProvider>
      <DisplayDotsAnime text="HELLO WORLD" />
    </DisplayDotsCoordsProvider>
  );
}
```

### With Restart Button

```tsx
<DisplayDotsCoordsProvider>
  <DisplayDotsAnime 
    text="RIV.SYSTEMS" 
    includeRestartButton={true} 
  />
</DisplayDotsCoordsProvider>
```

### Props

| Prop                 | Type    | Default        | Description                                    |
| -------------------- | ------- | -------------- | ---------------------------------------------- |
| `text`               | string  | "DISPLAY DOTS!"| The text to display (automatically uppercased) |
| `includeRestartButton` | boolean | undefined      | Whether to show a restart button               |

## How It Works

### 1. Text Processing

The component takes a text string and:
- Converts it to uppercase
- Splits it into words
- Processes each character using the character dictionary

### 2. Coordinate Calculation

The `getCoords.ts` module performs several key operations:

#### Character to Coordinates
- Each character in the dictionary has:
  - `width`: The width of the character in grid units
  - `coordinates`: An array of `[y, x]` coordinate pairs defining active dots

#### Coordinate Positioning
- Characters are positioned horizontally with spacing
- Words are separated by additional spacing
- Coordinates are offset based on character position

#### Gap Detection
The system identifies gaps between characters and words:
- **Preceding Gaps**: Dots before the first character in a row (x < 0)
- **Proceeding Gaps**: Dots between characters or at the end of rows

#### Coordinate Grouping
Coordinates are organized in multiple ways:
- **By Character**: All coordinates grouped per character
- **By Word and Space**: Coordinates grouped by words and spaces
- **By Row**: Coordinates grouped by Y-coordinate (row)

### 3. Animation Logic

The animation works in reverse - it starts with all dots visible and deactivates inactive dots:

1. **Initial State**: All dots (active and inactive) are rendered
2. **Animation Start**: Inactive coordinates are shuffled randomly
3. **Deactivation**: At regular intervals (12.5ms), one inactive dot is deactivated
4. **Completion**: When all inactive dots are deactivated, the animation ends

### 4. State Management

The `DisplayDotsCoordsContext` manages:
- `deactivatedCoords`: Array of coordinates that have been deactivated
- `inactiveCoords`: Array of inactive coordinates to be deactivated
- `animeEnded`: Boolean indicating if animation is complete
- `startAnime()`: Function to start the animation
- `restartAnime()`: Function to restart the animation

## Character Dictionary

The `displayDotsDict` contains definitions for:
- **Letters**: A-Z (uppercase only)
- **Numbers**: 0-9
- **Special Characters**: !, ?, :, -, /, ., (space)

### Character Definition Format

```typescript
{
  width: number,           // Character width in grid units
  coordinates: number[][]  // Array of [y, x] coordinate pairs
}
```

### Coordinate System

- **Y-coordinate**: Row (0 = top row)
- **X-coordinate**: Column (0 = leftmost column)
- Coordinates use `[y, x]` format (row first, then column)

### Example: Character 'A'

```typescript
A: {
  width: 5,
  coordinates: [
    [0, 1], [0, 2],  // Top row
    [1, 0], [1, 3],  // Second row
    [2, 0], [2, 1], [2, 2], [2, 3],  // Middle row
    [3, 0], [3, 3],  // Fourth row
    [4, 0], [4, 3],  // Bottom row
  ],
}
```

## Core Functions

### `getAllCoords(string: string): IAllCoords`

Calculates all coordinates (active and inactive) for a given string.

**Returns:**
```typescript
{
  allCoords: number[][],      // All coordinates (active + inactive)
  activeCoords: number[][],   // Coordinates that form the text
  inactiveCoords: number[][]  // Coordinates in gaps/empty spaces
}
```

### `groupCoordsByChar(string: string)`

Groups coordinates by individual character.

**Returns:** A hashtable where keys are character X-coordinate ranges (e.g., "0-4") and values contain:
- `allCoords`: All coordinates for the character
- `allCoordsByRow`: Coordinates grouped by row
- `activeCoords`: Active coordinates for the character
- `inactiveCoords`: Inactive coordinates for the character

### `groupCoordsByWordAndSpace(string: string)`

Groups coordinates by words and spaces, maintaining the structure of the original text.

**Returns:** An array of arrays, where each inner array represents a word or space group.

## Animation Timing

- **Interval**: 12.5ms between dot deactivations
- **Duration**: Varies based on the number of inactive coordinates
- **Formula**: `duration = inactiveCoords.length × 12.5ms`

## Styling

The component uses styled-components for styling. Key styled components:
- `DisplayDotsBox`: Container for the dot grid
- `Dot`: Individual dot element (supports `isDeactivated` prop)
- `Box`: Outer container

## Limitations

1. **Character Support**: Only supports characters defined in `displayDotsDict`
2. **Case Sensitivity**: Text is automatically converted to uppercase
3. **Character Width**: Characters have fixed widths (no proportional spacing)
4. **Grid Size**: Character height is fixed (typically 5 rows)

## Extending the Dictionary

To add support for new characters:

1. Open `constants/dictionaries/displayDotsDict.ts`
2. Add a new entry with:
   - `width`: Character width in grid units
   - `coordinates`: Array of `[y, x]` coordinate pairs

Example:
```typescript
'@': {
  width: 5,
  coordinates: [
    [0, 1], [0, 2],
    [1, 0], [1, 3],
    [2, 0], [2, 1], [2, 2], [2, 3],
    [3, 0], [3, 2], [3, 3],
    [4, 1], [4, 2],
  ],
}
```

## Dependencies

- **React**: For component rendering
- **lodash**: For `groupBy` utility function
- **styled-components**: For styling
- **Custom Hooks**: `useInterval` for animation timing
- **Custom Utils**: `shuffleArr` for randomizing dot order

## Related Files

- `lib/display-dots-animation/getCoords.ts`: Core coordinate logic
- `context/DisplayDotsCoordsContext.tsx`: Animation state management
- `constants/dictionaries/displayDotsDict.ts`: Character definitions
- `interfaces/IAllCoords.ts`: Type definitions
- `interfaces/IDisplayDotsChar.ts`: Character type definitions
- `hooks/useInterval.tsx`: Animation interval hook
- `utils/common/shuffleArr.ts`: Array shuffling utility

