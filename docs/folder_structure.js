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
                            text: { line1: "Configuration" },
                            HTMLclass: "bg-orange",
                          },
                          {
                            text: { line1: "Libraries" },
                            HTMLclass: "bg-orange",
                            link: {
                              href: "#/K%C3%B6nyvt%C3%A1rak?id=libraries",
                            },
                          },
                          {
                            text: { line1: "Media" },
                            HTMLclass: "bg-orange",
                          },
                          {
                            text: { line1: "Playlist" },
                            HTMLclass: "bg-orange",
                          },
                          {
                            text: { line1: "Presets" },
                            HTMLclass: "bg-orange",
                          },
                          {
                            text: { line1: "Themes" },
                            HTMLclass: "bg-orange",
                            link: {
                              href: "#/K%C3%B6nyvt%C3%A1rak?id=themes",
                            },
                          },
                        ],
                      },
                      {
                        text: { line1: "Aktuális", line2: "dokumentumok" },
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
                text: { line1: "AppData" },
                children: [
                  {
                    text: { line1: "Roaming" },
                    children: [
                      {
                        text: { line1: "RenewedVision" },
                        HTMLclass: "bg-orange",
                        children: [
                          {
                            text: { line1: "ProPresenter" },
                            HTMLclass: "bg-orange",
                            children: [
                              {
                                text: { line1: "Preferences" },
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
                    text: { line1: "Background", line2: "Pictures" },
                    HTMLclass: "bg-red",
                  },
                ],
              },
              {
                text: { name: "Videos" },
                children: [
                  {
                    text: { line1: "Background", line2: "Videos" },
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
            text: { line1: "Archív", line2: "dokumentumok" },
            HTMLclass: "bg-gray",
          },
        ],
      },
    ],
  },
};
