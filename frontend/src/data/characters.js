// images
import ShikiImage from "/characterimages/Shiki.png";
import ArcuiedImage from "/characterimages/Arcuied.png";

// videos
import ShikiUB from "/charactermedia/Shiki/ShikiUB.mp4";
import ShikiSlide from "/charactermedia/Shiki/ShikiSlide.mp4";
import ShikiPressure from "/charactermedia/Shiki/ShikiPressure.mp4";

export const characters = [
  {
    name: "Shiki Tohno",
    archetype: "Rushdown",
    dp: "623B, 623C",
    image: ShikiImage,
    knowledge: [
      {
        id: "5[C]",
        title: "5[C] Unblockable",
        description:
          "Shiki's 5[C] is an unblockable. You cannot block or low shield this move, you have to high shield it. He can still shield back after the shield.",
        media: ShikiUB,
      },
      {
        id: "214X",
        title: "214X Pressure",
        description:
          "Shiki's slide advances him forward to continue pressure. This slide is -3 (214A) or -1 (214B) but each has a followup that allows him to frametrap. So you have to guess between a slide pressure reset or a slide with a followup.",
        media: ShikiSlide,
      },
      {
        id: "Rebeat",
        title: "Fast Rebeat Pressure",
        description:
          "Shiki has really fast and strong normals. 5B is -2, 2B is -3 with great stagger window, and 2C is 7f sweep. Be wary when contesting his pressure.",
        media: ShikiPressure,
      },
    ],
  },

  {
    name: "Arcuied Brunestud",
    archetype: "Rushdown",
    dp: "22B, 22C",
    image: ArcuiedImage,
    knowledge: [
      {
        id: "5[B]",
        title: "5[B] Overhead",
        description: "Arcuied's 5[B] is an overhead, so be prepared for it.",
        media: "",
      },
      {
        id: "5[C]",
        title: "5[C] Unblockable",
        description:
          "Arcuied's 5[C] is unblockable. You cannot block or low shield this move, you have to high shield it.",
        media: "",
      },
      {
        id: "236X~X~4X",
        title: "236X~X~4X Rekka Mix",
        description:
          "Arcuied final rekka followup can either be low or high. Be ready to react to this.",
        media: "",
      },
      {
        id: "236[A]",
        title: "236[A] Plus",
        description:
          "Arcuied's 236[A] is plus and vacuums you. You want to try your best to shield this special on reaction.",
        media: "",
      },
      {
        id: "214A",
        title: "214A Variably Plus",
        description:
          "Arcuied's 214A is plus depending on spacing. Further she is, the more plus 214A becomes",
        media: "",
      },
    ],
  },
];
