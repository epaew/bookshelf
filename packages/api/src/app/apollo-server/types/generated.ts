import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { AuthorMapper } from './mappers';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
};

export type Query = {
  __typename?: 'Query';
  author: Author;
  authorConnection: AuthorConnection;
  bookSeries: BookSeries;
  bookSeriesConnection: BookSeriesConnection;
  publisher: Publisher;
  publisherConnection: PublisherConnection;
  user: User;
  userConnection: UserConnection;
};

export type QueryAuthorArgs = {
  id: Scalars['ID'];
};

export type QueryAuthorConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

export type QueryBookSeriesArgs = {
  id: Scalars['ID'];
};

export type QueryBookSeriesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

export type QueryPublisherArgs = {
  id: Scalars['ID'];
};

export type QueryPublisherConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryUserConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  bookSeriesConnection: BookSeriesConnection;
  name: Scalars['String'];
};

export type AuthorBookSeriesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  edges: Array<AuthorEdge>;
  pageInfo: PageInfo;
  totalConut: Scalars['Int'];
};

export type AuthorEdge = {
  __typename?: 'AuthorEdge';
  cursor: Scalars['String'];
  node: Author;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID'];
  number?: Maybe<Scalars['Int']>;
  publishedAt: Scalars['Date'];
  series: BookSeries;
  subtitle: Scalars['String'];
};

export type BookConnection = {
  __typename?: 'BookConnection';
  edges: Array<BookEdge>;
  pageInfo: PageInfo;
  totalConut: Scalars['Int'];
};

export type BookEdge = {
  __typename?: 'BookEdge';
  cursor: Scalars['String'];
  node: Book;
};

export type BookSeries = {
  __typename?: 'BookSeries';
  id: Scalars['ID'];
  authors: Array<Author>;
  bookConnection: BookConnection;
  publisher: Publisher;
  title: Scalars['String'];
};

export type BookSeriesConnection = {
  __typename?: 'BookSeriesConnection';
  edges: Array<BookSeriesEdge>;
  pageInfo: PageInfo;
  totalConut: Scalars['Int'];
};

