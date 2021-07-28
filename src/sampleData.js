export const itemsListNested = [
  {
    id: "1",
    name: "Accordiancontainer",
    props: {
      text: "Accordiancontainer"
    },
    child: [
      [
        {
          id: "2",
          name: "containerChild",
          containerName: "Accordiancontainer",
          child: [
            [
              {
                id: "3",
                name: "Accordianchild1",
                props: {
                  text: "Accordianchild1"
                },
                child: [
                  [
                    {
                      id: "4",
                      name: "containerChild",
                      containerName: "Accordianchild1",
                      child: [
                        [
                          {
                            id: "5",
                            name: "AccordianChild2",
                            props: {
                              text: "AccordianChild2"
                            },
                            child: [
                              [
                                {
                                  id: "6",
                                  name: "containerChild",
                                  containerName: "AccordianChild2",
                                  child: [
                                    [
                                      {
                                        id: "7",
                                        name: "Textblock",
                                        props: {
                                          text: "Textblock"
                                        }
                                      }
                                    ]
                                  ]
                                }
                              ]
                            ]
                          }
                        ]
                      ]
                    }
                  ]
                ]
              }
            ]
          ]
        }
      ]
    ]
  }
];

export const itemListProp = [
  {
    id: "1",
    name: "AccordianContainer",
    props: {
      text: "AccordianContainer"
    },
    child: [
      [
        {
          id: "2",
          name: "containerChild",
          child: [
            [
              {
                id: "3",
                name: "AccordianChild1",
                props: {
                  text: "AccordianChild1"
                },
                child: [
                  [
                    {
                      id: "4",
                      name: "containeChild",
                      containerName: "AccordianChild1",
                      child: [
                        [
                          {
                            id: "5",
                            name: "TextBlockWrapper",
                            props: {
                              text: "rohit"
                            }
                          }
                        ]
                      ]
                    }
                  ]
                ]
              },
              {
                id: "6",
                name: "containeChild",
                containeName: "AccordianChild2",
                child: [
                  [
                    {
                      id: "7",
                      name: "VideoWrapper",
                      props: {
                        text: "VideoWrapper"
                      }
                    }
                  ]
                ]
              }
            ]
          ]
        }
      ]
    ]
  }
];
