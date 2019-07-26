// Code generated by Prisma (prisma@1.34.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  position: (where?: PositionWhereInput) => Promise<boolean>;
  post: (where?: PostWhereInput) => Promise<boolean>;
  resume: (where?: ResumeWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  position: (where: PositionWhereUniqueInput) => PositionNullablePromise;
  positions: (args?: {
    where?: PositionWhereInput;
    orderBy?: PositionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Position>;
  positionsConnection: (args?: {
    where?: PositionWhereInput;
    orderBy?: PositionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PositionConnectionPromise;
  post: (where: PostWhereUniqueInput) => PostNullablePromise;
  posts: (args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Post>;
  postsConnection: (args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PostConnectionPromise;
  resume: (where: ResumeWhereUniqueInput) => ResumeNullablePromise;
  resumes: (args?: {
    where?: ResumeWhereInput;
    orderBy?: ResumeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Resume>;
  resumesConnection: (args?: {
    where?: ResumeWhereInput;
    orderBy?: ResumeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ResumeConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPosition: (data: PositionCreateInput) => PositionPromise;
  updatePosition: (args: {
    data: PositionUpdateInput;
    where: PositionWhereUniqueInput;
  }) => PositionPromise;
  updateManyPositions: (args: {
    data: PositionUpdateManyMutationInput;
    where?: PositionWhereInput;
  }) => BatchPayloadPromise;
  upsertPosition: (args: {
    where: PositionWhereUniqueInput;
    create: PositionCreateInput;
    update: PositionUpdateInput;
  }) => PositionPromise;
  deletePosition: (where: PositionWhereUniqueInput) => PositionPromise;
  deleteManyPositions: (where?: PositionWhereInput) => BatchPayloadPromise;
  createPost: (data: PostCreateInput) => PostPromise;
  updatePost: (args: {
    data: PostUpdateInput;
    where: PostWhereUniqueInput;
  }) => PostPromise;
  updateManyPosts: (args: {
    data: PostUpdateManyMutationInput;
    where?: PostWhereInput;
  }) => BatchPayloadPromise;
  upsertPost: (args: {
    where: PostWhereUniqueInput;
    create: PostCreateInput;
    update: PostUpdateInput;
  }) => PostPromise;
  deletePost: (where: PostWhereUniqueInput) => PostPromise;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise;
  createResume: (data: ResumeCreateInput) => ResumePromise;
  updateResume: (args: {
    data: ResumeUpdateInput;
    where: ResumeWhereUniqueInput;
  }) => ResumePromise;
  updateManyResumes: (args: {
    data: ResumeUpdateManyMutationInput;
    where?: ResumeWhereInput;
  }) => BatchPayloadPromise;
  upsertResume: (args: {
    where: ResumeWhereUniqueInput;
    create: ResumeCreateInput;
    update: ResumeUpdateInput;
  }) => ResumePromise;
  deleteResume: (where: ResumeWhereUniqueInput) => ResumePromise;
  deleteManyResumes: (where?: ResumeWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  position: (
    where?: PositionSubscriptionWhereInput
  ) => PositionSubscriptionPayloadSubscription;
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
  resume: (
    where?: ResumeSubscriptionWhereInput
  ) => ResumeSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PositionOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC"
  | "year_ASC"
  | "year_DESC";

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "published_ASC"
  | "published_DESC"
  | "title_ASC"
  | "title_DESC"
  | "content_ASC"
  | "content_DESC";

export type ResumeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "address_ASC"
  | "address_DESC"
  | "email_ASC"
  | "email_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type PositionWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PositionWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  year?: Maybe<Int>;
  year_not?: Maybe<Int>;
  year_in?: Maybe<Int[] | Int>;
  year_not_in?: Maybe<Int[] | Int>;
  year_lt?: Maybe<Int>;
  year_lte?: Maybe<Int>;
  year_gt?: Maybe<Int>;
  year_gte?: Maybe<Int>;
  AND?: Maybe<PositionWhereInput[] | PositionWhereInput>;
  OR?: Maybe<PositionWhereInput[] | PositionWhereInput>;
  NOT?: Maybe<PositionWhereInput[] | PositionWhereInput>;
}

export type PostWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PostWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  AND?: Maybe<PostWhereInput[] | PostWhereInput>;
  OR?: Maybe<PostWhereInput[] | PostWhereInput>;
  NOT?: Maybe<PostWhereInput[] | PostWhereInput>;
}

export type ResumeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ResumeWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  address?: Maybe<String>;
  address_not?: Maybe<String>;
  address_in?: Maybe<String[] | String>;
  address_not_in?: Maybe<String[] | String>;
  address_lt?: Maybe<String>;
  address_lte?: Maybe<String>;
  address_gt?: Maybe<String>;
  address_gte?: Maybe<String>;
  address_contains?: Maybe<String>;
  address_not_contains?: Maybe<String>;
  address_starts_with?: Maybe<String>;
  address_not_starts_with?: Maybe<String>;
  address_ends_with?: Maybe<String>;
  address_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  positions_every?: Maybe<PositionWhereInput>;
  positions_some?: Maybe<PositionWhereInput>;
  positions_none?: Maybe<PositionWhereInput>;
  AND?: Maybe<ResumeWhereInput[] | ResumeWhereInput>;
  OR?: Maybe<ResumeWhereInput[] | ResumeWhereInput>;
  NOT?: Maybe<ResumeWhereInput[] | ResumeWhereInput>;
}

export interface PositionCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  description: String;
  year: Int;
}

export interface PositionUpdateInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  year?: Maybe<Int>;
}

export interface PositionUpdateManyMutationInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  year?: Maybe<Int>;
}

export interface PostCreateInput {
  id?: Maybe<ID_Input>;
  published?: Maybe<Boolean>;
  title: String;
  content: String;
}

export interface PostUpdateInput {
  published?: Maybe<Boolean>;
  title?: Maybe<String>;
  content?: Maybe<String>;
}

export interface PostUpdateManyMutationInput {
  published?: Maybe<Boolean>;
  title?: Maybe<String>;
  content?: Maybe<String>;
}

export interface ResumeCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  address: String;
  email: String;
  positions?: Maybe<PositionCreateManyInput>;
}

export interface PositionCreateManyInput {
  create?: Maybe<PositionCreateInput[] | PositionCreateInput>;
  connect?: Maybe<PositionWhereUniqueInput[] | PositionWhereUniqueInput>;
}

export interface ResumeUpdateInput {
  name?: Maybe<String>;
  address?: Maybe<String>;
  email?: Maybe<String>;
  positions?: Maybe<PositionUpdateManyInput>;
}

export interface PositionUpdateManyInput {
  create?: Maybe<PositionCreateInput[] | PositionCreateInput>;
  update?: Maybe<
    | PositionUpdateWithWhereUniqueNestedInput[]
    | PositionUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | PositionUpsertWithWhereUniqueNestedInput[]
    | PositionUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<PositionWhereUniqueInput[] | PositionWhereUniqueInput>;
  connect?: Maybe<PositionWhereUniqueInput[] | PositionWhereUniqueInput>;
  set?: Maybe<PositionWhereUniqueInput[] | PositionWhereUniqueInput>;
  disconnect?: Maybe<PositionWhereUniqueInput[] | PositionWhereUniqueInput>;
  deleteMany?: Maybe<PositionScalarWhereInput[] | PositionScalarWhereInput>;
  updateMany?: Maybe<
    | PositionUpdateManyWithWhereNestedInput[]
    | PositionUpdateManyWithWhereNestedInput
  >;
}

export interface PositionUpdateWithWhereUniqueNestedInput {
  where: PositionWhereUniqueInput;
  data: PositionUpdateDataInput;
}

export interface PositionUpdateDataInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  year?: Maybe<Int>;
}

export interface PositionUpsertWithWhereUniqueNestedInput {
  where: PositionWhereUniqueInput;
  update: PositionUpdateDataInput;
  create: PositionCreateInput;
}

export interface PositionScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  year?: Maybe<Int>;
  year_not?: Maybe<Int>;
  year_in?: Maybe<Int[] | Int>;
  year_not_in?: Maybe<Int[] | Int>;
  year_lt?: Maybe<Int>;
  year_lte?: Maybe<Int>;
  year_gt?: Maybe<Int>;
  year_gte?: Maybe<Int>;
  AND?: Maybe<PositionScalarWhereInput[] | PositionScalarWhereInput>;
  OR?: Maybe<PositionScalarWhereInput[] | PositionScalarWhereInput>;
  NOT?: Maybe<PositionScalarWhereInput[] | PositionScalarWhereInput>;
}

export interface PositionUpdateManyWithWhereNestedInput {
  where: PositionScalarWhereInput;
  data: PositionUpdateManyDataInput;
}

export interface PositionUpdateManyDataInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  year?: Maybe<Int>;
}

export interface ResumeUpdateManyMutationInput {
  name?: Maybe<String>;
  address?: Maybe<String>;
  email?: Maybe<String>;
}

export interface PositionSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PositionWhereInput>;
  AND?: Maybe<
    PositionSubscriptionWhereInput[] | PositionSubscriptionWhereInput
  >;
  OR?: Maybe<PositionSubscriptionWhereInput[] | PositionSubscriptionWhereInput>;
  NOT?: Maybe<
    PositionSubscriptionWhereInput[] | PositionSubscriptionWhereInput
  >;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PostWhereInput>;
  AND?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
  OR?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
  NOT?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
}

export interface ResumeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ResumeWhereInput>;
  AND?: Maybe<ResumeSubscriptionWhereInput[] | ResumeSubscriptionWhereInput>;
  OR?: Maybe<ResumeSubscriptionWhereInput[] | ResumeSubscriptionWhereInput>;
  NOT?: Maybe<ResumeSubscriptionWhereInput[] | ResumeSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Position {
  id: ID_Output;
  title: String;
  description: String;
  year: Int;
}

export interface PositionPromise extends Promise<Position>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  year: () => Promise<Int>;
}

