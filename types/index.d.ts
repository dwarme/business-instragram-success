export type IUserRole = 'USER' | 'ADMIN'
type IOmitThis = "id" | "password" | "brandId" | "brandStoryId" | "brandStatId" | "createdAt" | "updatedAt"
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
export interface IUserListing extends Omit<IUser, "password" | "createdAt" | "updatedAt"> { 
    createdAt: string; 
    updatedAt: string 
}
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
export interface IBrandListing extends Omit<IBrand, "createdAt" | "updatedAt"> { 
    createdAt: string; 
    updatedAt: string 
}
export interface IBrandCreateInput extends Omit<IBrand, IOmitThis> {}
export interface ICreative {
    id: string;
    brandId: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    subtitle: string;
    imageUrl: string;
}
export interface ICreativeListing extends Omit<ICreative,  "createdAt" | "updatedAt"> { 
    createdAt: string; 
    updatedAt: string 
}
export interface ICreativeCreateInput extends Omit<ICreative, IOmitThis> {}
export interface IBrandStory {
    id: string;
    brandId: string;
    title: string;
    description: string;
    note: string;
    noteReference: string; 
}
export interface IBrandStoryListing extends IBrandStory {}
export interface IBrandStoryCreateInput extends Omit<IBrandStory, IOmitThis> {}
export interface IBrandStat {
    id: string;
    brandStoryId: string;
    title: string;
    description: string;
}
export interface IBrandStatListing extends IBrandStat {}
export interface IBrandStatCreateInput extends Omit<IBrandStat, IOmitThis> {}
export interface IBrandGoal {
    id: string;
    brandId: string;
    title: string;
    description: string;
    note: string;
    noteReference: string;
}
export interface IBrandGoalListing extends IBrandGoal {}
export interface IBrandGoalCreateInput extends Omit<IBrandGoal, IOmitThis> {}
export interface IBrandSolution {
    id: string;
    brandId: string;
    title: string;
    contentHtml: string;
    mediaContentType: string;
    creativeType: string;
    imageUrl: string | null;
    videoUrl: string | null;
}
export interface IBrandSolutionListing extends IBrandSolution {}
export interface IBrandSolutionCreateInput extends Omit<IBrandSolution, IOmitThis> {}
