export const nestedObject = {
  very: [
    {
      id: 7,
      deep: [
        {
          id: 2,
          structure: []
        },
        {
          id: 3,
          structure: [
            {
              id: 2,
              items: [
                {
                  id: 6,
                  title: 'Test item',
                  description: null,
                  retrieve: null,
                  get: null
                },
                {
                  id: 10,
                  title: 'Example item',
                  description: 'Some fancy description',
                  retrieve: null,
                  get: null
                },
                {
                  id: 11,
                  title: 'Item title',
                  description: null,
                  retrieve: 'I am reserved!',
                  get: 'I am reserved as well!'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 14,
      deep: []
    }
  ]
};
