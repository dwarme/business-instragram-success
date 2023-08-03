import { ICreativeFilter } from "types";

const creativeFilters: ICreativeFilter[] = [
  {
    title: "Industry",
    name: "industry",
    values: [
      "Automotive",
      "B2B",
      "Consumer goods",
      "E-commerce",
      "Education",
      "Entertainment and media",
      "Financial services",
      "Gaming",
      "Health and pharmaceuticals",
      "Charities and organisations",
      "Professional services",
      "Restaurants",
      "Retail",
      "Sports",
      "Technology",
      "Telecommunication",
      "Travel",
    ],
  },
  {
    title: "Goal",
    name: "goal",
    values: [
      "Drive online sales",
      "Increase in-store sales",
      "Promote your app",
      "Raise brand awareness",
      "Generate leads",
    ],
  },
  {
    title: "Product",
    name: "product",
    values: [
      "Ads with product tags",
      "Advantage+ shopping campaigns",
      "branded content ads",
      "Carousel ad",
      "Checkout",
      "Live shopping",
      "Photo ad",
      "Product launches (drops)",
      "Product tagging",
      "Reels ad",
      "Shopping for Custom Audiences",
      "Shops",
      "Stories ad",
      "video ad",
    ],
  },
  {
    title: "Region",
    name: "region",
    values: [
      "Asia Pacific",
      "Europe, Middle East and Africa",
      "Latin America",
      "North America",
      "North America (Canada)",
    ],
  },
  {
    title: "Business size",
    name: "business-size",
    values: ["Agency and partners", "Brand", "Small business"],
  },
];

export default creativeFilters;
