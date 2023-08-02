import {
  IBrandCreateInput,
  IBrandGoalCreateInput,
  IBrandSolutionCreateInput,
  IBrandStatCreateInput,
  IBrandStoryCreateInput,
  ICreativeCreateInput,
  IUserCreateInput,
} from "types";

export const usersData: IUserCreateInput[] = [
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

export const brandsData: {
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
    story: {},
    stats: [],
    goal: {},
    solutions: [],
    creative: {},
  },
];
