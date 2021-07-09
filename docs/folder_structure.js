var chart_config = {
  chart: {
    container: "#folder_structure_container",
    rootOrientation: "NORTH",
    levelSeparation: 30,
    siblingSeparation: 20,
    subTeeSeparation: 60,
    scrollbar: "fancy",
    connectors: {
      type: "curve",
      style: {
        stroke: "#5273e7",
        "stroke-width": 3,
        "arrow-end": "block-midium-midium",
      },
    },
  },

  nodeStructure: {
    text: { name: "C: (Windows)" },
    children: [
      {
        text: { name: "Users" },
        children: [
          {
            text: { name: "bpaki" },
            children: [
              {
                text: { name: "Google Drive" },
                image: "./images/drive.svg",
                HTMLclass: "with-icon",
                link: {
                  href: "#/Könyvtárak?id=google-drive",
                },
                children: [
                  {
                    text: { name: "BPApresentation" },
                    image: "./images/folder_shared.svg",
                    HTMLclass: "with-icon",
                    link: {
                      href: "#/Könyvtárak?id=bpapresentation",
                    },
                    children: [
                      {
                        text: { name: "ProPresenter" },
                        HTMLclass: "bg-orange",
                        stackChildren: true,
                        link: {
                          href: "#/Könyvtárak?id=propresenter",
                        },
                        children: [
                          {
                            text: { name: "Configuration" },
                            HTMLclass: "bg-orange",
                          },
                          {
                            text: { name: "Libraries" },
                            HTMLclass: "bg-orange",
                            link: {
                              href: "#/Könyvtárak?id=libraries",
                            },
                          },
                          {
                            text: { name: "Media" },
                            HTMLclass: "bg-orange",
                          },
                          {
                            text: { name: "Playlist" },
                            HTMLclass: "bg-orange",
                          },
                          {
                            text: { name: "Presets" },
                            HTMLclass: "bg-orange",
                          },
                          {
                            text: { name: "Themes" },
                            HTMLclass: "bg-orange",
                            link: {
                              href: "#/Könyvtárak?id=themes",
                            },
                          },
                        ],
                      },
                      {
                        text: { name: "Aktuális", title: "dokumentumok" },
                        HTMLclass: "bg-blue",
                        link: {
                          href: "#/Könyvtárak?id=aktuális-dokumentumok",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                text: { name: "AppData" },
                children: [
                  {
                    text: { name: "Roaming" },
                    children: [
                      {
                        text: { name: "RenewedVision" },
                        HTMLclass: "bg-orange",
                        children: [
                          {
                            text: { name: "ProPresenter" },
                            HTMLclass: "bg-orange",
                            children: [
                              {
                                text: { name: "Preferences" },
                                image: "./images/folder_shared.svg",
                                HTMLclass: "bg-orange with-icon",
                                link: {
                                  href: "#/Könyvtárak?id=preferences",
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                text: { name: "Pictures" },
                children: [
                  {
                    text: { name: "Background", title: "Pictures" },
                    HTMLclass: "bg-red",
                    link: {
                      href: "#/Könyvtárak?id=background-pictures-és-videos",
                    },
                  },
                ],
              },
              {
                text: { name: "Videos" },
                children: [
                  {
                    text: { name: "Background", title: "Videos" },
                    HTMLclass: "bg-red",
                    link: {
                      href: "#/Könyvtárak?id=background-pictures-és-videos",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: { name: "Archívum" },
        HTMLclass: "bg-gray",
        link: {
          href: "#/Könyvtárak?id=archívum",
        },
        children: [
          {
            text: { name: "Archív", title: "dokumentumok" },
            HTMLclass: "bg-gray",
            link: {
              href: "#/Könyvtárak?id=archív-dokumentumok",
            },
          },
        ],
      },
    ],
  },
};
