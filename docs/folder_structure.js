var chart_config = {
  chart: {
    container: "#folder_structure_container",
    rootOrientation: "NORTH",
    levelSeparation: 30,
    siblingSeparation: 20,
    subTeeSeparation: 60,
    scrollbar: "fancy",
    connectors: {
      type: "bCurve",
      style: {
        stroke: "#5273e7",
        "stroke-width": 3,
        "arrow-end": "block-midium-midium",
      },
    },
  },

  nodeStructure: {
    text: { name: "C:\u00a0(Windows)" },
    children: [
      {
        text: { name: "Users" },
        children: [
          {
            text: { name: "bpaki" },
            children: [
              {
                text: { name: "Documents" },
                children: [
                  {
                    text: { name: "Google Drive" },
                    image: "./images/drive.svg",
                    HTMLclass: "with-icon",
                    children: [
                      {
                        text: { name: "BPApresentation" },
                        image: "./images/folder_shared.svg",
                        HTMLclass: "with-icon",
                        children: [
                          {
                            text: { name: "ProPresenter" },
                            HTMLclass: "bg-orange",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                text: { name: "Pictures" },
                HTMLclass: "bg-red",
              },
              {
                text: { name: "Videos" },
                HTMLclass: "bg-red",
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
            text: { name: "Archív dokumentumok" },
            HTMLclass: "bg-gray",
          },
        ],
      },
    ],
  },
};
