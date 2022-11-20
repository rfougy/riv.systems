For Post Page:

- Adding Recommendations Component
- Adding next/prev post navigation

Other:

- Have search feature work on mobile

DisplayDots Animation:

1.  Create the HTML structure.
    a. 3 components used: DotRow and DotCell

         // map through each group of coordinates
         <DotChar>
          <DotRow>
            // map through each coordinate in group
            <DotCell coord={[0,0]}>
            <DotCell coord={[0,1]}>
            <DotCell coord={[0,2]}>
            ...
          </DotRow>
         </DotChar>

2.  Method for animation
    1... via DisplayDotsAnimation Component 6. setInterval every x milliseconds, select an inactive coord from list of inactive coordinates.
    a. Set coordToDeactivate state to the selected inactive coord.
    b. remove the selected inactive coord from the list. 7. clearInterval once list of inactive coordinates is empty.
    2... via DotCell Component 8. create a useEffect that watches for changes in coordToDeactivate. 9. if the coord for the DotCell matches the coord in coordToDeactivate, change the styling to have the dot "dissapear" in the UI.