export interface PositionSubscription
  extends Promise<AsyncIterator<Position>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  year: () => Promise<AsyncIterator<Int>>;
}

export interface PositionNullablePromise
  extends Promise<Position | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  year: () => Promise<Int>;
}

export interface PositionConnection {
  pageInfo: PageInfo;
  edges: PositionEdge[];
}

export interface PositionConnectionPromise
  extends Promise<PositionConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PositionEdge>>() => T;
  aggregate: <T = AggregatePositionPromise>() => T;
}

export interface PositionConnectionSubscription
  extends Promise<AsyncIterator<PositionConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PositionEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePositionSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface PositionEdge {
  node: Position;
  cursor: String;
}

export interface PositionEdgePromise
  extends Promise<PositionEdge>,
    Fragmentable {
  node: <T = PositionPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PositionEdgeSubscription
  extends Promise<AsyncIterator<PositionEdge>>,
    Fragmentable {
  node: <T = PositionSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePosition {
  count: Int;
}

export interface AggregatePositionPromise
  extends Promise<AggregatePosition>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePositionSubscription
  extends Promise<AsyncIterator<AggregatePosition>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Post {
  id: ID_Output;
  published: Boolean;
  title: String;
  content: String;
}

export interface PostPromise extends Promise<Post>, Fragmentable {
  id: () => Promise<ID_Output>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
}

export interface PostSubscription
  extends Promise<AsyncIterator<Post>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
}

export interface PostNullablePromise
  extends Promise<Post | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
}

