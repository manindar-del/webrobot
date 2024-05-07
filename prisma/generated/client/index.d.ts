
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model inputdataset
 * 
 */
export type inputdataset = $Result.DefaultSelection<Prisma.$inputdatasetPayload>
/**
 * Model job
 * 
 */
export type job = $Result.DefaultSelection<Prisma.$jobPayload>
/**
 * Model jobtoproject
 * 
 */
export type jobtoproject = $Result.DefaultSelection<Prisma.$jobtoprojectPayload>
/**
 * Model outputdataset
 * 
 */
export type outputdataset = $Result.DefaultSelection<Prisma.$outputdatasetPayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const inputdataset_sourceType: {
  S3: 'S3',
  GoogleStorage: 'GoogleStorage',
  HDFS: 'HDFS',
  Streaming: 'Streaming'
};

export type inputdataset_sourceType = (typeof inputdataset_sourceType)[keyof typeof inputdataset_sourceType]


export const inputdataset_dataFormat: {
  CSV: 'CSV',
  XML: 'XML',
  OTHER: 'OTHER'
};

export type inputdataset_dataFormat = (typeof inputdataset_dataFormat)[keyof typeof inputdataset_dataFormat]


export const project_frequency: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  REAL_TIME: 'REAL_TIME'
};

export type project_frequency = (typeof project_frequency)[keyof typeof project_frequency]

}

export type inputdataset_sourceType = $Enums.inputdataset_sourceType

export const inputdataset_sourceType: typeof $Enums.inputdataset_sourceType

export type inputdataset_dataFormat = $Enums.inputdataset_dataFormat

export const inputdataset_dataFormat: typeof $Enums.inputdataset_dataFormat

export type project_frequency = $Enums.project_frequency

