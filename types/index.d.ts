export type IUserRole = 'USER' | 'ADMIN'
export interface IUser {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: IUserRole;
}
export interface IUserListing extends Omit<IUser, "password"> {}
export interface IUserCreateInput extends Omit<IUser, "id" | "createdAt" | "updatedAt"> {}
export interface IBrand {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    handle: string;
    username: string
    profileImageUrl: string;
    coverImageUrl: string;
    about: string;
    businessSize: string;
    objective: string;
    product: string;
    industry: string;
    region: string;
}
export interface IBrandListing extends IBrand {}
export interface IBrandCreateInput extends Omit<IBrand, "id" | "createdAt" | "updatedAt"> {}
export interface ICreative {
    id: string;
    brandId: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
}
export interface ICreativeListing extends ICreative {}
export interface ICreativeCreateInput extends Omit<ICreative, "id"> {}
export interface IBrandStory {
    id: string;
    brandId: string;
    title: string;
    description: string;
    note: string;
    noteReference: string; 
}
export interface IBrandStoryListing extends IBrandStory {}
export interface IBrandStoryCreateInput extends Omit<IBrandStory, "id"> {}
export interface IBrandStat {
    id: string;
    brandStoryId: string;
    title: string;
    description: string;
}
export interface IBrandStatListing extends IBrandStat {}
export interface IBrandStatCreateInput extends Omit<IBrandStat, "id"> {}
export interface IBrandGoal {
    id: string;
    brandId: string;
    title: string;
    description: string;
    note: string;
    noteReference: string;
}
export interface IBrandGoalListing extends IBrandGoal {}
export interface IBrandGoalCreateInput extends Omit<IBrandGoal, "id"> {}
export interface IBrandSolution {
    id: string;
    brandId: string;
    title: string;
    contentHtml: string;
    mediaContentType: "IMAGE" | "VIDEO";
    creativeType: "STORY" | "FEED";
    imageUrl?: string;
    videoUrl?: string;
}
export interface IBrandSolutionListing extends IBrandSolution {}
export interface IBrandSolutionCreateInput extends Omit<IBrandSolution, "id"> {}