export interface PostConnection {
  pageInfo: PageInfo;
  edges: PostEdge[];
}

export interface PostConnectionPromise
  extends Promise<PostConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PostEdge>>() => T;
  aggregate: <T = AggregatePostPromise>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface PostEdge {
  node: Post;
  cursor: String;
}

export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
  node: <T = PostPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdge>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePost {
  count: Int;
}

export interface AggregatePostPromise
  extends Promise<AggregatePost>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePost>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Resume {
  id: ID_Output;
  name: String;
  address: String;
  email: String;
}

export interface ResumePromise extends Promise<Resume>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  address: () => Promise<String>;
  email: () => Promise<String>;
  positions: <T = FragmentableArray<Position>>(args?: {
    where?: PositionWhereInput;
    orderBy?: PositionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ResumeSubscription
  extends Promise<AsyncIterator<Resume>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  positions: <T = Promise<AsyncIterator<PositionSubscription>>>(args?: {
    where?: PositionWhereInput;
    orderBy?: PositionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ResumeNullablePromise
  extends Promise<Resume | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  address: () => Promise<String>;
  email: () => Promise<String>;
  positions: <T = FragmentableArray<Position>>(args?: {
    where?: PositionWhereInput;
    orderBy?: PositionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ResumeConnection {
  pageInfo: PageInfo;
  edges: ResumeEdge[];
}

export interface ResumeConnectionPromise
  extends Promise<ResumeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ResumeEdge>>() => T;
  aggregate: <T = AggregateResumePromise>() => T;
}

export interface ResumeConnectionSubscription
  extends Promise<AsyncIterator<ResumeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ResumeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateResumeSubscription>() => T;
}

export interface ResumeEdge {
  node: Resume;
  cursor: String;
}

export interface ResumeEdgePromise extends Promise<ResumeEdge>, Fragmentable {
  node: <T = ResumePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ResumeEdgeSubscription
  extends Promise<AsyncIterator<ResumeEdge>>,
    Fragmentable {
  node: <T = ResumeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateResume {
  count: Int;
}

export interface AggregateResumePromise
  extends Promise<AggregateResume>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateResumeSubscription
  extends Promise<AsyncIterator<AggregateResume>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PositionSubscriptionPayload {
  mutation: MutationType;
  node: Position;
  updatedFields: String[];
  previousValues: PositionPreviousValues;
}

export interface PositionSubscriptionPayloadPromise
  extends Promise<PositionSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PositionPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PositionPreviousValuesPromise>() => T;
}

export interface PositionSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PositionSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PositionSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PositionPreviousValuesSubscription>() => T;
}

export interface PositionPreviousValues {
  id: ID_Output;
  title: String;
  description: String;
  year: Int;
}

export interface PositionPreviousValuesPromise
  extends Promise<PositionPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  year: () => Promise<Int>;
}

export interface PositionPreviousValuesSubscription
  extends Promise<AsyncIterator<PositionPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  year: () => Promise<AsyncIterator<Int>>;
}

export interface PostSubscriptionPayload {
  mutation: MutationType;
  node: Post;
  updatedFields: String[];
  previousValues: PostPreviousValues;
}

export interface PostSubscriptionPayloadPromise
  extends Promise<PostSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PostPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValuesPromise>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface PostPreviousValues {
  id: ID_Output;
  published: Boolean;
  title: String;
  content: String;
}

export interface PostPreviousValuesPromise
  extends Promise<PostPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
}

export interface ResumeSubscriptionPayload {
  mutation: MutationType;
  node: Resume;
  updatedFields: String[];
  previousValues: ResumePreviousValues;
}

export interface ResumeSubscriptionPayloadPromise
  extends Promise<ResumeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ResumePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ResumePreviousValuesPromise>() => T;
}

export interface ResumeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ResumeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ResumeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ResumePreviousValuesSubscription>() => T;
}

export interface ResumePreviousValues {
  id: ID_Output;
  name: String;
  address: String;
  email: String;
}

export interface ResumePreviousValuesPromise
  extends Promise<ResumePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  address: () => Promise<String>;
  email: () => Promise<String>;
}

export interface ResumePreviousValuesSubscription
  extends Promise<AsyncIterator<ResumePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Resume",
    embedded: false
  },
  {
    name: "Position",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;