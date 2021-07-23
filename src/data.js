export default {
  items: [
    {
      id: "aa0b6737-a081-4d9b-8219-f19025238003",
      name: "AccordionContainer",
      props: {
        sectionHeading: {
          alignment: "left",
          isAnchorTag: false,
          title: "Accordion Group"
        },
        containerProperties: {
          stepNumber: true,
          accordionIcon: "plus-minus",
          firstAccordionOpen: false,
          paddingBottom: "60"
        }
      },
      child: [
        [
          {
            id: "432618a1-594c-48ab-9903-32404942645b",
            name: "ContainerChild",
            child: [
              [
                {
                  id: "08ee2985-7949-41b2-8674-a9096b44d220",
                  name: "AccordionItem",
                  props: {
                    accordionTitle: "Accordion Item 1",
                    bodyText: "",
                    mediaType: "none",
                    imgSrc: "",
                    altText: "",
                    youTubeID: "",
                    videoTitle: "",
                    videoName: "",
                    playButtonOverlay: false,
                    logoOverlay: "none",
                    videoDescription: "",
                    uploadDate: ""
                  },
                  child: [
                    [
                      {
                        id: "2faea129-1d25-4cd2-ad84-0f5a3c14f66b",
                        name: "ContainerChild",
                        child: [
                          [
                            {
                              id: "63c62867-2801-4ee6-97ba-09a20e9e95c0",
                              name: "Alert",
                              props: {
                                title:
                                  "Curabitur lacinia velit id ipsum pretium imperdiet.",
                                type: "Tip",
                                text: ""
                              }
                            }
                          ]
                        ],
                        containerName: "AccordionItemContainer"
                      }
                    ]
                  ],
                  isContainer: true
                },
                {
                  id: "fe12e48a-c7d0-42f5-9c2f-5ad60764dfaf",
                  name: "AccordionItem",
                  props: {
                    accordionTitle: "Accordion Item 2",
                    bodyText: "<p>Accordion Item 2 text.</p><p><br></p>",
                    mediaType: "none",
                    imgSrc: "",
                    altText: "",
                    youTubeID: "",
                    videoTitle: "",
                    videoName: "",
                    playButtonOverlay: "",
                    logoOverlay: "",
                    videoDescription: "",
                    uploadDate: "",
                    decodedHTML: "<p>Accordion Item 2 text.</p><p><br></p>"
                  },
                  child: [
                    [
                      {
                        id: "3ca7f82b-a550-48fc-b466-a72057120933",
                        name: "ContainerChild",
                        child: [
                          [
                            {
                              id: "9a133a1e-f39e-4234-a09e-826b9c2d0642",
                              name: "VideoTilesContainer",
                              props: {
                                settings: {
                                  desktopColumnLayout: "1",
                                  isLazyLoading: false,
                                  paddingBottom: "60",
                                  paddingTop: "0",
                                  videoPosition: ""
                                },
                                sectionHeading: {
                                  alignment: "left",
                                  isAnchorTag: true,
                                  title: ""
                                },
                                data: [
                                  {
                                    buttonAlignment: "",
                                    buttonVariant: "",
                                    description:
                                      "<p>Get some wood and build.</p>",
                                    fileReference:
                                      "https://lda.lowes.com/is/image/Lowes/how-to-design-a-closet-dp18-246952?scl=1",
                                    imageAltText: "How to Design a Closet",
                                    logoOverlay: "white",
                                    playButtonOverlay: true,
                                    secondary: {
                                      secLink: "",
                                      linkText: "",
                                      secondaryWindow: ""
                                    },
                                    secondaryLinkButton: false,
                                    title: "Design a Closet",
                                    uploadDate: "Fri Jul 02 2021 ",
                                    videoID: "--L2xAIV0Kg"
                                  }
                                ],
                                decodedHTML: "<p>Get some wood and build.</p>"
                              }
                            }
                          ]
                        ],
                        containerName: "AccordionItemContainer"
                      }
                    ]
                  ],
                  isContainer: true
                },
                {
                  id: "3d8bdfb9-6224-4d55-b9ec-733c2c810f91",
                  name: "AccordionItem",
                  props: {
                    accordionTitle: "Accordion Item 3",
                    bodyText: "<p><br></p>",
                    mediaType: "none",
                    imgSrc: "",
                    altText: "",
                    youTubeID: "",
                    videoTitle: "",
                    videoName: "",
                    playButtonOverlay: "",
                    logoOverlay: "",
                    videoDescription: "",
                    uploadDate: "",
                    decodedHTML: "<p><br></p>"
                  },
                  child: [
                    [
                      {
                        id: "aebf7326-a01a-454f-8d09-d586a2c9122e",
                        name: "ContainerChild",
                        child: [
                          [
                            {
                              id: "47cb8bf5-f8aa-4800-8925-c0983ff29130",
                              name: "TextBlock",
                              props: {
                                headerText: "Text block inside Accordion",
                                richText:
                                  "<p>This is a text block.</p><p><b>Bold</b>.</p><p><i>Italic</i>.</p>",
                                imageSrc:
                                  "https://lda.lowes.com/is/image/Lowes//lowes-logo-dp18-271672-mow",
                                imageAltText:
                                  "Aenean dapibus massa tellus, ac accumsan purus lobortis ac.",
                                decodedHTML:
                                  "<p>This is a text block.</p><p><b>Bold</b>.</p><p><i>Italic</i>.</p>"
                              }
                            }
                          ]
                        ],
                        containerName: "AccordionItemContainer"
                      }
                    ]
                  ],
                  isContainer: true
                }
              ]
            ],
            containerName: "AccordionContainer"
          }
        ]
      ],
      isContainer: true
    }
  ]
};
