import {
  IBrandCreateInput,
  IBrandGoalCreateInput,
  IBrandSolutionCreateInput,
  IBrandStatCreateInput,
  IBrandStoryCreateInput,
  ICreativeCreateInput,
  IUserCreateInput,
} from "types";

export const initUsersData: IUserCreateInput[] = [
  {
    email: "warme@instagram.com",
    // this is a hashed version of "twixrox"
    password: "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
    firstName: "Daouda",
    lastName: "Warme",
    role: "ADMIN",
  },
  {
    email: "lisa@instagram.com",
    // this is a hashed version of "twixrox"
    password: "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
    firstName: "Lisa",
    lastName: "Smith",
    role: "USER",
  },
];

export const initBrandsData: {
  info: IBrandCreateInput;
  story: IBrandStoryCreateInput;
  stats: IBrandStatCreateInput[];
  goal: IBrandGoalCreateInput;
  solutions: IBrandSolutionCreateInput[];
  creative: ICreativeCreateInput;
}[] = [
  {
    info: {
      name: "reserved",
      handle: "2-reserved",
      username: "reserved",
      profileImageUrl:
        "https://scontent.fmxp6-1.fna.fbcdn.net/v/t51.2885-15/178065560_500123241167927_1005304498229701664_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=86c713&_nc_ohc=QArEK7OQHoAAX8fzPEN&_nc_ht=scontent.fmxp6-1.fna&oh=00_AfA9zP6AvOkhfavhM5VCDgTsGtzSgyvqgaGppeJ36n3rBQ&oe=64CFE3D4",
      coverImageUrl:
        "https://scontent-mxp2-1.xx.fbcdn.net/v/t39.2365-6/342218373_1320887245309574_839435413409716464_n.jpg?stp=dst-webp&_nc_cat=101&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=SyMqgxyMh28AX8HhS00&_nc_ht=scontent-mxp2-1.xx&oh=00_AfCSlK2xrhNd2o6o1cUXYgfGJXh5DxbBOErB6n_0cyRXeA&oe=64E469E4",
      about:
        "Fashion retailer Reserved lowered its cost per purchase by 83% by adding product tags to its Advantage+ catalogue ads on Instagram.",
      businessSize: "brand",
      objective: "",
      product: "",
      industry: "",
      region: "",
    },
    story: {
      title: "Classic fashion for all",
      description:
        "Reserved is the flagship fashion brand of LPP, the family-owned Polish company that also oversees fashion brands Sinsay, Mohito, Cropp and House. Established in Gdańsk over 30 years ago, the company now has more than 1,700 outlets in 38 countries.",
      note: "Instagram is an important sales channel for Reserved and we are eager to implement any new functionality that Meta offers. After adding product tags to our Advantage+ catalogue ads, we saw meaningful results that led us to decide to include product tags in all our future campaigns.",
      noteReference: "RADOSŁAW WOJCIECHOWSKI, ECOMMERCE DIRECTOR, RESERVED",
    },
    stats: [
      {
        title: "83%",
        description:
          "lower cost per incremental purchase with product tags added",
      },
      {
        title: "6X",
        description: "more incremental conversions with product tags added",
      },
      {
        title: "6.1X",
        description:
          "higher incremental return on ad spend with product tags added",
      },
    ],
    goal: {
      title: "Increasing online sales",
      description:
        "Facing a challenging economic time for fashion retailers, Reserved wanted to increase ecommerce sales.",
      note: "",
      noteReference: "",
    },
    solutions: [
      {
        title: "Adding product tags",
        contentHtml: `
            Reserved was already using Advantage+ catalogue ads on Instagram, relying on ads in carousel format to display items from its large inventory of products. Advantage+ catalogue ads automatically show the right products to people who have expressed interest on a company’s website, app or elsewhere on the internet. Companies simply upload their product catalogue and set up their campaign, and it will continue working – showing people the most appropriate products, with up-to-date pricing and availability.
            <br/><br/>
            Reserved decided to add tags to the products that featured on their ads. Ads with product tags can encourage people to visit a product details page, where they can then shop for products from the ad. Businesses that use checkout on Instagram can enable checkout for a campaign to give shoppers the ability to purchase from the business's website or directly in-app.
            <br/>
            <br/>
            To test the new approach, Reserved used a conversion lift test to measure its usual campaign of ads in carousel format against an identical campaign with product tags added. The difference in ad creative was subtle, but its effect was remarkable. Between September 28–October 12, 2022, the campaign achieved:
            <ul class="_8grt" style=""><li class="_8-d2">83% lower cost per incremental purchase with product tags added</li><li class="_8-d2">6X more incremental conversions with product tags added</li><li class="_8-d2">6.1X higher incremental return on ad spend with product tags added</li></ul>
        `,
        mediaContentType: "IMAGE",
        creativeType: "FEED",
        imageUrl:
          "https://scontent-mxp2-1.xx.fbcdn.net/v/t39.8562-6/342208166_232326462712736_3432463526407629652_n.jpg?stp=dst-webp&_nc_cat=104&ccb=1-7&_nc_sid=743b2f&_nc_ohc=4iWelyH7qSUAX8mhf5j&_nc_ht=scontent-mxp2-1.xx&oh=00_AfCj5mk0SYou7H59ew7YqESIsXRbLF9xupHVg1RkAT5P3Q&oe=64CE3C3E",
        videoUrl: "",
      },
    ],
    creative: {
      title: "Reserved",
      subtitle: "Tiny tags with big results",
      imageUrl:
        "https://scontent.fmxp6-1.fna.fbcdn.net/v/t39.2365-6/335872802_624322782456872_6124428669723609543_n.jpg?stp=dst-webp&_nc_cat=105&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=qw64jdw6fs0AX_4q7bc&_nc_ht=scontent.fmxp6-1.fna&oh=00_AfATHmGje7qSCFOEDtNqv7IUeEC5nKI3Zw7AS-ql1-kEXQ&oe=64E4800D",
    },
  },
];
