// Flatten the Nested Array Elements
// TC & SC: O(n)

function flattenNestedArray(arr) {
  let result = [];
  let stack = [...arr];
  while (stack.length > 0) {
    const node = stack.shift();
    result.push({
      id: node.id,
      name: node.name,
      parentId: node.parentId,
    });
    if (node.children) {
      stack.unshift(...node.children);
    }
  }
  return result;
}

const nestedArray = [
  {
    id: "1R",
    name: "Retail",
    parentId: null,
    children: [
      {
        id: "1R-1",
        name: "Supermarket",
        parentId: "1R",
      },
      {
        id: "1R-2",
        name: "Wholesale Market",
        parentId: "1R",
      },
      {
        id: "1R-3",
        name: "Flea market",
        parentId: "1R",
      },
      {
        id: "1R-4",
        name: "Malls",
        parentId: "1R",
      },
    ],
  },
  {
    id: "2H",
    name: "Healthcare",
    parentId: null,
    children: [
      {
        id: "2H-1",
        name: "Clinic",
        parentId: "2H",
        children: [
          {
            id: "2H-1C-1",
            name: "Dental",
            parentId: "2H-1",
          },
          {
            id: "2H-1C-2",
            name: "Ortho",
            parentId: "2H-1",
          },
        ],
      },
      {
        id: "2H-2",
        name: "Hospital",
        parentId: "2H",
        children: [],
      },
      {
        id: "2H-3",
        name: "Diagnostic Center",
        parentId: "2H",
        children: [
          {
            id: "2H-3D-1",
            name: "Imaging Lab",
            parentId: "2H-3",
          },
          {
            id: "2H-3D-2",
            name: "Pathology Lab",
            parentId: "2H-3",
          },
        ],
      },
    ],
  },
];

const flattenedArray = flattenNestedArray(nestedArray);
console.log(flattenedArray);