export type BookSeriesEdge = {
  __typename?: 'BookSeriesEdge';
  cursor: Scalars['String'];
  node: BookSeries;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Publisher = {
  __typename?: 'Publisher';
  id: Scalars['ID'];
  bookSeriesConnection: BookSeriesConnection;
  name: Scalars['String'];
};

export type PublisherBookSeriesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

export type PublisherConnection = {
  __typename?: 'PublisherConnection';
  edges: Array<PublisherEdge>;
  pageInfo: PageInfo;
  totalConut: Scalars['Int'];
};

export type PublisherEdge = {
  __typename?: 'PublisherEdge';
  cursor: Scalars['String'];
  node: Publisher;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  bookConnection: BookConnection;
  displayName: Scalars['String'];
};

export type UserBookConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalConut: Scalars['Int'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Author: ResolverTypeWrapper<AuthorMapper>;
  AuthorConnection: ResolverTypeWrapper<
    Omit<AuthorConnection, 'edges'> & { edges: Array<ResolversTypes['AuthorEdge']> }
  >;
  AuthorEdge: ResolverTypeWrapper<Omit<AuthorEdge, 'node'> & { node: ResolversTypes['Author'] }>;
  Book: ResolverTypeWrapper<Omit<Book, 'series'> & { series: ResolversTypes['BookSeries'] }>;
  BookConnection: ResolverTypeWrapper<Omit<BookConnection, 'edges'> & { edges: Array<ResolversTypes['BookEdge']> }>;
  BookEdge: ResolverTypeWrapper<Omit<BookEdge, 'node'> & { node: ResolversTypes['Book'] }>;
  BookSeries: ResolverTypeWrapper<
    Omit<BookSeries, 'authors' | 'bookConnection' | 'publisher'> & {
      authors: Array<ResolversTypes['Author']>;
      bookConnection: ResolversTypes['BookConnection'];
      publisher: ResolversTypes['Publisher'];
    }
  >;
  BookSeriesConnection: ResolverTypeWrapper<
    Omit<BookSeriesConnection, 'edges'> & { edges: Array<ResolversTypes['BookSeriesEdge']> }
  >;
  BookSeriesEdge: ResolverTypeWrapper<Omit<BookSeriesEdge, 'node'> & { node: ResolversTypes['BookSeries'] }>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Publisher: ResolverTypeWrapper<
    Omit<Publisher, 'bookSeriesConnection'> & { bookSeriesConnection: ResolversTypes['BookSeriesConnection'] }
  >;
  PublisherConnection: ResolverTypeWrapper<
    Omit<PublisherConnection, 'edges'> & { edges: Array<ResolversTypes['PublisherEdge']> }
  >;
  PublisherEdge: ResolverTypeWrapper<Omit<PublisherEdge, 'node'> & { node: ResolversTypes['Publisher'] }>;
  User: ResolverTypeWrapper<Omit<User, 'bookConnection'> & { bookConnection: ResolversTypes['BookConnection'] }>;
  UserConnection: ResolverTypeWrapper<Omit<UserConnection, 'edges'> & { edges: Array<ResolversTypes['UserEdge']> }>;
  UserEdge: ResolverTypeWrapper<Omit<UserEdge, 'node'> & { node: ResolversTypes['User'] }>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Date: Scalars['Date'];
  Query: {};
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  String: Scalars['String'];
  Author: AuthorMapper;
  AuthorConnection: Omit<AuthorConnection, 'edges'> & { edges: Array<ResolversParentTypes['AuthorEdge']> };
  AuthorEdge: Omit<AuthorEdge, 'node'> & { node: ResolversParentTypes['Author'] };
  Book: Omit<Book, 'series'> & { series: ResolversParentTypes['BookSeries'] };
  BookConnection: Omit<BookConnection, 'edges'> & { edges: Array<ResolversParentTypes['BookEdge']> };
  BookEdge: Omit<BookEdge, 'node'> & { node: ResolversParentTypes['Book'] };
  BookSeries: Omit<BookSeries, 'authors' | 'bookConnection' | 'publisher'> & {
    authors: Array<ResolversParentTypes['Author']>;
    bookConnection: ResolversParentTypes['BookConnection'];
    publisher: ResolversParentTypes['Publisher'];
  };
  BookSeriesConnection: Omit<BookSeriesConnection, 'edges'> & { edges: Array<ResolversParentTypes['BookSeriesEdge']> };
  BookSeriesEdge: Omit<BookSeriesEdge, 'node'> & { node: ResolversParentTypes['BookSeries'] };
  PageInfo: PageInfo;
  Boolean: Scalars['Boolean'];
  Publisher: Omit<Publisher, 'bookSeriesConnection'> & {
    bookSeriesConnection: ResolversParentTypes['BookSeriesConnection'];
  };
  PublisherConnection: Omit<PublisherConnection, 'edges'> & { edges: Array<ResolversParentTypes['PublisherEdge']> };
  PublisherEdge: Omit<PublisherEdge, 'node'> & { node: ResolversParentTypes['Publisher'] };
  User: Omit<User, 'bookConnection'> & { bookConnection: ResolversParentTypes['BookConnection'] };
  UserConnection: Omit<UserConnection, 'edges'> & { edges: Array<ResolversParentTypes['UserEdge']> };
  UserEdge: Omit<UserEdge, 'node'> & { node: ResolversParentTypes['User'] };
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<QueryAuthorArgs, 'id'>>;
  authorConnection?: Resolver<
    ResolversTypes['AuthorConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAuthorConnectionArgs, never>
  >;
  bookSeries?: Resolver<
    ResolversTypes['BookSeries'],
    ParentType,
    ContextType,
    RequireFields<QueryBookSeriesArgs, 'id'>
  >;
  bookSeriesConnection?: Resolver<
    ResolversTypes['BookSeriesConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryBookSeriesConnectionArgs, never>
  >;
  publisher?: Resolver<ResolversTypes['Publisher'], ParentType, ContextType, RequireFields<QueryPublisherArgs, 'id'>>;
  publisherConnection?: Resolver<
    ResolversTypes['PublisherConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryPublisherConnectionArgs, never>
  >;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  userConnection?: Resolver<
    ResolversTypes['UserConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryUserConnectionArgs, never>
  >;
}>;

export type AuthorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bookSeriesConnection?: Resolver<
    ResolversTypes['BookSeriesConnection'],
    ParentType,
    ContextType,
    RequireFields<AuthorBookSeriesConnectionArgs, never>
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthorConnection'] = ResolversParentTypes['AuthorConnection']
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AuthorEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalConut?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthorEdge'] = ResolversParentTypes['AuthorEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  publishedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  series?: Resolver<ResolversTypes['BookSeries'], ParentType, ContextType>;
  subtitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BookConnection'] = ResolversParentTypes['BookConnection']
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BookEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalConut?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BookEdge'] = ResolversParentTypes['BookEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookSeriesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BookSeries'] = ResolversParentTypes['BookSeries']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  authors?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType>;
  bookConnection?: Resolver<ResolversTypes['BookConnection'], ParentType, ContextType>;
  publisher?: Resolver<ResolversTypes['Publisher'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookSeriesConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BookSeriesConnection'] = ResolversParentTypes['BookSeriesConnection']
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BookSeriesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalConut?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookSeriesEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BookSeriesEdge'] = ResolversParentTypes['BookSeriesEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['BookSeries'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']
> = ResolversObject<{
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublisherResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Publisher'] = ResolversParentTypes['Publisher']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bookSeriesConnection?: Resolver<
    ResolversTypes['BookSeriesConnection'],
    ParentType,
    ContextType,
    RequireFields<PublisherBookSeriesConnectionArgs, never>
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublisherConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PublisherConnection'] = ResolversParentTypes['PublisherConnection']
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PublisherEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalConut?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublisherEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PublisherEdge'] = ResolversParentTypes['PublisherEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Publisher'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bookConnection?: Resolver<
    ResolversTypes['BookConnection'],
    ParentType,
    ContextType,
    RequireFields<UserBookConnectionArgs, never>
  >;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalConut?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Date?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  AuthorConnection?: AuthorConnectionResolvers<ContextType>;
  AuthorEdge?: AuthorEdgeResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  BookConnection?: BookConnectionResolvers<ContextType>;
  BookEdge?: BookEdgeResolvers<ContextType>;
  BookSeries?: BookSeriesResolvers<ContextType>;
  BookSeriesConnection?: BookSeriesConnectionResolvers<ContextType>;
  BookSeriesEdge?: BookSeriesEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Publisher?: PublisherResolvers<ContextType>;
  PublisherConnection?: PublisherConnectionResolvers<ContextType>;
  PublisherEdge?: PublisherEdgeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
