# DOM Questions

1. Difference between virtual DOM and real DOM:
   Virtual DOM:

   - changes made easily
   - Minial memory wastage
   - JSX elements is updated if the elements exist
   - Cannot update HTML directly
   - Faster updates
     Real DOM:
   - changes are expensive
   - High demand of memory and more wastage
   - Creates new DOM everytime and element gets updated
   - Able to directly manipulate HTML
   - Slow updates

2. What is Virtual DOM ?

- A virtual DOM is javascript object which is corresponding copy if the real DOM
- It can be considered as a node tree that consist of elements, their attributes, and other properties.
- Using a render function in React, it creates a node tree and updates it based on the changes that are made in the data model.
- These changes are usually triggered by user or the actions caused by the system.
