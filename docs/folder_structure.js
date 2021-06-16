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
                  href: "#/K%C3%B6nyvt%C3%A1rak?id=google-drive",
                },
                children: [
                  {
                    text: { name: "BPApresentation" },
                    image: "./images/folder_shared.svg",
                    HTMLclass: "with-icon",
                    link: {
                      href: "#/K%C3%B6nyvt%C3%A1rak?id=bpapresentation",
                    },
                    children: [
                      {
                        text: { name: "ProPresenter" },
                        HTMLclass: "bg-orange",
                        stackChildren: true,
                        link: {
                          href: "#/K%C3%B6nyvt%C3%A1rak?id=propresenter",
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
                              href: "#/K%C3%B6nyvt%C3%A1rak?id=libraries",
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
                              href: "#/K%C3%B6nyvt%C3%A1rak?id=themes",
                            },
                          },
                        ],
                      },
                      {
                        text: { name: "Aktuális", title: "dokumentumok" },
                        HTMLclass: "bg-blue",
                        link: {
                          href:
                            "#/K%C3%B6nyvt%C3%A1rak?id=aktu%c3%a1lis-dokumentumok",
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
                  },
                ],
              },
              {
                text: { name: "Videos" },
                children: [
                  {
                    text: { name: "Background", title: "Videos" },
                    HTMLclass: "bg-red",
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
        children: [
          {
            text: { name: "Archív", title: "dokumentumok" },
            HTMLclass: "bg-gray",
          },
        ],
      },
    ],
  },
};