export const project_frequency: typeof $Enums.project_frequency

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs>;

  /**
   * `prisma.inputdataset`: Exposes CRUD operations for the **inputdataset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inputdatasets
    * const inputdatasets = await prisma.inputdataset.findMany()
    * ```
    */
  get inputdataset(): Prisma.inputdatasetDelegate<ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.jobDelegate<ExtArgs>;

  /**
   * `prisma.jobtoproject`: Exposes CRUD operations for the **jobtoproject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobtoprojects
    * const jobtoprojects = await prisma.jobtoproject.findMany()
    * ```
    */
  get jobtoproject(): Prisma.jobtoprojectDelegate<ExtArgs>;

  /**
   * `prisma.outputdataset`: Exposes CRUD operations for the **outputdataset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outputdatasets
    * const outputdatasets = await prisma.outputdataset.findMany()
    * ```
    */
  get outputdataset(): Prisma.outputdatasetDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    category: 'category',
    inputdataset: 'inputdataset',
    job: 'job',
    jobtoproject: 'jobtoproject',
    outputdataset: 'outputdataset',
    project: 'project'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'category' | 'inputdataset' | 'job' | 'jobtoproject' | 'outputdataset' | 'project'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      inputdataset: {
        payload: Prisma.$inputdatasetPayload<ExtArgs>
        fields: Prisma.inputdatasetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inputdatasetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inputdatasetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inputdatasetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inputdatasetPayload>
          }
          findFirst: {
            args: Prisma.inputdatasetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inputdatasetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inputdatasetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inputdatasetPayload>
          }
          findMany: {
            args: Prisma.inputdatasetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inputdatasetPayload>[]
          }
          create: {
            args: Prisma.inputdatasetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inputdatasetPayload>
          }
          createMany: {
            args: Prisma.inputdatasetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.inputdatasetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inputdatasetPayload>
          }
          update: {
            args: Prisma.inputdatasetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inputdatasetPayload>
          }
          deleteMany: {
            args: Prisma.inputdatasetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.inputdatasetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.inputdatasetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inputdatasetPayload>
          }
          aggregate: {
            args: Prisma.InputdatasetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInputdataset>
          }
          groupBy: {
            args: Prisma.inputdatasetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InputdatasetGroupByOutputType>[]
          }
          count: {
            args: Prisma.inputdatasetCountArgs<ExtArgs>,
            result: $Utils.Optional<InputdatasetCountAggregateOutputType> | number
          }
        }
      }
      job: {
        payload: Prisma.$jobPayload<ExtArgs>
        fields: Prisma.jobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          findFirst: {
            args: Prisma.jobFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          findMany: {
            args: Prisma.jobFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>[]
          }
          create: {
            args: Prisma.jobCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          createMany: {
            args: Prisma.jobCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.jobDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          update: {
            args: Prisma.jobUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          deleteMany: {
            args: Prisma.jobDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.jobUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.jobUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.jobGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobCountArgs<ExtArgs>,
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      jobtoproject: {
        payload: Prisma.$jobtoprojectPayload<ExtArgs>
        fields: Prisma.jobtoprojectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobtoprojectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobtoprojectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobtoprojectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobtoprojectPayload>
          }
          findFirst: {
            args: Prisma.jobtoprojectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobtoprojectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobtoprojectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobtoprojectPayload>
          }
          findMany: {
            args: Prisma.jobtoprojectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobtoprojectPayload>[]
          }
          create: {
            args: Prisma.jobtoprojectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobtoprojectPayload>
          }
          createMany: {
            args: Prisma.jobtoprojectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.jobtoprojectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobtoprojectPayload>
          }
          update: {
            args: Prisma.jobtoprojectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobtoprojectPayload>
          }
          deleteMany: {
            args: Prisma.jobtoprojectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.jobtoprojectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.jobtoprojectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobtoprojectPayload>
          }
          aggregate: {
            args: Prisma.JobtoprojectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJobtoproject>
          }
          groupBy: {
            args: Prisma.jobtoprojectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobtoprojectGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobtoprojectCountArgs<ExtArgs>,
            result: $Utils.Optional<JobtoprojectCountAggregateOutputType> | number
          }
        }
      }
      outputdataset: {
        payload: Prisma.$outputdatasetPayload<ExtArgs>
        fields: Prisma.outputdatasetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.outputdatasetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$outputdatasetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.outputdatasetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$outputdatasetPayload>
          }
          findFirst: {
            args: Prisma.outputdatasetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$outputdatasetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.outputdatasetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$outputdatasetPayload>
          }
          findMany: {
            args: Prisma.outputdatasetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$outputdatasetPayload>[]
          }
          create: {
            args: Prisma.outputdatasetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$outputdatasetPayload>
          }
          createMany: {
            args: Prisma.outputdatasetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.outputdatasetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$outputdatasetPayload>
          }
          update: {
            args: Prisma.outputdatasetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$outputdatasetPayload>
          }
          deleteMany: {
            args: Prisma.outputdatasetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.outputdatasetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.outputdatasetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$outputdatasetPayload>
          }
          aggregate: {
            args: Prisma.OutputdatasetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOutputdataset>
          }
          groupBy: {
            args: Prisma.outputdatasetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OutputdatasetGroupByOutputType>[]
          }
          count: {
            args: Prisma.outputdatasetCountArgs<ExtArgs>,
            result: $Utils.Optional<OutputdatasetCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    job: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | CategoryCountOutputTypeCountJobArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobWhereInput
  }



  /**
   * Count Type InputdatasetCountOutputType
   */

  export type InputdatasetCountOutputType = {
    jobtoproject: number
  }

  export type InputdatasetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobtoproject?: boolean | InputdatasetCountOutputTypeCountJobtoprojectArgs
  }

  // Custom InputTypes

  /**
   * InputdatasetCountOutputType without action
   */
  export type InputdatasetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputdatasetCountOutputType
     */
    select?: InputdatasetCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * InputdatasetCountOutputType without action
   */
  export type InputdatasetCountOutputTypeCountJobtoprojectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobtoprojectWhereInput
  }



  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    jobtoproject: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobtoproject?: boolean | JobCountOutputTypeCountJobtoprojectArgs
  }

  // Custom InputTypes

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountJobtoprojectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobtoprojectWhereInput
  }



  /**
   * Count Type JobtoprojectCountOutputType
   */

  export type JobtoprojectCountOutputType = {
    outputdataset: number
  }

  export type JobtoprojectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outputdataset?: boolean | JobtoprojectCountOutputTypeCountOutputdatasetArgs
  }

  // Custom InputTypes

  /**
   * JobtoprojectCountOutputType without action
   */
  export type JobtoprojectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobtoprojectCountOutputType
     */
    select?: JobtoprojectCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * JobtoprojectCountOutputType without action
   */
  export type JobtoprojectCountOutputTypeCountOutputdatasetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: outputdatasetWhereInput
  }



  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    jobtoproject: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobtoproject?: boolean | ProjectCountOutputTypeCountJobtoprojectArgs
  }

  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountJobtoprojectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobtoprojectWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    job?: boolean | category$jobArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | category$jobArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      job: Prisma.$jobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends categoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends categoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, categoryCreateArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends categoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends categoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job<T extends category$jobArgs<ExtArgs> = {}>(args?: Subset<T, category$jobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the category model
   */ 
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }


  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
  }


  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }


  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
  }


  /**
   * category.job
   */
  export type category$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    where?: jobWhereInput
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    cursor?: jobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null
  }



  /**
   * Model inputdataset
   */

  export type AggregateInputdataset = {
    _count: InputdatasetCountAggregateOutputType | null
    _avg: InputdatasetAvgAggregateOutputType | null
    _sum: InputdatasetSumAggregateOutputType | null
    _min: InputdatasetMinAggregateOutputType | null
    _max: InputdatasetMaxAggregateOutputType | null
  }

  export type InputdatasetAvgAggregateOutputType = {
    id: number | null
  }

  export type InputdatasetSumAggregateOutputType = {
    id: number | null
  }

  export type InputdatasetMinAggregateOutputType = {
    id: number | null
    sourceType: $Enums.inputdataset_sourceType | null
    location: string | null
    dataFormat: $Enums.inputdataset_dataFormat | null
  }

  export type InputdatasetMaxAggregateOutputType = {
    id: number | null
    sourceType: $Enums.inputdataset_sourceType | null
    location: string | null
    dataFormat: $Enums.inputdataset_dataFormat | null
  }

  export type InputdatasetCountAggregateOutputType = {
    id: number
    sourceType: number
    location: number
    dataFormat: number
    _all: number
  }


  export type InputdatasetAvgAggregateInputType = {
    id?: true
  }

  export type InputdatasetSumAggregateInputType = {
    id?: true
  }

  export type InputdatasetMinAggregateInputType = {
    id?: true
    sourceType?: true
    location?: true
    dataFormat?: true
  }

  export type InputdatasetMaxAggregateInputType = {
    id?: true
    sourceType?: true
    location?: true
    dataFormat?: true
  }

  export type InputdatasetCountAggregateInputType = {
    id?: true
    sourceType?: true
    location?: true
    dataFormat?: true
    _all?: true
  }

  export type InputdatasetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inputdataset to aggregate.
     */
    where?: inputdatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inputdatasets to fetch.
     */
    orderBy?: inputdatasetOrderByWithRelationInput | inputdatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inputdatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inputdatasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inputdatasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inputdatasets
    **/
    _count?: true | InputdatasetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InputdatasetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InputdatasetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InputdatasetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InputdatasetMaxAggregateInputType
  }

  export type GetInputdatasetAggregateType<T extends InputdatasetAggregateArgs> = {
        [P in keyof T & keyof AggregateInputdataset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInputdataset[P]>
      : GetScalarType<T[P], AggregateInputdataset[P]>
  }




  export type inputdatasetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inputdatasetWhereInput
    orderBy?: inputdatasetOrderByWithAggregationInput | inputdatasetOrderByWithAggregationInput[]
    by: InputdatasetScalarFieldEnum[] | InputdatasetScalarFieldEnum
    having?: inputdatasetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InputdatasetCountAggregateInputType | true
    _avg?: InputdatasetAvgAggregateInputType
    _sum?: InputdatasetSumAggregateInputType
    _min?: InputdatasetMinAggregateInputType
    _max?: InputdatasetMaxAggregateInputType
  }

  export type InputdatasetGroupByOutputType = {
    id: number
    sourceType: $Enums.inputdataset_sourceType
    location: string
    dataFormat: $Enums.inputdataset_dataFormat
    _count: InputdatasetCountAggregateOutputType | null
    _avg: InputdatasetAvgAggregateOutputType | null
    _sum: InputdatasetSumAggregateOutputType | null
    _min: InputdatasetMinAggregateOutputType | null
    _max: InputdatasetMaxAggregateOutputType | null
  }

  type GetInputdatasetGroupByPayload<T extends inputdatasetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InputdatasetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InputdatasetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InputdatasetGroupByOutputType[P]>
            : GetScalarType<T[P], InputdatasetGroupByOutputType[P]>
        }
      >
    >


  export type inputdatasetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceType?: boolean
    location?: boolean
    dataFormat?: boolean
    jobtoproject?: boolean | inputdataset$jobtoprojectArgs<ExtArgs>
    _count?: boolean | InputdatasetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inputdataset"]>

  export type inputdatasetSelectScalar = {
    id?: boolean
    sourceType?: boolean
    location?: boolean
    dataFormat?: boolean
  }

  export type inputdatasetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobtoproject?: boolean | inputdataset$jobtoprojectArgs<ExtArgs>
    _count?: boolean | InputdatasetCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $inputdatasetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inputdataset"
    objects: {
      jobtoproject: Prisma.$jobtoprojectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sourceType: $Enums.inputdataset_sourceType
      location: string
      dataFormat: $Enums.inputdataset_dataFormat
    }, ExtArgs["result"]["inputdataset"]>
    composites: {}
  }


  type inputdatasetGetPayload<S extends boolean | null | undefined | inputdatasetDefaultArgs> = $Result.GetResult<Prisma.$inputdatasetPayload, S>

  type inputdatasetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<inputdatasetFindManyArgs, 'select' | 'include'> & {
      select?: InputdatasetCountAggregateInputType | true
    }

  export interface inputdatasetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inputdataset'], meta: { name: 'inputdataset' } }
    /**
     * Find zero or one Inputdataset that matches the filter.
     * @param {inputdatasetFindUniqueArgs} args - Arguments to find a Inputdataset
     * @example
     * // Get one Inputdataset
     * const inputdataset = await prisma.inputdataset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends inputdatasetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, inputdatasetFindUniqueArgs<ExtArgs>>
    ): Prisma__inputdatasetClient<$Result.GetResult<Prisma.$inputdatasetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Inputdataset that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {inputdatasetFindUniqueOrThrowArgs} args - Arguments to find a Inputdataset
     * @example
     * // Get one Inputdataset
     * const inputdataset = await prisma.inputdataset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends inputdatasetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inputdatasetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__inputdatasetClient<$Result.GetResult<Prisma.$inputdatasetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Inputdataset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inputdatasetFindFirstArgs} args - Arguments to find a Inputdataset
     * @example
     * // Get one Inputdataset
     * const inputdataset = await prisma.inputdataset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends inputdatasetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, inputdatasetFindFirstArgs<ExtArgs>>
    ): Prisma__inputdatasetClient<$Result.GetResult<Prisma.$inputdatasetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Inputdataset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inputdatasetFindFirstOrThrowArgs} args - Arguments to find a Inputdataset
     * @example
     * // Get one Inputdataset
     * const inputdataset = await prisma.inputdataset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends inputdatasetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inputdatasetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__inputdatasetClient<$Result.GetResult<Prisma.$inputdatasetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Inputdatasets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inputdatasetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inputdatasets
     * const inputdatasets = await prisma.inputdataset.findMany()
     * 
     * // Get first 10 Inputdatasets
     * const inputdatasets = await prisma.inputdataset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inputdatasetWithIdOnly = await prisma.inputdataset.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends inputdatasetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inputdatasetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inputdatasetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Inputdataset.
     * @param {inputdatasetCreateArgs} args - Arguments to create a Inputdataset.
     * @example
     * // Create one Inputdataset
     * const Inputdataset = await prisma.inputdataset.create({
     *   data: {
     *     // ... data to create a Inputdataset
     *   }
     * })
     * 
    **/
    create<T extends inputdatasetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, inputdatasetCreateArgs<ExtArgs>>
    ): Prisma__inputdatasetClient<$Result.GetResult<Prisma.$inputdatasetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Inputdatasets.
     *     @param {inputdatasetCreateManyArgs} args - Arguments to create many Inputdatasets.
     *     @example
     *     // Create many Inputdatasets
     *     const inputdataset = await prisma.inputdataset.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends inputdatasetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inputdatasetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inputdataset.
     * @param {inputdatasetDeleteArgs} args - Arguments to delete one Inputdataset.
     * @example
     * // Delete one Inputdataset
     * const Inputdataset = await prisma.inputdataset.delete({
     *   where: {
     *     // ... filter to delete one Inputdataset
     *   }
     * })
     * 
    **/
    delete<T extends inputdatasetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, inputdatasetDeleteArgs<ExtArgs>>
    ): Prisma__inputdatasetClient<$Result.GetResult<Prisma.$inputdatasetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Inputdataset.
     * @param {inputdatasetUpdateArgs} args - Arguments to update one Inputdataset.
     * @example
     * // Update one Inputdataset
     * const inputdataset = await prisma.inputdataset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends inputdatasetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, inputdatasetUpdateArgs<ExtArgs>>
    ): Prisma__inputdatasetClient<$Result.GetResult<Prisma.$inputdatasetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Inputdatasets.
     * @param {inputdatasetDeleteManyArgs} args - Arguments to filter Inputdatasets to delete.
     * @example
     * // Delete a few Inputdatasets
     * const { count } = await prisma.inputdataset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends inputdatasetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inputdatasetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inputdatasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inputdatasetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inputdatasets
     * const inputdataset = await prisma.inputdataset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends inputdatasetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, inputdatasetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inputdataset.
     * @param {inputdatasetUpsertArgs} args - Arguments to update or create a Inputdataset.
     * @example
     * // Update or create a Inputdataset
     * const inputdataset = await prisma.inputdataset.upsert({
     *   create: {
     *     // ... data to create a Inputdataset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inputdataset we want to update
     *   }
     * })
    **/
    upsert<T extends inputdatasetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, inputdatasetUpsertArgs<ExtArgs>>
    ): Prisma__inputdatasetClient<$Result.GetResult<Prisma.$inputdatasetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Inputdatasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inputdatasetCountArgs} args - Arguments to filter Inputdatasets to count.
     * @example
     * // Count the number of Inputdatasets
     * const count = await prisma.inputdataset.count({
     *   where: {
     *     // ... the filter for the Inputdatasets we want to count
     *   }
     * })
    **/
    count<T extends inputdatasetCountArgs>(
      args?: Subset<T, inputdatasetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InputdatasetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inputdataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputdatasetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InputdatasetAggregateArgs>(args: Subset<T, InputdatasetAggregateArgs>): Prisma.PrismaPromise<GetInputdatasetAggregateType<T>>

    /**
     * Group by Inputdataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inputdatasetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inputdatasetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inputdatasetGroupByArgs['orderBy'] }
        : { orderBy?: inputdatasetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inputdatasetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInputdatasetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inputdataset model
   */
  readonly fields: inputdatasetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inputdataset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inputdatasetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    jobtoproject<T extends inputdataset$jobtoprojectArgs<ExtArgs> = {}>(args?: Subset<T, inputdataset$jobtoprojectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobtoprojectPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the inputdataset model
   */ 
  interface inputdatasetFieldRefs {
    readonly id: FieldRef<"inputdataset", 'Int'>
    readonly sourceType: FieldRef<"inputdataset", 'inputdataset_sourceType'>
    readonly location: FieldRef<"inputdataset", 'String'>
    readonly dataFormat: FieldRef<"inputdataset", 'inputdataset_dataFormat'>
  }
    

  // Custom InputTypes

  /**
   * inputdataset findUnique
   */
  export type inputdatasetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inputdataset
     */
    select?: inputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inputdatasetInclude<ExtArgs> | null
    /**
     * Filter, which inputdataset to fetch.
     */
    where: inputdatasetWhereUniqueInput
  }


  /**
   * inputdataset findUniqueOrThrow
   */
  export type inputdatasetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inputdataset
     */
    select?: inputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inputdatasetInclude<ExtArgs> | null
    /**
     * Filter, which inputdataset to fetch.
     */
    where: inputdatasetWhereUniqueInput
  }


  /**
   * inputdataset findFirst
   */
  export type inputdatasetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inputdataset
     */
    select?: inputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inputdatasetInclude<ExtArgs> | null
    /**
     * Filter, which inputdataset to fetch.
     */
    where?: inputdatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inputdatasets to fetch.
     */
    orderBy?: inputdatasetOrderByWithRelationInput | inputdatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inputdatasets.
     */
    cursor?: inputdatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inputdatasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inputdatasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inputdatasets.
     */
    distinct?: InputdatasetScalarFieldEnum | InputdatasetScalarFieldEnum[]
  }


  /**
   * inputdataset findFirstOrThrow
   */
  export type inputdatasetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inputdataset
     */
    select?: inputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inputdatasetInclude<ExtArgs> | null
    /**
     * Filter, which inputdataset to fetch.
     */
    where?: inputdatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inputdatasets to fetch.
     */
    orderBy?: inputdatasetOrderByWithRelationInput | inputdatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inputdatasets.
     */
    cursor?: inputdatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inputdatasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inputdatasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inputdatasets.
     */
    distinct?: InputdatasetScalarFieldEnum | InputdatasetScalarFieldEnum[]
  }


  /**
   * inputdataset findMany
   */
  export type inputdatasetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inputdataset
     */
    select?: inputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inputdatasetInclude<ExtArgs> | null
    /**
     * Filter, which inputdatasets to fetch.
     */
    where?: inputdatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inputdatasets to fetch.
     */
    orderBy?: inputdatasetOrderByWithRelationInput | inputdatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inputdatasets.
     */
    cursor?: inputdatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inputdatasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inputdatasets.
     */
    skip?: number
    distinct?: InputdatasetScalarFieldEnum | InputdatasetScalarFieldEnum[]
  }


  /**
   * inputdataset create
   */
  export type inputdatasetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inputdataset
     */
    select?: inputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inputdatasetInclude<ExtArgs> | null
    /**
     * The data needed to create a inputdataset.
     */
    data: XOR<inputdatasetCreateInput, inputdatasetUncheckedCreateInput>
  }


  /**
   * inputdataset createMany
   */
  export type inputdatasetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inputdatasets.
     */
    data: inputdatasetCreateManyInput | inputdatasetCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * inputdataset update
   */
  export type inputdatasetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inputdataset
     */
    select?: inputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inputdatasetInclude<ExtArgs> | null
    /**
     * The data needed to update a inputdataset.
     */
    data: XOR<inputdatasetUpdateInput, inputdatasetUncheckedUpdateInput>
    /**
     * Choose, which inputdataset to update.
     */
    where: inputdatasetWhereUniqueInput
  }


  /**
   * inputdataset updateMany
   */
  export type inputdatasetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inputdatasets.
     */
    data: XOR<inputdatasetUpdateManyMutationInput, inputdatasetUncheckedUpdateManyInput>
    /**
     * Filter which inputdatasets to update
     */
    where?: inputdatasetWhereInput
  }


  /**
   * inputdataset upsert
   */
  export type inputdatasetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inputdataset
     */
    select?: inputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inputdatasetInclude<ExtArgs> | null
    /**
     * The filter to search for the inputdataset to update in case it exists.
     */
    where: inputdatasetWhereUniqueInput
    /**
     * In case the inputdataset found by the `where` argument doesn't exist, create a new inputdataset with this data.
     */
    create: XOR<inputdatasetCreateInput, inputdatasetUncheckedCreateInput>
    /**
     * In case the inputdataset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inputdatasetUpdateInput, inputdatasetUncheckedUpdateInput>
  }


  /**
   * inputdataset delete
   */
  export type inputdatasetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inputdataset
     */
    select?: inputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inputdatasetInclude<ExtArgs> | null
    /**
     * Filter which inputdataset to delete.
     */
    where: inputdatasetWhereUniqueInput
  }


  /**
   * inputdataset deleteMany
   */
  export type inputdatasetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inputdatasets to delete
     */
    where?: inputdatasetWhereInput
  }


  /**
   * inputdataset.jobtoproject
   */
  export type inputdataset$jobtoprojectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobtoproject
     */
    select?: jobtoprojectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobtoprojectInclude<ExtArgs> | null
    where?: jobtoprojectWhereInput
    orderBy?: jobtoprojectOrderByWithRelationInput | jobtoprojectOrderByWithRelationInput[]
    cursor?: jobtoprojectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobtoprojectScalarFieldEnum | JobtoprojectScalarFieldEnum[]
  }


  /**
   * inputdataset without action
   */
  export type inputdatasetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inputdataset
     */
    select?: inputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inputdatasetInclude<ExtArgs> | null
  }



  /**
   * Model job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type JobSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type JobMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    code: string | null
    creationDate: Date | null
    latestEdit: Date | null
    categoryId: number | null
  }

  export type JobMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    code: string | null
    creationDate: Date | null
    latestEdit: Date | null
    categoryId: number | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    name: number
    description: number
    code: number
    creationDate: number
    latestEdit: number
    categoryId: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type JobSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    code?: true
    creationDate?: true
    latestEdit?: true
    categoryId?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    code?: true
    creationDate?: true
    latestEdit?: true
    categoryId?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    code?: true
    creationDate?: true
    latestEdit?: true
    categoryId?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job to aggregate.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type jobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobWhereInput
    orderBy?: jobOrderByWithAggregationInput | jobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: jobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: number
    name: string
    description: string | null
    code: string | null
    creationDate: Date
    latestEdit: Date
    categoryId: number
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends jobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type jobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    code?: boolean
    creationDate?: boolean
    latestEdit?: boolean
    categoryId?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    jobtoproject?: boolean | job$jobtoprojectArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type jobSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    code?: boolean
    creationDate?: boolean
    latestEdit?: boolean
    categoryId?: boolean
  }

  export type jobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    jobtoproject?: boolean | job$jobtoprojectArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $jobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs>
      jobtoproject: Prisma.$jobtoprojectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      code: string | null
      creationDate: Date
      latestEdit: Date
      categoryId: number
    }, ExtArgs["result"]["job"]>
    composites: {}
  }


  type jobGetPayload<S extends boolean | null | undefined | jobDefaultArgs> = $Result.GetResult<Prisma.$jobPayload, S>

  type jobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<jobFindManyArgs, 'select' | 'include'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface jobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job'], meta: { name: 'job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {jobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends jobFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, jobFindUniqueArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Job that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {jobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends jobFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends jobFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindFirstArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends jobFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends jobFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Job.
     * @param {jobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
    **/
    create<T extends jobCreateArgs<ExtArgs>>(
      args: SelectSubset<T, jobCreateArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jobs.
     *     @param {jobCreateManyArgs} args - Arguments to create many Jobs.
     *     @example
     *     // Create many Jobs
     *     const job = await prisma.job.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends jobCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job.
     * @param {jobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
    **/
    delete<T extends jobDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, jobDeleteArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Job.
     * @param {jobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends jobUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpdateArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {jobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends jobDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends jobUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {jobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
    **/
    upsert<T extends jobUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpsertArgs<ExtArgs>>
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobCountArgs>(
      args?: Subset<T, jobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobGroupByArgs['orderBy'] }
        : { orderBy?: jobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job model
   */
  readonly fields: jobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    jobtoproject<T extends job$jobtoprojectArgs<ExtArgs> = {}>(args?: Subset<T, job$jobtoprojectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobtoprojectPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the job model
   */ 
  interface jobFieldRefs {
    readonly id: FieldRef<"job", 'Int'>
    readonly name: FieldRef<"job", 'String'>
    readonly description: FieldRef<"job", 'String'>
    readonly code: FieldRef<"job", 'String'>
    readonly creationDate: FieldRef<"job", 'DateTime'>
    readonly latestEdit: FieldRef<"job", 'DateTime'>
    readonly categoryId: FieldRef<"job", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * job findUnique
   */
  export type jobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput
  }


  /**
   * job findUniqueOrThrow
   */
  export type jobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput
  }


  /**
   * job findFirst
   */
  export type jobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * job findFirstOrThrow
   */
  export type jobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * job findMany
   */
  export type jobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * job create
   */
  export type jobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * The data needed to create a job.
     */
    data: XOR<jobCreateInput, jobUncheckedCreateInput>
  }


  /**
   * job createMany
   */
  export type jobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobCreateManyInput | jobCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * job update
   */
  export type jobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * The data needed to update a job.
     */
    data: XOR<jobUpdateInput, jobUncheckedUpdateInput>
    /**
     * Choose, which job to update.
     */
    where: jobWhereUniqueInput
  }


  /**
   * job updateMany
   */
  export type jobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobWhereInput
  }


  /**
   * job upsert
   */
  export type jobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * The filter to search for the job to update in case it exists.
     */
    where: jobWhereUniqueInput
    /**
     * In case the job found by the `where` argument doesn't exist, create a new job with this data.
     */
    create: XOR<jobCreateInput, jobUncheckedCreateInput>
    /**
     * In case the job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobUpdateInput, jobUncheckedUpdateInput>
  }


  /**
   * job delete
   */
  export type jobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
    /**
     * Filter which job to delete.
     */
    where: jobWhereUniqueInput
  }


  /**
   * job deleteMany
   */
  export type jobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobWhereInput
  }


  /**
   * job.jobtoproject
   */
  export type job$jobtoprojectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobtoproject
     */
    select?: jobtoprojectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobtoprojectInclude<ExtArgs> | null
    where?: jobtoprojectWhereInput
    orderBy?: jobtoprojectOrderByWithRelationInput | jobtoprojectOrderByWithRelationInput[]
    cursor?: jobtoprojectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobtoprojectScalarFieldEnum | JobtoprojectScalarFieldEnum[]
  }


  /**
   * job without action
   */
  export type jobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null
  }



  /**
   * Model jobtoproject
   */

  export type AggregateJobtoproject = {
    _count: JobtoprojectCountAggregateOutputType | null
    _avg: JobtoprojectAvgAggregateOutputType | null
    _sum: JobtoprojectSumAggregateOutputType | null
    _min: JobtoprojectMinAggregateOutputType | null
    _max: JobtoprojectMaxAggregateOutputType | null
  }

  export type JobtoprojectAvgAggregateOutputType = {
    id: number | null
    jobId: number | null
    projectId: number | null
    inputDatasetId: number | null
  }

  export type JobtoprojectSumAggregateOutputType = {
    id: number | null
    jobId: number | null
    projectId: number | null
    inputDatasetId: number | null
  }

  export type JobtoprojectMinAggregateOutputType = {
    id: number | null
    jobId: number | null
    projectId: number | null
    inputDatasetId: number | null
  }

  export type JobtoprojectMaxAggregateOutputType = {
    id: number | null
    jobId: number | null
    projectId: number | null
    inputDatasetId: number | null
  }

  export type JobtoprojectCountAggregateOutputType = {
    id: number
    jobId: number
    projectId: number
    inputDatasetId: number
    _all: number
  }


  export type JobtoprojectAvgAggregateInputType = {
    id?: true
    jobId?: true
    projectId?: true
    inputDatasetId?: true
  }

  export type JobtoprojectSumAggregateInputType = {
    id?: true
    jobId?: true
    projectId?: true
    inputDatasetId?: true
  }

  export type JobtoprojectMinAggregateInputType = {
    id?: true
    jobId?: true
    projectId?: true
    inputDatasetId?: true
  }

  export type JobtoprojectMaxAggregateInputType = {
    id?: true
    jobId?: true
    projectId?: true
    inputDatasetId?: true
  }

  export type JobtoprojectCountAggregateInputType = {
    id?: true
    jobId?: true
    projectId?: true
    inputDatasetId?: true
    _all?: true
  }

  export type JobtoprojectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobtoproject to aggregate.
     */
    where?: jobtoprojectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobtoprojects to fetch.
     */
    orderBy?: jobtoprojectOrderByWithRelationInput | jobtoprojectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobtoprojectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobtoprojects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobtoprojects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobtoprojects
    **/
    _count?: true | JobtoprojectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobtoprojectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobtoprojectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobtoprojectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobtoprojectMaxAggregateInputType
  }

  export type GetJobtoprojectAggregateType<T extends JobtoprojectAggregateArgs> = {
        [P in keyof T & keyof AggregateJobtoproject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobtoproject[P]>
      : GetScalarType<T[P], AggregateJobtoproject[P]>
  }




  export type jobtoprojectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobtoprojectWhereInput
    orderBy?: jobtoprojectOrderByWithAggregationInput | jobtoprojectOrderByWithAggregationInput[]
    by: JobtoprojectScalarFieldEnum[] | JobtoprojectScalarFieldEnum
    having?: jobtoprojectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobtoprojectCountAggregateInputType | true
    _avg?: JobtoprojectAvgAggregateInputType
    _sum?: JobtoprojectSumAggregateInputType
    _min?: JobtoprojectMinAggregateInputType
    _max?: JobtoprojectMaxAggregateInputType
  }

  export type JobtoprojectGroupByOutputType = {
    id: number
    jobId: number
    projectId: number
    inputDatasetId: number | null
    _count: JobtoprojectCountAggregateOutputType | null
    _avg: JobtoprojectAvgAggregateOutputType | null
    _sum: JobtoprojectSumAggregateOutputType | null
    _min: JobtoprojectMinAggregateOutputType | null
    _max: JobtoprojectMaxAggregateOutputType | null
  }

  type GetJobtoprojectGroupByPayload<T extends jobtoprojectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobtoprojectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobtoprojectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobtoprojectGroupByOutputType[P]>
            : GetScalarType<T[P], JobtoprojectGroupByOutputType[P]>
        }
      >
    >


  export type jobtoprojectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    projectId?: boolean
    inputDatasetId?: boolean
    inputdataset?: boolean | jobtoproject$inputdatasetArgs<ExtArgs>
    job?: boolean | jobDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
    outputdataset?: boolean | jobtoproject$outputdatasetArgs<ExtArgs>
    _count?: boolean | JobtoprojectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobtoproject"]>

  export type jobtoprojectSelectScalar = {
    id?: boolean
    jobId?: boolean
    projectId?: boolean
    inputDatasetId?: boolean
  }

  export type jobtoprojectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputdataset?: boolean | jobtoproject$inputdatasetArgs<ExtArgs>
    job?: boolean | jobDefaultArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
    outputdataset?: boolean | jobtoproject$outputdatasetArgs<ExtArgs>
    _count?: boolean | JobtoprojectCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $jobtoprojectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobtoproject"
    objects: {
      inputdataset: Prisma.$inputdatasetPayload<ExtArgs> | null
      job: Prisma.$jobPayload<ExtArgs>
      project: Prisma.$projectPayload<ExtArgs>
      outputdataset: Prisma.$outputdatasetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobId: number
      projectId: number
      inputDatasetId: number | null
    }, ExtArgs["result"]["jobtoproject"]>
    composites: {}
  }


  type jobtoprojectGetPayload<S extends boolean | null | undefined | jobtoprojectDefaultArgs> = $Result.GetResult<Prisma.$jobtoprojectPayload, S>

  type jobtoprojectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<jobtoprojectFindManyArgs, 'select' | 'include'> & {
      select?: JobtoprojectCountAggregateInputType | true
    }

  export interface jobtoprojectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobtoproject'], meta: { name: 'jobtoproject' } }
    /**
     * Find zero or one Jobtoproject that matches the filter.
     * @param {jobtoprojectFindUniqueArgs} args - Arguments to find a Jobtoproject
     * @example
     * // Get one Jobtoproject
     * const jobtoproject = await prisma.jobtoproject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends jobtoprojectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, jobtoprojectFindUniqueArgs<ExtArgs>>
    ): Prisma__jobtoprojectClient<$Result.GetResult<Prisma.$jobtoprojectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Jobtoproject that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {jobtoprojectFindUniqueOrThrowArgs} args - Arguments to find a Jobtoproject
     * @example
     * // Get one Jobtoproject
     * const jobtoproject = await prisma.jobtoproject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends jobtoprojectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobtoprojectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__jobtoprojectClient<$Result.GetResult<Prisma.$jobtoprojectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Jobtoproject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobtoprojectFindFirstArgs} args - Arguments to find a Jobtoproject
     * @example
     * // Get one Jobtoproject
     * const jobtoproject = await prisma.jobtoproject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends jobtoprojectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, jobtoprojectFindFirstArgs<ExtArgs>>
    ): Prisma__jobtoprojectClient<$Result.GetResult<Prisma.$jobtoprojectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Jobtoproject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobtoprojectFindFirstOrThrowArgs} args - Arguments to find a Jobtoproject
     * @example
     * // Get one Jobtoproject
     * const jobtoproject = await prisma.jobtoproject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends jobtoprojectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobtoprojectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__jobtoprojectClient<$Result.GetResult<Prisma.$jobtoprojectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jobtoprojects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobtoprojectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobtoprojects
     * const jobtoprojects = await prisma.jobtoproject.findMany()
     * 
     * // Get first 10 Jobtoprojects
     * const jobtoprojects = await prisma.jobtoproject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobtoprojectWithIdOnly = await prisma.jobtoproject.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends jobtoprojectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobtoprojectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobtoprojectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Jobtoproject.
     * @param {jobtoprojectCreateArgs} args - Arguments to create a Jobtoproject.
     * @example
     * // Create one Jobtoproject
     * const Jobtoproject = await prisma.jobtoproject.create({
     *   data: {
     *     // ... data to create a Jobtoproject
     *   }
     * })
     * 
    **/
    create<T extends jobtoprojectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, jobtoprojectCreateArgs<ExtArgs>>
    ): Prisma__jobtoprojectClient<$Result.GetResult<Prisma.$jobtoprojectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jobtoprojects.
     *     @param {jobtoprojectCreateManyArgs} args - Arguments to create many Jobtoprojects.
     *     @example
     *     // Create many Jobtoprojects
     *     const jobtoproject = await prisma.jobtoproject.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends jobtoprojectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobtoprojectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jobtoproject.
     * @param {jobtoprojectDeleteArgs} args - Arguments to delete one Jobtoproject.
     * @example
     * // Delete one Jobtoproject
     * const Jobtoproject = await prisma.jobtoproject.delete({
     *   where: {
     *     // ... filter to delete one Jobtoproject
     *   }
     * })
     * 
    **/
    delete<T extends jobtoprojectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, jobtoprojectDeleteArgs<ExtArgs>>
    ): Prisma__jobtoprojectClient<$Result.GetResult<Prisma.$jobtoprojectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Jobtoproject.
     * @param {jobtoprojectUpdateArgs} args - Arguments to update one Jobtoproject.
     * @example
     * // Update one Jobtoproject
     * const jobtoproject = await prisma.jobtoproject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends jobtoprojectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, jobtoprojectUpdateArgs<ExtArgs>>
    ): Prisma__jobtoprojectClient<$Result.GetResult<Prisma.$jobtoprojectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jobtoprojects.
     * @param {jobtoprojectDeleteManyArgs} args - Arguments to filter Jobtoprojects to delete.
     * @example
     * // Delete a few Jobtoprojects
     * const { count } = await prisma.jobtoproject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends jobtoprojectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobtoprojectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobtoprojects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobtoprojectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobtoprojects
     * const jobtoproject = await prisma.jobtoproject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends jobtoprojectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, jobtoprojectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jobtoproject.
     * @param {jobtoprojectUpsertArgs} args - Arguments to update or create a Jobtoproject.
     * @example
     * // Update or create a Jobtoproject
     * const jobtoproject = await prisma.jobtoproject.upsert({
     *   create: {
     *     // ... data to create a Jobtoproject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobtoproject we want to update
     *   }
     * })
    **/
    upsert<T extends jobtoprojectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, jobtoprojectUpsertArgs<ExtArgs>>
    ): Prisma__jobtoprojectClient<$Result.GetResult<Prisma.$jobtoprojectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Jobtoprojects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobtoprojectCountArgs} args - Arguments to filter Jobtoprojects to count.
     * @example
     * // Count the number of Jobtoprojects
     * const count = await prisma.jobtoproject.count({
     *   where: {
     *     // ... the filter for the Jobtoprojects we want to count
     *   }
     * })
    **/
    count<T extends jobtoprojectCountArgs>(
      args?: Subset<T, jobtoprojectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobtoprojectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobtoproject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobtoprojectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobtoprojectAggregateArgs>(args: Subset<T, JobtoprojectAggregateArgs>): Prisma.PrismaPromise<GetJobtoprojectAggregateType<T>>

    /**
     * Group by Jobtoproject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobtoprojectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jobtoprojectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobtoprojectGroupByArgs['orderBy'] }
        : { orderBy?: jobtoprojectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jobtoprojectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobtoprojectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobtoproject model
   */
  readonly fields: jobtoprojectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobtoproject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobtoprojectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    inputdataset<T extends jobtoproject$inputdatasetArgs<ExtArgs> = {}>(args?: Subset<T, jobtoproject$inputdatasetArgs<ExtArgs>>): Prisma__inputdatasetClient<$Result.GetResult<Prisma.$inputdatasetPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    job<T extends jobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobDefaultArgs<ExtArgs>>): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    outputdataset<T extends jobtoproject$outputdatasetArgs<ExtArgs> = {}>(args?: Subset<T, jobtoproject$outputdatasetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$outputdatasetPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the jobtoproject model
   */ 
  interface jobtoprojectFieldRefs {
    readonly id: FieldRef<"jobtoproject", 'Int'>
    readonly jobId: FieldRef<"jobtoproject", 'Int'>
    readonly projectId: FieldRef<"jobtoproject", 'Int'>
    readonly inputDatasetId: FieldRef<"jobtoproject", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * jobtoproject findUnique
   */
  export type jobtoprojectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobtoproject
     */
    select?: jobtoprojectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobtoprojectInclude<ExtArgs> | null
    /**
     * Filter, which jobtoproject to fetch.
     */
    where: jobtoprojectWhereUniqueInput
  }


  /**
   * jobtoproject findUniqueOrThrow
   */
  export type jobtoprojectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobtoproject
     */
    select?: jobtoprojectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobtoprojectInclude<ExtArgs> | null
    /**
     * Filter, which jobtoproject to fetch.
     */
    where: jobtoprojectWhereUniqueInput
  }


  /**
   * jobtoproject findFirst
   */
  export type jobtoprojectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobtoproject
     */
    select?: jobtoprojectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobtoprojectInclude<ExtArgs> | null
    /**
     * Filter, which jobtoproject to fetch.
     */
    where?: jobtoprojectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobtoprojects to fetch.
     */
    orderBy?: jobtoprojectOrderByWithRelationInput | jobtoprojectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobtoprojects.
     */
    cursor?: jobtoprojectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobtoprojects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobtoprojects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobtoprojects.
     */
    distinct?: JobtoprojectScalarFieldEnum | JobtoprojectScalarFieldEnum[]
  }


  /**
   * jobtoproject findFirstOrThrow
   */
  export type jobtoprojectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobtoproject
     */
    select?: jobtoprojectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobtoprojectInclude<ExtArgs> | null
    /**
     * Filter, which jobtoproject to fetch.
     */
    where?: jobtoprojectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobtoprojects to fetch.
     */
    orderBy?: jobtoprojectOrderByWithRelationInput | jobtoprojectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobtoprojects.
     */
    cursor?: jobtoprojectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobtoprojects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobtoprojects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobtoprojects.
     */
    distinct?: JobtoprojectScalarFieldEnum | JobtoprojectScalarFieldEnum[]
  }


  /**
   * jobtoproject findMany
   */
  export type jobtoprojectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobtoproject
     */
    select?: jobtoprojectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobtoprojectInclude<ExtArgs> | null
    /**
     * Filter, which jobtoprojects to fetch.
     */
    where?: jobtoprojectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobtoprojects to fetch.
     */
    orderBy?: jobtoprojectOrderByWithRelationInput | jobtoprojectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobtoprojects.
     */
    cursor?: jobtoprojectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobtoprojects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobtoprojects.
     */
    skip?: number
    distinct?: JobtoprojectScalarFieldEnum | JobtoprojectScalarFieldEnum[]
  }


  /**
   * jobtoproject create
   */
  export type jobtoprojectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobtoproject
     */
    select?: jobtoprojectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobtoprojectInclude<ExtArgs> | null
    /**
     * The data needed to create a jobtoproject.
     */
    data: XOR<jobtoprojectCreateInput, jobtoprojectUncheckedCreateInput>
  }


  /**
   * jobtoproject createMany
   */
  export type jobtoprojectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobtoprojects.
     */
    data: jobtoprojectCreateManyInput | jobtoprojectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * jobtoproject update
   */
  export type jobtoprojectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobtoproject
     */
    select?: jobtoprojectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobtoprojectInclude<ExtArgs> | null
    /**
     * The data needed to update a jobtoproject.
     */
    data: XOR<jobtoprojectUpdateInput, jobtoprojectUncheckedUpdateInput>
    /**
     * Choose, which jobtoproject to update.
     */
    where: jobtoprojectWhereUniqueInput
  }


  /**
   * jobtoproject updateMany
   */
  export type jobtoprojectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobtoprojects.
     */
    data: XOR<jobtoprojectUpdateManyMutationInput, jobtoprojectUncheckedUpdateManyInput>
    /**
     * Filter which jobtoprojects to update
     */
    where?: jobtoprojectWhereInput
  }


  /**
   * jobtoproject upsert
   */
  export type jobtoprojectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobtoproject
     */
    select?: jobtoprojectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobtoprojectInclude<ExtArgs> | null
    /**
     * The filter to search for the jobtoproject to update in case it exists.
     */
    where: jobtoprojectWhereUniqueInput
    /**
     * In case the jobtoproject found by the `where` argument doesn't exist, create a new jobtoproject with this data.
     */
    create: XOR<jobtoprojectCreateInput, jobtoprojectUncheckedCreateInput>
    /**
     * In case the jobtoproject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobtoprojectUpdateInput, jobtoprojectUncheckedUpdateInput>
  }


  /**
   * jobtoproject delete
   */
  export type jobtoprojectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobtoproject
     */
    select?: jobtoprojectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobtoprojectInclude<ExtArgs> | null
    /**
     * Filter which jobtoproject to delete.
     */
    where: jobtoprojectWhereUniqueInput
  }


  /**
   * jobtoproject deleteMany
   */
  export type jobtoprojectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobtoprojects to delete
     */
    where?: jobtoprojectWhereInput
  }


  /**
   * jobtoproject.inputdataset
   */
  export type jobtoproject$inputdatasetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inputdataset
     */
    select?: inputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inputdatasetInclude<ExtArgs> | null
    where?: inputdatasetWhereInput
  }


  /**
   * jobtoproject.outputdataset
   */
  export type jobtoproject$outputdatasetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outputdataset
     */
    select?: outputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outputdatasetInclude<ExtArgs> | null
    where?: outputdatasetWhereInput
    orderBy?: outputdatasetOrderByWithRelationInput | outputdatasetOrderByWithRelationInput[]
    cursor?: outputdatasetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutputdatasetScalarFieldEnum | OutputdatasetScalarFieldEnum[]
  }


  /**
   * jobtoproject without action
   */
  export type jobtoprojectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobtoproject
     */
    select?: jobtoprojectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobtoprojectInclude<ExtArgs> | null
  }



  /**
   * Model outputdataset
   */

  export type AggregateOutputdataset = {
    _count: OutputdatasetCountAggregateOutputType | null
    _avg: OutputdatasetAvgAggregateOutputType | null
    _sum: OutputdatasetSumAggregateOutputType | null
    _min: OutputdatasetMinAggregateOutputType | null
    _max: OutputdatasetMaxAggregateOutputType | null
  }

  export type OutputdatasetAvgAggregateOutputType = {
    id: number | null
    jobAssociationId: number | null
  }

  export type OutputdatasetSumAggregateOutputType = {
    id: number | null
    jobAssociationId: number | null
  }

  export type OutputdatasetMinAggregateOutputType = {
    id: number | null
    creationDate: Date | null
    updateDate: Date | null
    jobAssociationId: number | null
  }

  export type OutputdatasetMaxAggregateOutputType = {
    id: number | null
    creationDate: Date | null
    updateDate: Date | null
    jobAssociationId: number | null
  }

  export type OutputdatasetCountAggregateOutputType = {
    id: number
    creationDate: number
    updateDate: number
    jobAssociationId: number
    _all: number
  }


  export type OutputdatasetAvgAggregateInputType = {
    id?: true
    jobAssociationId?: true
  }

  export type OutputdatasetSumAggregateInputType = {
    id?: true
    jobAssociationId?: true
  }

  export type OutputdatasetMinAggregateInputType = {
    id?: true
    creationDate?: true
    updateDate?: true
    jobAssociationId?: true
  }

  export type OutputdatasetMaxAggregateInputType = {
    id?: true
    creationDate?: true
    updateDate?: true
    jobAssociationId?: true
  }

  export type OutputdatasetCountAggregateInputType = {
    id?: true
    creationDate?: true
    updateDate?: true
    jobAssociationId?: true
    _all?: true
  }

  export type OutputdatasetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which outputdataset to aggregate.
     */
    where?: outputdatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of outputdatasets to fetch.
     */
    orderBy?: outputdatasetOrderByWithRelationInput | outputdatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: outputdatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` outputdatasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` outputdatasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned outputdatasets
    **/
    _count?: true | OutputdatasetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutputdatasetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutputdatasetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutputdatasetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutputdatasetMaxAggregateInputType
  }

  export type GetOutputdatasetAggregateType<T extends OutputdatasetAggregateArgs> = {
        [P in keyof T & keyof AggregateOutputdataset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutputdataset[P]>
      : GetScalarType<T[P], AggregateOutputdataset[P]>
  }




  export type outputdatasetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: outputdatasetWhereInput
    orderBy?: outputdatasetOrderByWithAggregationInput | outputdatasetOrderByWithAggregationInput[]
    by: OutputdatasetScalarFieldEnum[] | OutputdatasetScalarFieldEnum
    having?: outputdatasetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutputdatasetCountAggregateInputType | true
    _avg?: OutputdatasetAvgAggregateInputType
    _sum?: OutputdatasetSumAggregateInputType
    _min?: OutputdatasetMinAggregateInputType
    _max?: OutputdatasetMaxAggregateInputType
  }

  export type OutputdatasetGroupByOutputType = {
    id: number
    creationDate: Date
    updateDate: Date | null
    jobAssociationId: number
    _count: OutputdatasetCountAggregateOutputType | null
    _avg: OutputdatasetAvgAggregateOutputType | null
    _sum: OutputdatasetSumAggregateOutputType | null
    _min: OutputdatasetMinAggregateOutputType | null
    _max: OutputdatasetMaxAggregateOutputType | null
  }

  type GetOutputdatasetGroupByPayload<T extends outputdatasetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutputdatasetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutputdatasetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutputdatasetGroupByOutputType[P]>
            : GetScalarType<T[P], OutputdatasetGroupByOutputType[P]>
        }
      >
    >


  export type outputdatasetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creationDate?: boolean
    updateDate?: boolean
    jobAssociationId?: boolean
    jobtoproject?: boolean | jobtoprojectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outputdataset"]>

  export type outputdatasetSelectScalar = {
    id?: boolean
    creationDate?: boolean
    updateDate?: boolean
    jobAssociationId?: boolean
  }

  export type outputdatasetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobtoproject?: boolean | jobtoprojectDefaultArgs<ExtArgs>
  }


  export type $outputdatasetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "outputdataset"
    objects: {
      jobtoproject: Prisma.$jobtoprojectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creationDate: Date
      updateDate: Date | null
      jobAssociationId: number
    }, ExtArgs["result"]["outputdataset"]>
    composites: {}
  }


  type outputdatasetGetPayload<S extends boolean | null | undefined | outputdatasetDefaultArgs> = $Result.GetResult<Prisma.$outputdatasetPayload, S>

  type outputdatasetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<outputdatasetFindManyArgs, 'select' | 'include'> & {
      select?: OutputdatasetCountAggregateInputType | true
    }

  export interface outputdatasetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['outputdataset'], meta: { name: 'outputdataset' } }
    /**
     * Find zero or one Outputdataset that matches the filter.
     * @param {outputdatasetFindUniqueArgs} args - Arguments to find a Outputdataset
     * @example
     * // Get one Outputdataset
     * const outputdataset = await prisma.outputdataset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends outputdatasetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, outputdatasetFindUniqueArgs<ExtArgs>>
    ): Prisma__outputdatasetClient<$Result.GetResult<Prisma.$outputdatasetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Outputdataset that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {outputdatasetFindUniqueOrThrowArgs} args - Arguments to find a Outputdataset
     * @example
     * // Get one Outputdataset
     * const outputdataset = await prisma.outputdataset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends outputdatasetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, outputdatasetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__outputdatasetClient<$Result.GetResult<Prisma.$outputdatasetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Outputdataset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outputdatasetFindFirstArgs} args - Arguments to find a Outputdataset
     * @example
     * // Get one Outputdataset
     * const outputdataset = await prisma.outputdataset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends outputdatasetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, outputdatasetFindFirstArgs<ExtArgs>>
    ): Prisma__outputdatasetClient<$Result.GetResult<Prisma.$outputdatasetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Outputdataset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outputdatasetFindFirstOrThrowArgs} args - Arguments to find a Outputdataset
     * @example
     * // Get one Outputdataset
     * const outputdataset = await prisma.outputdataset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends outputdatasetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, outputdatasetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__outputdatasetClient<$Result.GetResult<Prisma.$outputdatasetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Outputdatasets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outputdatasetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outputdatasets
     * const outputdatasets = await prisma.outputdataset.findMany()
     * 
     * // Get first 10 Outputdatasets
     * const outputdatasets = await prisma.outputdataset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outputdatasetWithIdOnly = await prisma.outputdataset.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends outputdatasetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, outputdatasetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$outputdatasetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Outputdataset.
     * @param {outputdatasetCreateArgs} args - Arguments to create a Outputdataset.
     * @example
     * // Create one Outputdataset
     * const Outputdataset = await prisma.outputdataset.create({
     *   data: {
     *     // ... data to create a Outputdataset
     *   }
     * })
     * 
    **/
    create<T extends outputdatasetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, outputdatasetCreateArgs<ExtArgs>>
    ): Prisma__outputdatasetClient<$Result.GetResult<Prisma.$outputdatasetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Outputdatasets.
     *     @param {outputdatasetCreateManyArgs} args - Arguments to create many Outputdatasets.
     *     @example
     *     // Create many Outputdatasets
     *     const outputdataset = await prisma.outputdataset.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends outputdatasetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, outputdatasetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Outputdataset.
     * @param {outputdatasetDeleteArgs} args - Arguments to delete one Outputdataset.
     * @example
     * // Delete one Outputdataset
     * const Outputdataset = await prisma.outputdataset.delete({
     *   where: {
     *     // ... filter to delete one Outputdataset
     *   }
     * })
     * 
    **/
    delete<T extends outputdatasetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, outputdatasetDeleteArgs<ExtArgs>>
    ): Prisma__outputdatasetClient<$Result.GetResult<Prisma.$outputdatasetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Outputdataset.
     * @param {outputdatasetUpdateArgs} args - Arguments to update one Outputdataset.
     * @example
     * // Update one Outputdataset
     * const outputdataset = await prisma.outputdataset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends outputdatasetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, outputdatasetUpdateArgs<ExtArgs>>
    ): Prisma__outputdatasetClient<$Result.GetResult<Prisma.$outputdatasetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Outputdatasets.
     * @param {outputdatasetDeleteManyArgs} args - Arguments to filter Outputdatasets to delete.
     * @example
     * // Delete a few Outputdatasets
     * const { count } = await prisma.outputdataset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends outputdatasetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, outputdatasetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outputdatasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outputdatasetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outputdatasets
     * const outputdataset = await prisma.outputdataset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends outputdatasetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, outputdatasetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Outputdataset.
     * @param {outputdatasetUpsertArgs} args - Arguments to update or create a Outputdataset.
     * @example
     * // Update or create a Outputdataset
     * const outputdataset = await prisma.outputdataset.upsert({
     *   create: {
     *     // ... data to create a Outputdataset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outputdataset we want to update
     *   }
     * })
    **/
    upsert<T extends outputdatasetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, outputdatasetUpsertArgs<ExtArgs>>
    ): Prisma__outputdatasetClient<$Result.GetResult<Prisma.$outputdatasetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Outputdatasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outputdatasetCountArgs} args - Arguments to filter Outputdatasets to count.
     * @example
     * // Count the number of Outputdatasets
     * const count = await prisma.outputdataset.count({
     *   where: {
     *     // ... the filter for the Outputdatasets we want to count
     *   }
     * })
    **/
    count<T extends outputdatasetCountArgs>(
      args?: Subset<T, outputdatasetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutputdatasetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outputdataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutputdatasetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutputdatasetAggregateArgs>(args: Subset<T, OutputdatasetAggregateArgs>): Prisma.PrismaPromise<GetOutputdatasetAggregateType<T>>

    /**
     * Group by Outputdataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outputdatasetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends outputdatasetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: outputdatasetGroupByArgs['orderBy'] }
        : { orderBy?: outputdatasetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, outputdatasetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutputdatasetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the outputdataset model
   */
  readonly fields: outputdatasetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for outputdataset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__outputdatasetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    jobtoproject<T extends jobtoprojectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobtoprojectDefaultArgs<ExtArgs>>): Prisma__jobtoprojectClient<$Result.GetResult<Prisma.$jobtoprojectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the outputdataset model
   */ 
  interface outputdatasetFieldRefs {
    readonly id: FieldRef<"outputdataset", 'Int'>
    readonly creationDate: FieldRef<"outputdataset", 'DateTime'>
    readonly updateDate: FieldRef<"outputdataset", 'DateTime'>
    readonly jobAssociationId: FieldRef<"outputdataset", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * outputdataset findUnique
   */
  export type outputdatasetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outputdataset
     */
    select?: outputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outputdatasetInclude<ExtArgs> | null
    /**
     * Filter, which outputdataset to fetch.
     */
    where: outputdatasetWhereUniqueInput
  }


  /**
   * outputdataset findUniqueOrThrow
   */
  export type outputdatasetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outputdataset
     */
    select?: outputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outputdatasetInclude<ExtArgs> | null
    /**
     * Filter, which outputdataset to fetch.
     */
    where: outputdatasetWhereUniqueInput
  }


  /**
   * outputdataset findFirst
   */
  export type outputdatasetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outputdataset
     */
    select?: outputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outputdatasetInclude<ExtArgs> | null
    /**
     * Filter, which outputdataset to fetch.
     */
    where?: outputdatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of outputdatasets to fetch.
     */
    orderBy?: outputdatasetOrderByWithRelationInput | outputdatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for outputdatasets.
     */
    cursor?: outputdatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` outputdatasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` outputdatasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of outputdatasets.
     */
    distinct?: OutputdatasetScalarFieldEnum | OutputdatasetScalarFieldEnum[]
  }


  /**
   * outputdataset findFirstOrThrow
   */
  export type outputdatasetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outputdataset
     */
    select?: outputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outputdatasetInclude<ExtArgs> | null
    /**
     * Filter, which outputdataset to fetch.
     */
    where?: outputdatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of outputdatasets to fetch.
     */
    orderBy?: outputdatasetOrderByWithRelationInput | outputdatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for outputdatasets.
     */
    cursor?: outputdatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` outputdatasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` outputdatasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of outputdatasets.
     */
    distinct?: OutputdatasetScalarFieldEnum | OutputdatasetScalarFieldEnum[]
  }


  /**
   * outputdataset findMany
   */
  export type outputdatasetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outputdataset
     */
    select?: outputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outputdatasetInclude<ExtArgs> | null
    /**
     * Filter, which outputdatasets to fetch.
     */
    where?: outputdatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of outputdatasets to fetch.
     */
    orderBy?: outputdatasetOrderByWithRelationInput | outputdatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing outputdatasets.
     */
    cursor?: outputdatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` outputdatasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` outputdatasets.
     */
    skip?: number
    distinct?: OutputdatasetScalarFieldEnum | OutputdatasetScalarFieldEnum[]
  }


  /**
   * outputdataset create
   */
  export type outputdatasetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outputdataset
     */
    select?: outputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outputdatasetInclude<ExtArgs> | null
    /**
     * The data needed to create a outputdataset.
     */
    data: XOR<outputdatasetCreateInput, outputdatasetUncheckedCreateInput>
  }


  /**
   * outputdataset createMany
   */
  export type outputdatasetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many outputdatasets.
     */
    data: outputdatasetCreateManyInput | outputdatasetCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * outputdataset update
   */
  export type outputdatasetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outputdataset
     */
    select?: outputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outputdatasetInclude<ExtArgs> | null
    /**
     * The data needed to update a outputdataset.
     */
    data: XOR<outputdatasetUpdateInput, outputdatasetUncheckedUpdateInput>
    /**
     * Choose, which outputdataset to update.
     */
    where: outputdatasetWhereUniqueInput
  }


  /**
   * outputdataset updateMany
   */
  export type outputdatasetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update outputdatasets.
     */
    data: XOR<outputdatasetUpdateManyMutationInput, outputdatasetUncheckedUpdateManyInput>
    /**
     * Filter which outputdatasets to update
     */
    where?: outputdatasetWhereInput
  }


  /**
   * outputdataset upsert
   */
  export type outputdatasetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outputdataset
     */
    select?: outputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outputdatasetInclude<ExtArgs> | null
    /**
     * The filter to search for the outputdataset to update in case it exists.
     */
    where: outputdatasetWhereUniqueInput
    /**
     * In case the outputdataset found by the `where` argument doesn't exist, create a new outputdataset with this data.
     */
    create: XOR<outputdatasetCreateInput, outputdatasetUncheckedCreateInput>
    /**
     * In case the outputdataset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<outputdatasetUpdateInput, outputdatasetUncheckedUpdateInput>
  }


  /**
   * outputdataset delete
   */
  export type outputdatasetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outputdataset
     */
    select?: outputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outputdatasetInclude<ExtArgs> | null
    /**
     * Filter which outputdataset to delete.
     */
    where: outputdatasetWhereUniqueInput
  }


  /**
   * outputdataset deleteMany
   */
  export type outputdatasetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which outputdatasets to delete
     */
    where?: outputdatasetWhereInput
  }


  /**
   * outputdataset without action
   */
  export type outputdatasetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outputdataset
     */
    select?: outputdatasetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: outputdatasetInclude<ExtArgs> | null
  }



  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    frequency: $Enums.project_frequency | null
    status: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    frequency: $Enums.project_frequency | null
    status: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    frequency: number
    status: number
    startDate: number
    endDate: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    frequency?: true
    status?: true
    startDate?: true
    endDate?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    frequency?: true
    status?: true
    startDate?: true
    endDate?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    frequency?: true
    status?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    description: string | null
    frequency: $Enums.project_frequency
    status: number
    startDate: Date | null
    endDate: Date | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    frequency?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    jobtoproject?: boolean | project$jobtoprojectArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    frequency?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobtoproject?: boolean | project$jobtoprojectArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      jobtoproject: Prisma.$jobtoprojectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      frequency: $Enums.project_frequency
      status: number
      startDate: Date | null
      endDate: Date | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }


  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<projectFindManyArgs, 'select' | 'include'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends projectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends projectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends projectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends projectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, projectCreateArgs<ExtArgs>>
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projects.
     *     @param {projectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends projectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends projectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, projectDeleteArgs<ExtArgs>>
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends projectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateArgs<ExtArgs>>
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends projectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends projectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends projectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpsertArgs<ExtArgs>>
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    jobtoproject<T extends project$jobtoprojectArgs<ExtArgs> = {}>(args?: Subset<T, project$jobtoprojectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobtoprojectPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the project model
   */ 
  interface projectFieldRefs {
    readonly id: FieldRef<"project", 'Int'>
    readonly name: FieldRef<"project", 'String'>
    readonly description: FieldRef<"project", 'String'>
    readonly frequency: FieldRef<"project", 'project_frequency'>
    readonly status: FieldRef<"project", 'Int'>
    readonly startDate: FieldRef<"project", 'DateTime'>
    readonly endDate: FieldRef<"project", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }


  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }


  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }


  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }


  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
  }


  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }


  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }


  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
  }


  /**
   * project.jobtoproject
   */
  export type project$jobtoprojectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobtoproject
     */
    select?: jobtoprojectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobtoprojectInclude<ExtArgs> | null
    where?: jobtoprojectWhereInput
    orderBy?: jobtoprojectOrderByWithRelationInput | jobtoprojectOrderByWithRelationInput[]
    cursor?: jobtoprojectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobtoprojectScalarFieldEnum | JobtoprojectScalarFieldEnum[]
  }


  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const InputdatasetScalarFieldEnum: {
    id: 'id',
    sourceType: 'sourceType',
    location: 'location',
    dataFormat: 'dataFormat'
  };

  export type InputdatasetScalarFieldEnum = (typeof InputdatasetScalarFieldEnum)[keyof typeof InputdatasetScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    code: 'code',
    creationDate: 'creationDate',
    latestEdit: 'latestEdit',
    categoryId: 'categoryId'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const JobtoprojectScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    projectId: 'projectId',
    inputDatasetId: 'inputDatasetId'
  };

  export type JobtoprojectScalarFieldEnum = (typeof JobtoprojectScalarFieldEnum)[keyof typeof JobtoprojectScalarFieldEnum]


  export const OutputdatasetScalarFieldEnum: {
    id: 'id',
    creationDate: 'creationDate',
    updateDate: 'updateDate',
    jobAssociationId: 'jobAssociationId'
  };

  export type OutputdatasetScalarFieldEnum = (typeof OutputdatasetScalarFieldEnum)[keyof typeof OutputdatasetScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    frequency: 'frequency',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'inputdataset_sourceType'
   */
  export type Enuminputdataset_sourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'inputdataset_sourceType'>
    


  /**
   * Reference to a field of type 'inputdataset_dataFormat'
   */
  export type Enuminputdataset_dataFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'inputdataset_dataFormat'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'project_frequency'
   */
  export type Enumproject_frequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'project_frequency'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    job?: JobListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    job?: jobOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    job?: JobListRelationFilter
  }, "id">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
  }

  export type inputdatasetWhereInput = {
    AND?: inputdatasetWhereInput | inputdatasetWhereInput[]
    OR?: inputdatasetWhereInput[]
    NOT?: inputdatasetWhereInput | inputdatasetWhereInput[]
    id?: IntFilter<"inputdataset"> | number
    sourceType?: Enuminputdataset_sourceTypeFilter<"inputdataset"> | $Enums.inputdataset_sourceType
    location?: StringFilter<"inputdataset"> | string
    dataFormat?: Enuminputdataset_dataFormatFilter<"inputdataset"> | $Enums.inputdataset_dataFormat
    jobtoproject?: JobtoprojectListRelationFilter
  }

  export type inputdatasetOrderByWithRelationInput = {
    id?: SortOrder
    sourceType?: SortOrder
    location?: SortOrder
    dataFormat?: SortOrder
    jobtoproject?: jobtoprojectOrderByRelationAggregateInput
  }

  export type inputdatasetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: inputdatasetWhereInput | inputdatasetWhereInput[]
    OR?: inputdatasetWhereInput[]
    NOT?: inputdatasetWhereInput | inputdatasetWhereInput[]
    sourceType?: Enuminputdataset_sourceTypeFilter<"inputdataset"> | $Enums.inputdataset_sourceType
    location?: StringFilter<"inputdataset"> | string
    dataFormat?: Enuminputdataset_dataFormatFilter<"inputdataset"> | $Enums.inputdataset_dataFormat
    jobtoproject?: JobtoprojectListRelationFilter
  }, "id">

  export type inputdatasetOrderByWithAggregationInput = {
    id?: SortOrder
    sourceType?: SortOrder
    location?: SortOrder
    dataFormat?: SortOrder
    _count?: inputdatasetCountOrderByAggregateInput
    _avg?: inputdatasetAvgOrderByAggregateInput
    _max?: inputdatasetMaxOrderByAggregateInput
    _min?: inputdatasetMinOrderByAggregateInput
    _sum?: inputdatasetSumOrderByAggregateInput
  }

  export type inputdatasetScalarWhereWithAggregatesInput = {
    AND?: inputdatasetScalarWhereWithAggregatesInput | inputdatasetScalarWhereWithAggregatesInput[]
    OR?: inputdatasetScalarWhereWithAggregatesInput[]
    NOT?: inputdatasetScalarWhereWithAggregatesInput | inputdatasetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inputdataset"> | number
    sourceType?: Enuminputdataset_sourceTypeWithAggregatesFilter<"inputdataset"> | $Enums.inputdataset_sourceType
    location?: StringWithAggregatesFilter<"inputdataset"> | string
    dataFormat?: Enuminputdataset_dataFormatWithAggregatesFilter<"inputdataset"> | $Enums.inputdataset_dataFormat
  }

  export type jobWhereInput = {
    AND?: jobWhereInput | jobWhereInput[]
    OR?: jobWhereInput[]
    NOT?: jobWhereInput | jobWhereInput[]
    id?: IntFilter<"job"> | number
    name?: StringFilter<"job"> | string
    description?: StringNullableFilter<"job"> | string | null
    code?: StringNullableFilter<"job"> | string | null
    creationDate?: DateTimeFilter<"job"> | Date | string
    latestEdit?: DateTimeFilter<"job"> | Date | string
    categoryId?: IntFilter<"job"> | number
    category?: XOR<CategoryRelationFilter, categoryWhereInput>
    jobtoproject?: JobtoprojectListRelationFilter
  }

  export type jobOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    creationDate?: SortOrder
    latestEdit?: SortOrder
    categoryId?: SortOrder
    category?: categoryOrderByWithRelationInput
    jobtoproject?: jobtoprojectOrderByRelationAggregateInput
  }

  export type jobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: jobWhereInput | jobWhereInput[]
    OR?: jobWhereInput[]
    NOT?: jobWhereInput | jobWhereInput[]
    name?: StringFilter<"job"> | string
    description?: StringNullableFilter<"job"> | string | null
    code?: StringNullableFilter<"job"> | string | null
    creationDate?: DateTimeFilter<"job"> | Date | string
    latestEdit?: DateTimeFilter<"job"> | Date | string
    categoryId?: IntFilter<"job"> | number
    category?: XOR<CategoryRelationFilter, categoryWhereInput>
    jobtoproject?: JobtoprojectListRelationFilter
  }, "id">

  export type jobOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    creationDate?: SortOrder
    latestEdit?: SortOrder
    categoryId?: SortOrder
    _count?: jobCountOrderByAggregateInput
    _avg?: jobAvgOrderByAggregateInput
    _max?: jobMaxOrderByAggregateInput
    _min?: jobMinOrderByAggregateInput
    _sum?: jobSumOrderByAggregateInput
  }

  export type jobScalarWhereWithAggregatesInput = {
    AND?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[]
    OR?: jobScalarWhereWithAggregatesInput[]
    NOT?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"job"> | number
    name?: StringWithAggregatesFilter<"job"> | string
    description?: StringNullableWithAggregatesFilter<"job"> | string | null
    code?: StringNullableWithAggregatesFilter<"job"> | string | null
    creationDate?: DateTimeWithAggregatesFilter<"job"> | Date | string
    latestEdit?: DateTimeWithAggregatesFilter<"job"> | Date | string
    categoryId?: IntWithAggregatesFilter<"job"> | number
  }

  export type jobtoprojectWhereInput = {
    AND?: jobtoprojectWhereInput | jobtoprojectWhereInput[]
    OR?: jobtoprojectWhereInput[]
    NOT?: jobtoprojectWhereInput | jobtoprojectWhereInput[]
    id?: IntFilter<"jobtoproject"> | number
    jobId?: IntFilter<"jobtoproject"> | number
    projectId?: IntFilter<"jobtoproject"> | number
    inputDatasetId?: IntNullableFilter<"jobtoproject"> | number | null
    inputdataset?: XOR<InputdatasetNullableRelationFilter, inputdatasetWhereInput> | null
    job?: XOR<JobRelationFilter, jobWhereInput>
    project?: XOR<ProjectRelationFilter, projectWhereInput>
    outputdataset?: OutputdatasetListRelationFilter
  }

  export type jobtoprojectOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    projectId?: SortOrder
    inputDatasetId?: SortOrderInput | SortOrder
    inputdataset?: inputdatasetOrderByWithRelationInput
    job?: jobOrderByWithRelationInput
    project?: projectOrderByWithRelationInput
    outputdataset?: outputdatasetOrderByRelationAggregateInput
  }

  export type jobtoprojectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: jobtoprojectWhereInput | jobtoprojectWhereInput[]
    OR?: jobtoprojectWhereInput[]
    NOT?: jobtoprojectWhereInput | jobtoprojectWhereInput[]
    jobId?: IntFilter<"jobtoproject"> | number
    projectId?: IntFilter<"jobtoproject"> | number
    inputDatasetId?: IntNullableFilter<"jobtoproject"> | number | null
    inputdataset?: XOR<InputdatasetNullableRelationFilter, inputdatasetWhereInput> | null
    job?: XOR<JobRelationFilter, jobWhereInput>
    project?: XOR<ProjectRelationFilter, projectWhereInput>
    outputdataset?: OutputdatasetListRelationFilter
  }, "id">

  export type jobtoprojectOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    projectId?: SortOrder
    inputDatasetId?: SortOrderInput | SortOrder
    _count?: jobtoprojectCountOrderByAggregateInput
    _avg?: jobtoprojectAvgOrderByAggregateInput
    _max?: jobtoprojectMaxOrderByAggregateInput
    _min?: jobtoprojectMinOrderByAggregateInput
    _sum?: jobtoprojectSumOrderByAggregateInput
  }

  export type jobtoprojectScalarWhereWithAggregatesInput = {
    AND?: jobtoprojectScalarWhereWithAggregatesInput | jobtoprojectScalarWhereWithAggregatesInput[]
    OR?: jobtoprojectScalarWhereWithAggregatesInput[]
    NOT?: jobtoprojectScalarWhereWithAggregatesInput | jobtoprojectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jobtoproject"> | number
    jobId?: IntWithAggregatesFilter<"jobtoproject"> | number
    projectId?: IntWithAggregatesFilter<"jobtoproject"> | number
    inputDatasetId?: IntNullableWithAggregatesFilter<"jobtoproject"> | number | null
  }

  export type outputdatasetWhereInput = {
    AND?: outputdatasetWhereInput | outputdatasetWhereInput[]
    OR?: outputdatasetWhereInput[]
    NOT?: outputdatasetWhereInput | outputdatasetWhereInput[]
    id?: IntFilter<"outputdataset"> | number
    creationDate?: DateTimeFilter<"outputdataset"> | Date | string
    updateDate?: DateTimeNullableFilter<"outputdataset"> | Date | string | null
    jobAssociationId?: IntFilter<"outputdataset"> | number
    jobtoproject?: XOR<JobtoprojectRelationFilter, jobtoprojectWhereInput>
  }

  export type outputdatasetOrderByWithRelationInput = {
    id?: SortOrder
    creationDate?: SortOrder
    updateDate?: SortOrderInput | SortOrder
    jobAssociationId?: SortOrder
    jobtoproject?: jobtoprojectOrderByWithRelationInput
  }

  export type outputdatasetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: outputdatasetWhereInput | outputdatasetWhereInput[]
    OR?: outputdatasetWhereInput[]
    NOT?: outputdatasetWhereInput | outputdatasetWhereInput[]
    creationDate?: DateTimeFilter<"outputdataset"> | Date | string
    updateDate?: DateTimeNullableFilter<"outputdataset"> | Date | string | null
    jobAssociationId?: IntFilter<"outputdataset"> | number
    jobtoproject?: XOR<JobtoprojectRelationFilter, jobtoprojectWhereInput>
  }, "id">

  export type outputdatasetOrderByWithAggregationInput = {
    id?: SortOrder
    creationDate?: SortOrder
    updateDate?: SortOrderInput | SortOrder
    jobAssociationId?: SortOrder
    _count?: outputdatasetCountOrderByAggregateInput
    _avg?: outputdatasetAvgOrderByAggregateInput
    _max?: outputdatasetMaxOrderByAggregateInput
    _min?: outputdatasetMinOrderByAggregateInput
    _sum?: outputdatasetSumOrderByAggregateInput
  }

  export type outputdatasetScalarWhereWithAggregatesInput = {
    AND?: outputdatasetScalarWhereWithAggregatesInput | outputdatasetScalarWhereWithAggregatesInput[]
    OR?: outputdatasetScalarWhereWithAggregatesInput[]
    NOT?: outputdatasetScalarWhereWithAggregatesInput | outputdatasetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"outputdataset"> | number
    creationDate?: DateTimeWithAggregatesFilter<"outputdataset"> | Date | string
    updateDate?: DateTimeNullableWithAggregatesFilter<"outputdataset"> | Date | string | null
    jobAssociationId?: IntWithAggregatesFilter<"outputdataset"> | number
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    id?: IntFilter<"project"> | number
    name?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    frequency?: Enumproject_frequencyFilter<"project"> | $Enums.project_frequency
    status?: IntFilter<"project"> | number
    startDate?: DateTimeNullableFilter<"project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"project"> | Date | string | null
    jobtoproject?: JobtoprojectListRelationFilter
  }

  export type projectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    frequency?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    jobtoproject?: jobtoprojectOrderByRelationAggregateInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    name?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    frequency?: Enumproject_frequencyFilter<"project"> | $Enums.project_frequency
    status?: IntFilter<"project"> | number
    startDate?: DateTimeNullableFilter<"project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"project"> | Date | string | null
    jobtoproject?: JobtoprojectListRelationFilter
  }, "id">

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    frequency?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    _count?: projectCountOrderByAggregateInput
    _avg?: projectAvgOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
    _sum?: projectSumOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project"> | number
    name?: StringWithAggregatesFilter<"project"> | string
    description?: StringNullableWithAggregatesFilter<"project"> | string | null
    frequency?: Enumproject_frequencyWithAggregatesFilter<"project"> | $Enums.project_frequency
    status?: IntWithAggregatesFilter<"project"> | number
    startDate?: DateTimeNullableWithAggregatesFilter<"project"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"project"> | Date | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type categoryCreateInput = {
    name: string
    job?: jobCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    name: string
    job?: jobUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    job?: jobUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    job?: jobUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    name: string
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type inputdatasetCreateInput = {
    sourceType: $Enums.inputdataset_sourceType
    location: string
    dataFormat: $Enums.inputdataset_dataFormat
    jobtoproject?: jobtoprojectCreateNestedManyWithoutInputdatasetInput
  }

  export type inputdatasetUncheckedCreateInput = {
    id?: number
    sourceType: $Enums.inputdataset_sourceType
    location: string
    dataFormat: $Enums.inputdataset_dataFormat
    jobtoproject?: jobtoprojectUncheckedCreateNestedManyWithoutInputdatasetInput
  }

  export type inputdatasetUpdateInput = {
    sourceType?: Enuminputdataset_sourceTypeFieldUpdateOperationsInput | $Enums.inputdataset_sourceType
    location?: StringFieldUpdateOperationsInput | string
    dataFormat?: Enuminputdataset_dataFormatFieldUpdateOperationsInput | $Enums.inputdataset_dataFormat
    jobtoproject?: jobtoprojectUpdateManyWithoutInputdatasetNestedInput
  }

  export type inputdatasetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceType?: Enuminputdataset_sourceTypeFieldUpdateOperationsInput | $Enums.inputdataset_sourceType
    location?: StringFieldUpdateOperationsInput | string
    dataFormat?: Enuminputdataset_dataFormatFieldUpdateOperationsInput | $Enums.inputdataset_dataFormat
    jobtoproject?: jobtoprojectUncheckedUpdateManyWithoutInputdatasetNestedInput
  }

  export type inputdatasetCreateManyInput = {
    id?: number
    sourceType: $Enums.inputdataset_sourceType
    location: string
    dataFormat: $Enums.inputdataset_dataFormat
  }

  export type inputdatasetUpdateManyMutationInput = {
    sourceType?: Enuminputdataset_sourceTypeFieldUpdateOperationsInput | $Enums.inputdataset_sourceType
    location?: StringFieldUpdateOperationsInput | string
    dataFormat?: Enuminputdataset_dataFormatFieldUpdateOperationsInput | $Enums.inputdataset_dataFormat
  }

  export type inputdatasetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceType?: Enuminputdataset_sourceTypeFieldUpdateOperationsInput | $Enums.inputdataset_sourceType
    location?: StringFieldUpdateOperationsInput | string
    dataFormat?: Enuminputdataset_dataFormatFieldUpdateOperationsInput | $Enums.inputdataset_dataFormat
  }

  export type jobCreateInput = {
    name: string
    description?: string | null
    code?: string | null
    creationDate?: Date | string
    latestEdit: Date | string
    category: categoryCreateNestedOneWithoutJobInput
    jobtoproject?: jobtoprojectCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    code?: string | null
    creationDate?: Date | string
    latestEdit: Date | string
    categoryId: number
    jobtoproject?: jobtoprojectUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latestEdit?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutJobNestedInput
    jobtoproject?: jobtoprojectUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latestEdit?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    jobtoproject?: jobtoprojectUncheckedUpdateManyWithoutJobNestedInput
  }

  export type jobCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    code?: string | null
    creationDate?: Date | string
    latestEdit: Date | string
    categoryId: number
  }

  export type jobUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latestEdit?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latestEdit?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type jobtoprojectCreateInput = {
    inputdataset?: inputdatasetCreateNestedOneWithoutJobtoprojectInput
    job: jobCreateNestedOneWithoutJobtoprojectInput
    project: projectCreateNestedOneWithoutJobtoprojectInput
    outputdataset?: outputdatasetCreateNestedManyWithoutJobtoprojectInput
  }

  export type jobtoprojectUncheckedCreateInput = {
    id?: number
    jobId: number
    projectId: number
    inputDatasetId?: number | null
    outputdataset?: outputdatasetUncheckedCreateNestedManyWithoutJobtoprojectInput
  }

  export type jobtoprojectUpdateInput = {
    inputdataset?: inputdatasetUpdateOneWithoutJobtoprojectNestedInput
    job?: jobUpdateOneRequiredWithoutJobtoprojectNestedInput
    project?: projectUpdateOneRequiredWithoutJobtoprojectNestedInput
    outputdataset?: outputdatasetUpdateManyWithoutJobtoprojectNestedInput
  }

  export type jobtoprojectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    inputDatasetId?: NullableIntFieldUpdateOperationsInput | number | null
    outputdataset?: outputdatasetUncheckedUpdateManyWithoutJobtoprojectNestedInput
  }

  export type jobtoprojectCreateManyInput = {
    id?: number
    jobId: number
    projectId: number
    inputDatasetId?: number | null
  }

  export type jobtoprojectUpdateManyMutationInput = {

  }

  export type jobtoprojectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    inputDatasetId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type outputdatasetCreateInput = {
    creationDate?: Date | string
    updateDate?: Date | string | null
    jobtoproject: jobtoprojectCreateNestedOneWithoutOutputdatasetInput
  }

  export type outputdatasetUncheckedCreateInput = {
    id?: number
    creationDate?: Date | string
    updateDate?: Date | string | null
    jobAssociationId: number
  }

  export type outputdatasetUpdateInput = {
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobtoproject?: jobtoprojectUpdateOneRequiredWithoutOutputdatasetNestedInput
  }

  export type outputdatasetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAssociationId?: IntFieldUpdateOperationsInput | number
  }

  export type outputdatasetCreateManyInput = {
    id?: number
    creationDate?: Date | string
    updateDate?: Date | string | null
    jobAssociationId: number
  }

  export type outputdatasetUpdateManyMutationInput = {
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type outputdatasetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAssociationId?: IntFieldUpdateOperationsInput | number
  }

  export type projectCreateInput = {
    name: string
    description?: string | null
    frequency: $Enums.project_frequency
    status: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    jobtoproject?: jobtoprojectCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    frequency: $Enums.project_frequency
    status: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    jobtoproject?: jobtoprojectUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: Enumproject_frequencyFieldUpdateOperationsInput | $Enums.project_frequency
    status?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobtoproject?: jobtoprojectUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: Enumproject_frequencyFieldUpdateOperationsInput | $Enums.project_frequency
    status?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobtoproject?: jobtoprojectUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    frequency: $Enums.project_frequency
    status: number
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type projectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: Enumproject_frequencyFieldUpdateOperationsInput | $Enums.project_frequency
    status?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: Enumproject_frequencyFieldUpdateOperationsInput | $Enums.project_frequency
    status?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type JobListRelationFilter = {
    every?: jobWhereInput
    some?: jobWhereInput
    none?: jobWhereInput
  }

  export type jobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enuminputdataset_sourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.inputdataset_sourceType | Enuminputdataset_sourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.inputdataset_sourceType[]
    notIn?: $Enums.inputdataset_sourceType[]
    not?: NestedEnuminputdataset_sourceTypeFilter<$PrismaModel> | $Enums.inputdataset_sourceType
  }

  export type Enuminputdataset_dataFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.inputdataset_dataFormat | Enuminputdataset_dataFormatFieldRefInput<$PrismaModel>
    in?: $Enums.inputdataset_dataFormat[]
    notIn?: $Enums.inputdataset_dataFormat[]
    not?: NestedEnuminputdataset_dataFormatFilter<$PrismaModel> | $Enums.inputdataset_dataFormat
  }

  export type JobtoprojectListRelationFilter = {
    every?: jobtoprojectWhereInput
    some?: jobtoprojectWhereInput
    none?: jobtoprojectWhereInput
  }

  export type jobtoprojectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type inputdatasetCountOrderByAggregateInput = {
    id?: SortOrder
    sourceType?: SortOrder
    location?: SortOrder
    dataFormat?: SortOrder
  }

  export type inputdatasetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type inputdatasetMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceType?: SortOrder
    location?: SortOrder
    dataFormat?: SortOrder
  }

  export type inputdatasetMinOrderByAggregateInput = {
    id?: SortOrder
    sourceType?: SortOrder
    location?: SortOrder
    dataFormat?: SortOrder
  }

  export type inputdatasetSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enuminputdataset_sourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.inputdataset_sourceType | Enuminputdataset_sourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.inputdataset_sourceType[]
    notIn?: $Enums.inputdataset_sourceType[]
    not?: NestedEnuminputdataset_sourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.inputdataset_sourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminputdataset_sourceTypeFilter<$PrismaModel>
    _max?: NestedEnuminputdataset_sourceTypeFilter<$PrismaModel>
  }

  export type Enuminputdataset_dataFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.inputdataset_dataFormat | Enuminputdataset_dataFormatFieldRefInput<$PrismaModel>
    in?: $Enums.inputdataset_dataFormat[]
    notIn?: $Enums.inputdataset_dataFormat[]
    not?: NestedEnuminputdataset_dataFormatWithAggregatesFilter<$PrismaModel> | $Enums.inputdataset_dataFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminputdataset_dataFormatFilter<$PrismaModel>
    _max?: NestedEnuminputdataset_dataFormatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoryRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type jobCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    code?: SortOrder
    creationDate?: SortOrder
    latestEdit?: SortOrder
    categoryId?: SortOrder
  }

  export type jobAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type jobMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    code?: SortOrder
    creationDate?: SortOrder
    latestEdit?: SortOrder
    categoryId?: SortOrder
  }

  export type jobMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    code?: SortOrder
    creationDate?: SortOrder
    latestEdit?: SortOrder
    categoryId?: SortOrder
  }

  export type jobSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InputdatasetNullableRelationFilter = {
    is?: inputdatasetWhereInput | null
    isNot?: inputdatasetWhereInput | null
  }

  export type JobRelationFilter = {
    is?: jobWhereInput
    isNot?: jobWhereInput
  }

  export type ProjectRelationFilter = {
    is?: projectWhereInput
    isNot?: projectWhereInput
  }

  export type OutputdatasetListRelationFilter = {
    every?: outputdatasetWhereInput
    some?: outputdatasetWhereInput
    none?: outputdatasetWhereInput
  }

  export type outputdatasetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jobtoprojectCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    projectId?: SortOrder
    inputDatasetId?: SortOrder
  }

  export type jobtoprojectAvgOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    projectId?: SortOrder
    inputDatasetId?: SortOrder
  }

  export type jobtoprojectMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    projectId?: SortOrder
    inputDatasetId?: SortOrder
  }

  export type jobtoprojectMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    projectId?: SortOrder
    inputDatasetId?: SortOrder
  }

  export type jobtoprojectSumOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    projectId?: SortOrder
    inputDatasetId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type JobtoprojectRelationFilter = {
    is?: jobtoprojectWhereInput
    isNot?: jobtoprojectWhereInput
  }

  export type outputdatasetCountOrderByAggregateInput = {
    id?: SortOrder
    creationDate?: SortOrder
    updateDate?: SortOrder
    jobAssociationId?: SortOrder
  }

  export type outputdatasetAvgOrderByAggregateInput = {
    id?: SortOrder
    jobAssociationId?: SortOrder
  }

  export type outputdatasetMaxOrderByAggregateInput = {
    id?: SortOrder
    creationDate?: SortOrder
    updateDate?: SortOrder
    jobAssociationId?: SortOrder
  }

  export type outputdatasetMinOrderByAggregateInput = {
    id?: SortOrder
    creationDate?: SortOrder
    updateDate?: SortOrder
    jobAssociationId?: SortOrder
  }

  export type outputdatasetSumOrderByAggregateInput = {
    id?: SortOrder
    jobAssociationId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumproject_frequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.project_frequency | Enumproject_frequencyFieldRefInput<$PrismaModel>
    in?: $Enums.project_frequency[]
    notIn?: $Enums.project_frequency[]
    not?: NestedEnumproject_frequencyFilter<$PrismaModel> | $Enums.project_frequency
  }

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type projectAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type projectSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type Enumproject_frequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.project_frequency | Enumproject_frequencyFieldRefInput<$PrismaModel>
    in?: $Enums.project_frequency[]
    notIn?: $Enums.project_frequency[]
    not?: NestedEnumproject_frequencyWithAggregatesFilter<$PrismaModel> | $Enums.project_frequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproject_frequencyFilter<$PrismaModel>
    _max?: NestedEnumproject_frequencyFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type jobCreateNestedManyWithoutCategoryInput = {
    create?: XOR<jobCreateWithoutCategoryInput, jobUncheckedCreateWithoutCategoryInput> | jobCreateWithoutCategoryInput[] | jobUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: jobCreateOrConnectWithoutCategoryInput | jobCreateOrConnectWithoutCategoryInput[]
    createMany?: jobCreateManyCategoryInputEnvelope
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[]
  }

  export type jobUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<jobCreateWithoutCategoryInput, jobUncheckedCreateWithoutCategoryInput> | jobCreateWithoutCategoryInput[] | jobUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: jobCreateOrConnectWithoutCategoryInput | jobCreateOrConnectWithoutCategoryInput[]
    createMany?: jobCreateManyCategoryInputEnvelope
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[]
  }

  export type jobUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<jobCreateWithoutCategoryInput, jobUncheckedCreateWithoutCategoryInput> | jobCreateWithoutCategoryInput[] | jobUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: jobCreateOrConnectWithoutCategoryInput | jobCreateOrConnectWithoutCategoryInput[]
    upsert?: jobUpsertWithWhereUniqueWithoutCategoryInput | jobUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: jobCreateManyCategoryInputEnvelope
    set?: jobWhereUniqueInput | jobWhereUniqueInput[]
    disconnect?: jobWhereUniqueInput | jobWhereUniqueInput[]
    delete?: jobWhereUniqueInput | jobWhereUniqueInput[]
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[]
    update?: jobUpdateWithWhereUniqueWithoutCategoryInput | jobUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: jobUpdateManyWithWhereWithoutCategoryInput | jobUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: jobScalarWhereInput | jobScalarWhereInput[]
  }

  export type jobUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<jobCreateWithoutCategoryInput, jobUncheckedCreateWithoutCategoryInput> | jobCreateWithoutCategoryInput[] | jobUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: jobCreateOrConnectWithoutCategoryInput | jobCreateOrConnectWithoutCategoryInput[]
    upsert?: jobUpsertWithWhereUniqueWithoutCategoryInput | jobUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: jobCreateManyCategoryInputEnvelope
    set?: jobWhereUniqueInput | jobWhereUniqueInput[]
    disconnect?: jobWhereUniqueInput | jobWhereUniqueInput[]
    delete?: jobWhereUniqueInput | jobWhereUniqueInput[]
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[]
    update?: jobUpdateWithWhereUniqueWithoutCategoryInput | jobUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: jobUpdateManyWithWhereWithoutCategoryInput | jobUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: jobScalarWhereInput | jobScalarWhereInput[]
  }

  export type jobtoprojectCreateNestedManyWithoutInputdatasetInput = {
    create?: XOR<jobtoprojectCreateWithoutInputdatasetInput, jobtoprojectUncheckedCreateWithoutInputdatasetInput> | jobtoprojectCreateWithoutInputdatasetInput[] | jobtoprojectUncheckedCreateWithoutInputdatasetInput[]
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutInputdatasetInput | jobtoprojectCreateOrConnectWithoutInputdatasetInput[]
    createMany?: jobtoprojectCreateManyInputdatasetInputEnvelope
    connect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
  }

  export type jobtoprojectUncheckedCreateNestedManyWithoutInputdatasetInput = {
    create?: XOR<jobtoprojectCreateWithoutInputdatasetInput, jobtoprojectUncheckedCreateWithoutInputdatasetInput> | jobtoprojectCreateWithoutInputdatasetInput[] | jobtoprojectUncheckedCreateWithoutInputdatasetInput[]
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutInputdatasetInput | jobtoprojectCreateOrConnectWithoutInputdatasetInput[]
    createMany?: jobtoprojectCreateManyInputdatasetInputEnvelope
    connect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
  }

  export type Enuminputdataset_sourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.inputdataset_sourceType
  }

  export type Enuminputdataset_dataFormatFieldUpdateOperationsInput = {
    set?: $Enums.inputdataset_dataFormat
  }

  export type jobtoprojectUpdateManyWithoutInputdatasetNestedInput = {
    create?: XOR<jobtoprojectCreateWithoutInputdatasetInput, jobtoprojectUncheckedCreateWithoutInputdatasetInput> | jobtoprojectCreateWithoutInputdatasetInput[] | jobtoprojectUncheckedCreateWithoutInputdatasetInput[]
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutInputdatasetInput | jobtoprojectCreateOrConnectWithoutInputdatasetInput[]
    upsert?: jobtoprojectUpsertWithWhereUniqueWithoutInputdatasetInput | jobtoprojectUpsertWithWhereUniqueWithoutInputdatasetInput[]
    createMany?: jobtoprojectCreateManyInputdatasetInputEnvelope
    set?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    disconnect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    delete?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    connect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    update?: jobtoprojectUpdateWithWhereUniqueWithoutInputdatasetInput | jobtoprojectUpdateWithWhereUniqueWithoutInputdatasetInput[]
    updateMany?: jobtoprojectUpdateManyWithWhereWithoutInputdatasetInput | jobtoprojectUpdateManyWithWhereWithoutInputdatasetInput[]
    deleteMany?: jobtoprojectScalarWhereInput | jobtoprojectScalarWhereInput[]
  }

  export type jobtoprojectUncheckedUpdateManyWithoutInputdatasetNestedInput = {
    create?: XOR<jobtoprojectCreateWithoutInputdatasetInput, jobtoprojectUncheckedCreateWithoutInputdatasetInput> | jobtoprojectCreateWithoutInputdatasetInput[] | jobtoprojectUncheckedCreateWithoutInputdatasetInput[]
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutInputdatasetInput | jobtoprojectCreateOrConnectWithoutInputdatasetInput[]
    upsert?: jobtoprojectUpsertWithWhereUniqueWithoutInputdatasetInput | jobtoprojectUpsertWithWhereUniqueWithoutInputdatasetInput[]
    createMany?: jobtoprojectCreateManyInputdatasetInputEnvelope
    set?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    disconnect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    delete?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    connect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    update?: jobtoprojectUpdateWithWhereUniqueWithoutInputdatasetInput | jobtoprojectUpdateWithWhereUniqueWithoutInputdatasetInput[]
    updateMany?: jobtoprojectUpdateManyWithWhereWithoutInputdatasetInput | jobtoprojectUpdateManyWithWhereWithoutInputdatasetInput[]
    deleteMany?: jobtoprojectScalarWhereInput | jobtoprojectScalarWhereInput[]
  }

  export type categoryCreateNestedOneWithoutJobInput = {
    create?: XOR<categoryCreateWithoutJobInput, categoryUncheckedCreateWithoutJobInput>
    connectOrCreate?: categoryCreateOrConnectWithoutJobInput
    connect?: categoryWhereUniqueInput
  }

  export type jobtoprojectCreateNestedManyWithoutJobInput = {
    create?: XOR<jobtoprojectCreateWithoutJobInput, jobtoprojectUncheckedCreateWithoutJobInput> | jobtoprojectCreateWithoutJobInput[] | jobtoprojectUncheckedCreateWithoutJobInput[]
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutJobInput | jobtoprojectCreateOrConnectWithoutJobInput[]
    createMany?: jobtoprojectCreateManyJobInputEnvelope
    connect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
  }

  export type jobtoprojectUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<jobtoprojectCreateWithoutJobInput, jobtoprojectUncheckedCreateWithoutJobInput> | jobtoprojectCreateWithoutJobInput[] | jobtoprojectUncheckedCreateWithoutJobInput[]
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutJobInput | jobtoprojectCreateOrConnectWithoutJobInput[]
    createMany?: jobtoprojectCreateManyJobInputEnvelope
    connect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type categoryUpdateOneRequiredWithoutJobNestedInput = {
    create?: XOR<categoryCreateWithoutJobInput, categoryUncheckedCreateWithoutJobInput>
    connectOrCreate?: categoryCreateOrConnectWithoutJobInput
    upsert?: categoryUpsertWithoutJobInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutJobInput, categoryUpdateWithoutJobInput>, categoryUncheckedUpdateWithoutJobInput>
  }

  export type jobtoprojectUpdateManyWithoutJobNestedInput = {
    create?: XOR<jobtoprojectCreateWithoutJobInput, jobtoprojectUncheckedCreateWithoutJobInput> | jobtoprojectCreateWithoutJobInput[] | jobtoprojectUncheckedCreateWithoutJobInput[]
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutJobInput | jobtoprojectCreateOrConnectWithoutJobInput[]
    upsert?: jobtoprojectUpsertWithWhereUniqueWithoutJobInput | jobtoprojectUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: jobtoprojectCreateManyJobInputEnvelope
    set?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    disconnect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    delete?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    connect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    update?: jobtoprojectUpdateWithWhereUniqueWithoutJobInput | jobtoprojectUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: jobtoprojectUpdateManyWithWhereWithoutJobInput | jobtoprojectUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: jobtoprojectScalarWhereInput | jobtoprojectScalarWhereInput[]
  }

  export type jobtoprojectUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<jobtoprojectCreateWithoutJobInput, jobtoprojectUncheckedCreateWithoutJobInput> | jobtoprojectCreateWithoutJobInput[] | jobtoprojectUncheckedCreateWithoutJobInput[]
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutJobInput | jobtoprojectCreateOrConnectWithoutJobInput[]
    upsert?: jobtoprojectUpsertWithWhereUniqueWithoutJobInput | jobtoprojectUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: jobtoprojectCreateManyJobInputEnvelope
    set?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    disconnect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    delete?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    connect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    update?: jobtoprojectUpdateWithWhereUniqueWithoutJobInput | jobtoprojectUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: jobtoprojectUpdateManyWithWhereWithoutJobInput | jobtoprojectUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: jobtoprojectScalarWhereInput | jobtoprojectScalarWhereInput[]
  }

  export type inputdatasetCreateNestedOneWithoutJobtoprojectInput = {
    create?: XOR<inputdatasetCreateWithoutJobtoprojectInput, inputdatasetUncheckedCreateWithoutJobtoprojectInput>
    connectOrCreate?: inputdatasetCreateOrConnectWithoutJobtoprojectInput
    connect?: inputdatasetWhereUniqueInput
  }

  export type jobCreateNestedOneWithoutJobtoprojectInput = {
    create?: XOR<jobCreateWithoutJobtoprojectInput, jobUncheckedCreateWithoutJobtoprojectInput>
    connectOrCreate?: jobCreateOrConnectWithoutJobtoprojectInput
    connect?: jobWhereUniqueInput
  }

  export type projectCreateNestedOneWithoutJobtoprojectInput = {
    create?: XOR<projectCreateWithoutJobtoprojectInput, projectUncheckedCreateWithoutJobtoprojectInput>
    connectOrCreate?: projectCreateOrConnectWithoutJobtoprojectInput
    connect?: projectWhereUniqueInput
  }

  export type outputdatasetCreateNestedManyWithoutJobtoprojectInput = {
    create?: XOR<outputdatasetCreateWithoutJobtoprojectInput, outputdatasetUncheckedCreateWithoutJobtoprojectInput> | outputdatasetCreateWithoutJobtoprojectInput[] | outputdatasetUncheckedCreateWithoutJobtoprojectInput[]
    connectOrCreate?: outputdatasetCreateOrConnectWithoutJobtoprojectInput | outputdatasetCreateOrConnectWithoutJobtoprojectInput[]
    createMany?: outputdatasetCreateManyJobtoprojectInputEnvelope
    connect?: outputdatasetWhereUniqueInput | outputdatasetWhereUniqueInput[]
  }

  export type outputdatasetUncheckedCreateNestedManyWithoutJobtoprojectInput = {
    create?: XOR<outputdatasetCreateWithoutJobtoprojectInput, outputdatasetUncheckedCreateWithoutJobtoprojectInput> | outputdatasetCreateWithoutJobtoprojectInput[] | outputdatasetUncheckedCreateWithoutJobtoprojectInput[]
    connectOrCreate?: outputdatasetCreateOrConnectWithoutJobtoprojectInput | outputdatasetCreateOrConnectWithoutJobtoprojectInput[]
    createMany?: outputdatasetCreateManyJobtoprojectInputEnvelope
    connect?: outputdatasetWhereUniqueInput | outputdatasetWhereUniqueInput[]
  }

  export type inputdatasetUpdateOneWithoutJobtoprojectNestedInput = {
    create?: XOR<inputdatasetCreateWithoutJobtoprojectInput, inputdatasetUncheckedCreateWithoutJobtoprojectInput>
    connectOrCreate?: inputdatasetCreateOrConnectWithoutJobtoprojectInput
    upsert?: inputdatasetUpsertWithoutJobtoprojectInput
    disconnect?: inputdatasetWhereInput | boolean
    delete?: inputdatasetWhereInput | boolean
    connect?: inputdatasetWhereUniqueInput
    update?: XOR<XOR<inputdatasetUpdateToOneWithWhereWithoutJobtoprojectInput, inputdatasetUpdateWithoutJobtoprojectInput>, inputdatasetUncheckedUpdateWithoutJobtoprojectInput>
  }

  export type jobUpdateOneRequiredWithoutJobtoprojectNestedInput = {
    create?: XOR<jobCreateWithoutJobtoprojectInput, jobUncheckedCreateWithoutJobtoprojectInput>
    connectOrCreate?: jobCreateOrConnectWithoutJobtoprojectInput
    upsert?: jobUpsertWithoutJobtoprojectInput
    connect?: jobWhereUniqueInput
    update?: XOR<XOR<jobUpdateToOneWithWhereWithoutJobtoprojectInput, jobUpdateWithoutJobtoprojectInput>, jobUncheckedUpdateWithoutJobtoprojectInput>
  }

  export type projectUpdateOneRequiredWithoutJobtoprojectNestedInput = {
    create?: XOR<projectCreateWithoutJobtoprojectInput, projectUncheckedCreateWithoutJobtoprojectInput>
    connectOrCreate?: projectCreateOrConnectWithoutJobtoprojectInput
    upsert?: projectUpsertWithoutJobtoprojectInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutJobtoprojectInput, projectUpdateWithoutJobtoprojectInput>, projectUncheckedUpdateWithoutJobtoprojectInput>
  }

  export type outputdatasetUpdateManyWithoutJobtoprojectNestedInput = {
    create?: XOR<outputdatasetCreateWithoutJobtoprojectInput, outputdatasetUncheckedCreateWithoutJobtoprojectInput> | outputdatasetCreateWithoutJobtoprojectInput[] | outputdatasetUncheckedCreateWithoutJobtoprojectInput[]
    connectOrCreate?: outputdatasetCreateOrConnectWithoutJobtoprojectInput | outputdatasetCreateOrConnectWithoutJobtoprojectInput[]
    upsert?: outputdatasetUpsertWithWhereUniqueWithoutJobtoprojectInput | outputdatasetUpsertWithWhereUniqueWithoutJobtoprojectInput[]
    createMany?: outputdatasetCreateManyJobtoprojectInputEnvelope
    set?: outputdatasetWhereUniqueInput | outputdatasetWhereUniqueInput[]
    disconnect?: outputdatasetWhereUniqueInput | outputdatasetWhereUniqueInput[]
    delete?: outputdatasetWhereUniqueInput | outputdatasetWhereUniqueInput[]
    connect?: outputdatasetWhereUniqueInput | outputdatasetWhereUniqueInput[]
    update?: outputdatasetUpdateWithWhereUniqueWithoutJobtoprojectInput | outputdatasetUpdateWithWhereUniqueWithoutJobtoprojectInput[]
    updateMany?: outputdatasetUpdateManyWithWhereWithoutJobtoprojectInput | outputdatasetUpdateManyWithWhereWithoutJobtoprojectInput[]
    deleteMany?: outputdatasetScalarWhereInput | outputdatasetScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type outputdatasetUncheckedUpdateManyWithoutJobtoprojectNestedInput = {
    create?: XOR<outputdatasetCreateWithoutJobtoprojectInput, outputdatasetUncheckedCreateWithoutJobtoprojectInput> | outputdatasetCreateWithoutJobtoprojectInput[] | outputdatasetUncheckedCreateWithoutJobtoprojectInput[]
    connectOrCreate?: outputdatasetCreateOrConnectWithoutJobtoprojectInput | outputdatasetCreateOrConnectWithoutJobtoprojectInput[]
    upsert?: outputdatasetUpsertWithWhereUniqueWithoutJobtoprojectInput | outputdatasetUpsertWithWhereUniqueWithoutJobtoprojectInput[]
    createMany?: outputdatasetCreateManyJobtoprojectInputEnvelope
    set?: outputdatasetWhereUniqueInput | outputdatasetWhereUniqueInput[]
    disconnect?: outputdatasetWhereUniqueInput | outputdatasetWhereUniqueInput[]
    delete?: outputdatasetWhereUniqueInput | outputdatasetWhereUniqueInput[]
    connect?: outputdatasetWhereUniqueInput | outputdatasetWhereUniqueInput[]
    update?: outputdatasetUpdateWithWhereUniqueWithoutJobtoprojectInput | outputdatasetUpdateWithWhereUniqueWithoutJobtoprojectInput[]
    updateMany?: outputdatasetUpdateManyWithWhereWithoutJobtoprojectInput | outputdatasetUpdateManyWithWhereWithoutJobtoprojectInput[]
    deleteMany?: outputdatasetScalarWhereInput | outputdatasetScalarWhereInput[]
  }

  export type jobtoprojectCreateNestedOneWithoutOutputdatasetInput = {
    create?: XOR<jobtoprojectCreateWithoutOutputdatasetInput, jobtoprojectUncheckedCreateWithoutOutputdatasetInput>
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutOutputdatasetInput
    connect?: jobtoprojectWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type jobtoprojectUpdateOneRequiredWithoutOutputdatasetNestedInput = {
    create?: XOR<jobtoprojectCreateWithoutOutputdatasetInput, jobtoprojectUncheckedCreateWithoutOutputdatasetInput>
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutOutputdatasetInput
    upsert?: jobtoprojectUpsertWithoutOutputdatasetInput
    connect?: jobtoprojectWhereUniqueInput
    update?: XOR<XOR<jobtoprojectUpdateToOneWithWhereWithoutOutputdatasetInput, jobtoprojectUpdateWithoutOutputdatasetInput>, jobtoprojectUncheckedUpdateWithoutOutputdatasetInput>
  }

  export type jobtoprojectCreateNestedManyWithoutProjectInput = {
    create?: XOR<jobtoprojectCreateWithoutProjectInput, jobtoprojectUncheckedCreateWithoutProjectInput> | jobtoprojectCreateWithoutProjectInput[] | jobtoprojectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutProjectInput | jobtoprojectCreateOrConnectWithoutProjectInput[]
    createMany?: jobtoprojectCreateManyProjectInputEnvelope
    connect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
  }

  export type jobtoprojectUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<jobtoprojectCreateWithoutProjectInput, jobtoprojectUncheckedCreateWithoutProjectInput> | jobtoprojectCreateWithoutProjectInput[] | jobtoprojectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutProjectInput | jobtoprojectCreateOrConnectWithoutProjectInput[]
    createMany?: jobtoprojectCreateManyProjectInputEnvelope
    connect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
  }

  export type Enumproject_frequencyFieldUpdateOperationsInput = {
    set?: $Enums.project_frequency
  }

  export type jobtoprojectUpdateManyWithoutProjectNestedInput = {
    create?: XOR<jobtoprojectCreateWithoutProjectInput, jobtoprojectUncheckedCreateWithoutProjectInput> | jobtoprojectCreateWithoutProjectInput[] | jobtoprojectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutProjectInput | jobtoprojectCreateOrConnectWithoutProjectInput[]
    upsert?: jobtoprojectUpsertWithWhereUniqueWithoutProjectInput | jobtoprojectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: jobtoprojectCreateManyProjectInputEnvelope
    set?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    disconnect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    delete?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    connect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    update?: jobtoprojectUpdateWithWhereUniqueWithoutProjectInput | jobtoprojectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: jobtoprojectUpdateManyWithWhereWithoutProjectInput | jobtoprojectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: jobtoprojectScalarWhereInput | jobtoprojectScalarWhereInput[]
  }

  export type jobtoprojectUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<jobtoprojectCreateWithoutProjectInput, jobtoprojectUncheckedCreateWithoutProjectInput> | jobtoprojectCreateWithoutProjectInput[] | jobtoprojectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: jobtoprojectCreateOrConnectWithoutProjectInput | jobtoprojectCreateOrConnectWithoutProjectInput[]
    upsert?: jobtoprojectUpsertWithWhereUniqueWithoutProjectInput | jobtoprojectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: jobtoprojectCreateManyProjectInputEnvelope
    set?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    disconnect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    delete?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    connect?: jobtoprojectWhereUniqueInput | jobtoprojectWhereUniqueInput[]
    update?: jobtoprojectUpdateWithWhereUniqueWithoutProjectInput | jobtoprojectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: jobtoprojectUpdateManyWithWhereWithoutProjectInput | jobtoprojectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: jobtoprojectScalarWhereInput | jobtoprojectScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnuminputdataset_sourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.inputdataset_sourceType | Enuminputdataset_sourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.inputdataset_sourceType[]
    notIn?: $Enums.inputdataset_sourceType[]
    not?: NestedEnuminputdataset_sourceTypeFilter<$PrismaModel> | $Enums.inputdataset_sourceType
  }

  export type NestedEnuminputdataset_dataFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.inputdataset_dataFormat | Enuminputdataset_dataFormatFieldRefInput<$PrismaModel>
    in?: $Enums.inputdataset_dataFormat[]
    notIn?: $Enums.inputdataset_dataFormat[]
    not?: NestedEnuminputdataset_dataFormatFilter<$PrismaModel> | $Enums.inputdataset_dataFormat
  }

  export type NestedEnuminputdataset_sourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.inputdataset_sourceType | Enuminputdataset_sourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.inputdataset_sourceType[]
    notIn?: $Enums.inputdataset_sourceType[]
    not?: NestedEnuminputdataset_sourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.inputdataset_sourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminputdataset_sourceTypeFilter<$PrismaModel>
    _max?: NestedEnuminputdataset_sourceTypeFilter<$PrismaModel>
  }

  export type NestedEnuminputdataset_dataFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.inputdataset_dataFormat | Enuminputdataset_dataFormatFieldRefInput<$PrismaModel>
    in?: $Enums.inputdataset_dataFormat[]
    notIn?: $Enums.inputdataset_dataFormat[]
    not?: NestedEnuminputdataset_dataFormatWithAggregatesFilter<$PrismaModel> | $Enums.inputdataset_dataFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminputdataset_dataFormatFilter<$PrismaModel>
    _max?: NestedEnuminputdataset_dataFormatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumproject_frequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.project_frequency | Enumproject_frequencyFieldRefInput<$PrismaModel>
    in?: $Enums.project_frequency[]
    notIn?: $Enums.project_frequency[]
    not?: NestedEnumproject_frequencyFilter<$PrismaModel> | $Enums.project_frequency
  }

  export type NestedEnumproject_frequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.project_frequency | Enumproject_frequencyFieldRefInput<$PrismaModel>
    in?: $Enums.project_frequency[]
    notIn?: $Enums.project_frequency[]
    not?: NestedEnumproject_frequencyWithAggregatesFilter<$PrismaModel> | $Enums.project_frequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproject_frequencyFilter<$PrismaModel>
    _max?: NestedEnumproject_frequencyFilter<$PrismaModel>
  }

  export type jobCreateWithoutCategoryInput = {
    name: string
    description?: string | null
    code?: string | null
    creationDate?: Date | string
    latestEdit: Date | string
    jobtoproject?: jobtoprojectCreateNestedManyWithoutJobInput
  }

  export type jobUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description?: string | null
    code?: string | null
    creationDate?: Date | string
    latestEdit: Date | string
    jobtoproject?: jobtoprojectUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobCreateOrConnectWithoutCategoryInput = {
    where: jobWhereUniqueInput
    create: XOR<jobCreateWithoutCategoryInput, jobUncheckedCreateWithoutCategoryInput>
  }

  export type jobCreateManyCategoryInputEnvelope = {
    data: jobCreateManyCategoryInput | jobCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type jobUpsertWithWhereUniqueWithoutCategoryInput = {
    where: jobWhereUniqueInput
    update: XOR<jobUpdateWithoutCategoryInput, jobUncheckedUpdateWithoutCategoryInput>
    create: XOR<jobCreateWithoutCategoryInput, jobUncheckedCreateWithoutCategoryInput>
  }

  export type jobUpdateWithWhereUniqueWithoutCategoryInput = {
    where: jobWhereUniqueInput
    data: XOR<jobUpdateWithoutCategoryInput, jobUncheckedUpdateWithoutCategoryInput>
  }

  export type jobUpdateManyWithWhereWithoutCategoryInput = {
    where: jobScalarWhereInput
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyWithoutCategoryInput>
  }

  export type jobScalarWhereInput = {
    AND?: jobScalarWhereInput | jobScalarWhereInput[]
    OR?: jobScalarWhereInput[]
    NOT?: jobScalarWhereInput | jobScalarWhereInput[]
    id?: IntFilter<"job"> | number
    name?: StringFilter<"job"> | string
    description?: StringNullableFilter<"job"> | string | null
    code?: StringNullableFilter<"job"> | string | null
    creationDate?: DateTimeFilter<"job"> | Date | string
    latestEdit?: DateTimeFilter<"job"> | Date | string
    categoryId?: IntFilter<"job"> | number
  }

  export type jobtoprojectCreateWithoutInputdatasetInput = {
    job: jobCreateNestedOneWithoutJobtoprojectInput
    project: projectCreateNestedOneWithoutJobtoprojectInput
    outputdataset?: outputdatasetCreateNestedManyWithoutJobtoprojectInput
  }

  export type jobtoprojectUncheckedCreateWithoutInputdatasetInput = {
    id?: number
    jobId: number
    projectId: number
    outputdataset?: outputdatasetUncheckedCreateNestedManyWithoutJobtoprojectInput
  }

  export type jobtoprojectCreateOrConnectWithoutInputdatasetInput = {
    where: jobtoprojectWhereUniqueInput
    create: XOR<jobtoprojectCreateWithoutInputdatasetInput, jobtoprojectUncheckedCreateWithoutInputdatasetInput>
  }

  export type jobtoprojectCreateManyInputdatasetInputEnvelope = {
    data: jobtoprojectCreateManyInputdatasetInput | jobtoprojectCreateManyInputdatasetInput[]
    skipDuplicates?: boolean
  }

  export type jobtoprojectUpsertWithWhereUniqueWithoutInputdatasetInput = {
    where: jobtoprojectWhereUniqueInput
    update: XOR<jobtoprojectUpdateWithoutInputdatasetInput, jobtoprojectUncheckedUpdateWithoutInputdatasetInput>
    create: XOR<jobtoprojectCreateWithoutInputdatasetInput, jobtoprojectUncheckedCreateWithoutInputdatasetInput>
  }

  export type jobtoprojectUpdateWithWhereUniqueWithoutInputdatasetInput = {
    where: jobtoprojectWhereUniqueInput
    data: XOR<jobtoprojectUpdateWithoutInputdatasetInput, jobtoprojectUncheckedUpdateWithoutInputdatasetInput>
  }

  export type jobtoprojectUpdateManyWithWhereWithoutInputdatasetInput = {
    where: jobtoprojectScalarWhereInput
    data: XOR<jobtoprojectUpdateManyMutationInput, jobtoprojectUncheckedUpdateManyWithoutInputdatasetInput>
  }

  export type jobtoprojectScalarWhereInput = {
    AND?: jobtoprojectScalarWhereInput | jobtoprojectScalarWhereInput[]
    OR?: jobtoprojectScalarWhereInput[]
    NOT?: jobtoprojectScalarWhereInput | jobtoprojectScalarWhereInput[]
    id?: IntFilter<"jobtoproject"> | number
    jobId?: IntFilter<"jobtoproject"> | number
    projectId?: IntFilter<"jobtoproject"> | number
    inputDatasetId?: IntNullableFilter<"jobtoproject"> | number | null
  }

  export type categoryCreateWithoutJobInput = {
    name: string
  }

  export type categoryUncheckedCreateWithoutJobInput = {
    id?: number
    name: string
  }

  export type categoryCreateOrConnectWithoutJobInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutJobInput, categoryUncheckedCreateWithoutJobInput>
  }

  export type jobtoprojectCreateWithoutJobInput = {
    inputdataset?: inputdatasetCreateNestedOneWithoutJobtoprojectInput
    project: projectCreateNestedOneWithoutJobtoprojectInput
    outputdataset?: outputdatasetCreateNestedManyWithoutJobtoprojectInput
  }

  export type jobtoprojectUncheckedCreateWithoutJobInput = {
    id?: number
    projectId: number
    inputDatasetId?: number | null
    outputdataset?: outputdatasetUncheckedCreateNestedManyWithoutJobtoprojectInput
  }

  export type jobtoprojectCreateOrConnectWithoutJobInput = {
    where: jobtoprojectWhereUniqueInput
    create: XOR<jobtoprojectCreateWithoutJobInput, jobtoprojectUncheckedCreateWithoutJobInput>
  }

  export type jobtoprojectCreateManyJobInputEnvelope = {
    data: jobtoprojectCreateManyJobInput | jobtoprojectCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithoutJobInput = {
    update: XOR<categoryUpdateWithoutJobInput, categoryUncheckedUpdateWithoutJobInput>
    create: XOR<categoryCreateWithoutJobInput, categoryUncheckedCreateWithoutJobInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutJobInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutJobInput, categoryUncheckedUpdateWithoutJobInput>
  }

  export type categoryUpdateWithoutJobInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type jobtoprojectUpsertWithWhereUniqueWithoutJobInput = {
    where: jobtoprojectWhereUniqueInput
    update: XOR<jobtoprojectUpdateWithoutJobInput, jobtoprojectUncheckedUpdateWithoutJobInput>
    create: XOR<jobtoprojectCreateWithoutJobInput, jobtoprojectUncheckedCreateWithoutJobInput>
  }

  export type jobtoprojectUpdateWithWhereUniqueWithoutJobInput = {
    where: jobtoprojectWhereUniqueInput
    data: XOR<jobtoprojectUpdateWithoutJobInput, jobtoprojectUncheckedUpdateWithoutJobInput>
  }

  export type jobtoprojectUpdateManyWithWhereWithoutJobInput = {
    where: jobtoprojectScalarWhereInput
    data: XOR<jobtoprojectUpdateManyMutationInput, jobtoprojectUncheckedUpdateManyWithoutJobInput>
  }

  export type inputdatasetCreateWithoutJobtoprojectInput = {
    sourceType: $Enums.inputdataset_sourceType
    location: string
    dataFormat: $Enums.inputdataset_dataFormat
  }

  export type inputdatasetUncheckedCreateWithoutJobtoprojectInput = {
    id?: number
    sourceType: $Enums.inputdataset_sourceType
    location: string
    dataFormat: $Enums.inputdataset_dataFormat
  }

  export type inputdatasetCreateOrConnectWithoutJobtoprojectInput = {
    where: inputdatasetWhereUniqueInput
    create: XOR<inputdatasetCreateWithoutJobtoprojectInput, inputdatasetUncheckedCreateWithoutJobtoprojectInput>
  }

  export type jobCreateWithoutJobtoprojectInput = {
    name: string
    description?: string | null
    code?: string | null
    creationDate?: Date | string
    latestEdit: Date | string
    category: categoryCreateNestedOneWithoutJobInput
  }

  export type jobUncheckedCreateWithoutJobtoprojectInput = {
    id?: number
    name: string
    description?: string | null
    code?: string | null
    creationDate?: Date | string
    latestEdit: Date | string
    categoryId: number
  }

  export type jobCreateOrConnectWithoutJobtoprojectInput = {
    where: jobWhereUniqueInput
    create: XOR<jobCreateWithoutJobtoprojectInput, jobUncheckedCreateWithoutJobtoprojectInput>
  }

  export type projectCreateWithoutJobtoprojectInput = {
    name: string
    description?: string | null
    frequency: $Enums.project_frequency
    status: number
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type projectUncheckedCreateWithoutJobtoprojectInput = {
    id?: number
    name: string
    description?: string | null
    frequency: $Enums.project_frequency
    status: number
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type projectCreateOrConnectWithoutJobtoprojectInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutJobtoprojectInput, projectUncheckedCreateWithoutJobtoprojectInput>
  }

  export type outputdatasetCreateWithoutJobtoprojectInput = {
    creationDate?: Date | string
    updateDate?: Date | string | null
  }

  export type outputdatasetUncheckedCreateWithoutJobtoprojectInput = {
    id?: number
    creationDate?: Date | string
    updateDate?: Date | string | null
  }

  export type outputdatasetCreateOrConnectWithoutJobtoprojectInput = {
    where: outputdatasetWhereUniqueInput
    create: XOR<outputdatasetCreateWithoutJobtoprojectInput, outputdatasetUncheckedCreateWithoutJobtoprojectInput>
  }

  export type outputdatasetCreateManyJobtoprojectInputEnvelope = {
    data: outputdatasetCreateManyJobtoprojectInput | outputdatasetCreateManyJobtoprojectInput[]
    skipDuplicates?: boolean
  }

  export type inputdatasetUpsertWithoutJobtoprojectInput = {
    update: XOR<inputdatasetUpdateWithoutJobtoprojectInput, inputdatasetUncheckedUpdateWithoutJobtoprojectInput>
    create: XOR<inputdatasetCreateWithoutJobtoprojectInput, inputdatasetUncheckedCreateWithoutJobtoprojectInput>
    where?: inputdatasetWhereInput
  }

  export type inputdatasetUpdateToOneWithWhereWithoutJobtoprojectInput = {
    where?: inputdatasetWhereInput
    data: XOR<inputdatasetUpdateWithoutJobtoprojectInput, inputdatasetUncheckedUpdateWithoutJobtoprojectInput>
  }

  export type inputdatasetUpdateWithoutJobtoprojectInput = {
    sourceType?: Enuminputdataset_sourceTypeFieldUpdateOperationsInput | $Enums.inputdataset_sourceType
    location?: StringFieldUpdateOperationsInput | string
    dataFormat?: Enuminputdataset_dataFormatFieldUpdateOperationsInput | $Enums.inputdataset_dataFormat
  }

  export type inputdatasetUncheckedUpdateWithoutJobtoprojectInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceType?: Enuminputdataset_sourceTypeFieldUpdateOperationsInput | $Enums.inputdataset_sourceType
    location?: StringFieldUpdateOperationsInput | string
    dataFormat?: Enuminputdataset_dataFormatFieldUpdateOperationsInput | $Enums.inputdataset_dataFormat
  }

  export type jobUpsertWithoutJobtoprojectInput = {
    update: XOR<jobUpdateWithoutJobtoprojectInput, jobUncheckedUpdateWithoutJobtoprojectInput>
    create: XOR<jobCreateWithoutJobtoprojectInput, jobUncheckedCreateWithoutJobtoprojectInput>
    where?: jobWhereInput
  }

  export type jobUpdateToOneWithWhereWithoutJobtoprojectInput = {
    where?: jobWhereInput
    data: XOR<jobUpdateWithoutJobtoprojectInput, jobUncheckedUpdateWithoutJobtoprojectInput>
  }

  export type jobUpdateWithoutJobtoprojectInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latestEdit?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutJobNestedInput
  }

  export type jobUncheckedUpdateWithoutJobtoprojectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latestEdit?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type projectUpsertWithoutJobtoprojectInput = {
    update: XOR<projectUpdateWithoutJobtoprojectInput, projectUncheckedUpdateWithoutJobtoprojectInput>
    create: XOR<projectCreateWithoutJobtoprojectInput, projectUncheckedCreateWithoutJobtoprojectInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutJobtoprojectInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutJobtoprojectInput, projectUncheckedUpdateWithoutJobtoprojectInput>
  }

  export type projectUpdateWithoutJobtoprojectInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: Enumproject_frequencyFieldUpdateOperationsInput | $Enums.project_frequency
    status?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectUncheckedUpdateWithoutJobtoprojectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: Enumproject_frequencyFieldUpdateOperationsInput | $Enums.project_frequency
    status?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type outputdatasetUpsertWithWhereUniqueWithoutJobtoprojectInput = {
    where: outputdatasetWhereUniqueInput
    update: XOR<outputdatasetUpdateWithoutJobtoprojectInput, outputdatasetUncheckedUpdateWithoutJobtoprojectInput>
    create: XOR<outputdatasetCreateWithoutJobtoprojectInput, outputdatasetUncheckedCreateWithoutJobtoprojectInput>
  }

  export type outputdatasetUpdateWithWhereUniqueWithoutJobtoprojectInput = {
    where: outputdatasetWhereUniqueInput
    data: XOR<outputdatasetUpdateWithoutJobtoprojectInput, outputdatasetUncheckedUpdateWithoutJobtoprojectInput>
  }

  export type outputdatasetUpdateManyWithWhereWithoutJobtoprojectInput = {
    where: outputdatasetScalarWhereInput
    data: XOR<outputdatasetUpdateManyMutationInput, outputdatasetUncheckedUpdateManyWithoutJobtoprojectInput>
  }

  export type outputdatasetScalarWhereInput = {
    AND?: outputdatasetScalarWhereInput | outputdatasetScalarWhereInput[]
    OR?: outputdatasetScalarWhereInput[]
    NOT?: outputdatasetScalarWhereInput | outputdatasetScalarWhereInput[]
    id?: IntFilter<"outputdataset"> | number
    creationDate?: DateTimeFilter<"outputdataset"> | Date | string
    updateDate?: DateTimeNullableFilter<"outputdataset"> | Date | string | null
    jobAssociationId?: IntFilter<"outputdataset"> | number
  }

  export type jobtoprojectCreateWithoutOutputdatasetInput = {
    inputdataset?: inputdatasetCreateNestedOneWithoutJobtoprojectInput
    job: jobCreateNestedOneWithoutJobtoprojectInput
    project: projectCreateNestedOneWithoutJobtoprojectInput
  }

  export type jobtoprojectUncheckedCreateWithoutOutputdatasetInput = {
    id?: number
    jobId: number
    projectId: number
    inputDatasetId?: number | null
  }

  export type jobtoprojectCreateOrConnectWithoutOutputdatasetInput = {
    where: jobtoprojectWhereUniqueInput
    create: XOR<jobtoprojectCreateWithoutOutputdatasetInput, jobtoprojectUncheckedCreateWithoutOutputdatasetInput>
  }

  export type jobtoprojectUpsertWithoutOutputdatasetInput = {
    update: XOR<jobtoprojectUpdateWithoutOutputdatasetInput, jobtoprojectUncheckedUpdateWithoutOutputdatasetInput>
    create: XOR<jobtoprojectCreateWithoutOutputdatasetInput, jobtoprojectUncheckedCreateWithoutOutputdatasetInput>
    where?: jobtoprojectWhereInput
  }

  export type jobtoprojectUpdateToOneWithWhereWithoutOutputdatasetInput = {
    where?: jobtoprojectWhereInput
    data: XOR<jobtoprojectUpdateWithoutOutputdatasetInput, jobtoprojectUncheckedUpdateWithoutOutputdatasetInput>
  }

  export type jobtoprojectUpdateWithoutOutputdatasetInput = {
    inputdataset?: inputdatasetUpdateOneWithoutJobtoprojectNestedInput
    job?: jobUpdateOneRequiredWithoutJobtoprojectNestedInput
    project?: projectUpdateOneRequiredWithoutJobtoprojectNestedInput
  }

  export type jobtoprojectUncheckedUpdateWithoutOutputdatasetInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    inputDatasetId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type jobtoprojectCreateWithoutProjectInput = {
    inputdataset?: inputdatasetCreateNestedOneWithoutJobtoprojectInput
    job: jobCreateNestedOneWithoutJobtoprojectInput
    outputdataset?: outputdatasetCreateNestedManyWithoutJobtoprojectInput
  }

  export type jobtoprojectUncheckedCreateWithoutProjectInput = {
    id?: number
    jobId: number
    inputDatasetId?: number | null
    outputdataset?: outputdatasetUncheckedCreateNestedManyWithoutJobtoprojectInput
  }

  export type jobtoprojectCreateOrConnectWithoutProjectInput = {
    where: jobtoprojectWhereUniqueInput
    create: XOR<jobtoprojectCreateWithoutProjectInput, jobtoprojectUncheckedCreateWithoutProjectInput>
  }

  export type jobtoprojectCreateManyProjectInputEnvelope = {
    data: jobtoprojectCreateManyProjectInput | jobtoprojectCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type jobtoprojectUpsertWithWhereUniqueWithoutProjectInput = {
    where: jobtoprojectWhereUniqueInput
    update: XOR<jobtoprojectUpdateWithoutProjectInput, jobtoprojectUncheckedUpdateWithoutProjectInput>
    create: XOR<jobtoprojectCreateWithoutProjectInput, jobtoprojectUncheckedCreateWithoutProjectInput>
  }

  export type jobtoprojectUpdateWithWhereUniqueWithoutProjectInput = {
    where: jobtoprojectWhereUniqueInput
    data: XOR<jobtoprojectUpdateWithoutProjectInput, jobtoprojectUncheckedUpdateWithoutProjectInput>
  }

  export type jobtoprojectUpdateManyWithWhereWithoutProjectInput = {
    where: jobtoprojectScalarWhereInput
    data: XOR<jobtoprojectUpdateManyMutationInput, jobtoprojectUncheckedUpdateManyWithoutProjectInput>
  }

  export type jobCreateManyCategoryInput = {
    id?: number
    name: string
    description?: string | null
    code?: string | null
    creationDate?: Date | string
    latestEdit: Date | string
  }

  export type jobUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latestEdit?: DateTimeFieldUpdateOperationsInput | Date | string
    jobtoproject?: jobtoprojectUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latestEdit?: DateTimeFieldUpdateOperationsInput | Date | string
    jobtoproject?: jobtoprojectUncheckedUpdateManyWithoutJobNestedInput
  }

  export type jobUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latestEdit?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobtoprojectCreateManyInputdatasetInput = {
    id?: number
    jobId: number
    projectId: number
  }

  export type jobtoprojectUpdateWithoutInputdatasetInput = {
    job?: jobUpdateOneRequiredWithoutJobtoprojectNestedInput
    project?: projectUpdateOneRequiredWithoutJobtoprojectNestedInput
    outputdataset?: outputdatasetUpdateManyWithoutJobtoprojectNestedInput
  }

  export type jobtoprojectUncheckedUpdateWithoutInputdatasetInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    outputdataset?: outputdatasetUncheckedUpdateManyWithoutJobtoprojectNestedInput
  }

  export type jobtoprojectUncheckedUpdateManyWithoutInputdatasetInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type jobtoprojectCreateManyJobInput = {
    id?: number
    projectId: number
    inputDatasetId?: number | null
  }

  export type jobtoprojectUpdateWithoutJobInput = {
    inputdataset?: inputdatasetUpdateOneWithoutJobtoprojectNestedInput
    project?: projectUpdateOneRequiredWithoutJobtoprojectNestedInput
    outputdataset?: outputdatasetUpdateManyWithoutJobtoprojectNestedInput
  }

  export type jobtoprojectUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    inputDatasetId?: NullableIntFieldUpdateOperationsInput | number | null
    outputdataset?: outputdatasetUncheckedUpdateManyWithoutJobtoprojectNestedInput
  }

  export type jobtoprojectUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    inputDatasetId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type outputdatasetCreateManyJobtoprojectInput = {
    id?: number
    creationDate?: Date | string
    updateDate?: Date | string | null
  }

  export type outputdatasetUpdateWithoutJobtoprojectInput = {
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type outputdatasetUncheckedUpdateWithoutJobtoprojectInput = {
    id?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type outputdatasetUncheckedUpdateManyWithoutJobtoprojectInput = {
    id?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type jobtoprojectCreateManyProjectInput = {
    id?: number
    jobId: number
    inputDatasetId?: number | null
  }

  export type jobtoprojectUpdateWithoutProjectInput = {
    inputdataset?: inputdatasetUpdateOneWithoutJobtoprojectNestedInput
    job?: jobUpdateOneRequiredWithoutJobtoprojectNestedInput
    outputdataset?: outputdatasetUpdateManyWithoutJobtoprojectNestedInput
  }

  export type jobtoprojectUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    inputDatasetId?: NullableIntFieldUpdateOperationsInput | number | null
    outputdataset?: outputdatasetUncheckedUpdateManyWithoutJobtoprojectNestedInput
  }

  export type jobtoprojectUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    inputDatasetId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InputdatasetCountOutputTypeDefaultArgs instead
     */
    export type InputdatasetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InputdatasetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobCountOutputTypeDefaultArgs instead
     */
    export type JobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobtoprojectCountOutputTypeDefaultArgs instead
     */
    export type JobtoprojectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobtoprojectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoryDefaultArgs instead
     */
    export type categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use inputdatasetDefaultArgs instead
     */
    export type inputdatasetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = inputdatasetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use jobDefaultArgs instead
     */
    export type jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = jobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use jobtoprojectDefaultArgs instead
     */
    export type jobtoprojectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = jobtoprojectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use outputdatasetDefaultArgs instead
     */
    export type outputdatasetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = outputdatasetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use projectDefaultArgs instead
     */
    export type projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = projectDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}