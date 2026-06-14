
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Trainer
 * 
 */
export type Trainer = $Result.DefaultSelection<Prisma.$TrainerPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Locker
 * 
 */
export type Locker = $Result.DefaultSelection<Prisma.$LockerPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ClientService
 * 
 */
export type ClientService = $Result.DefaultSelection<Prisma.$ClientServicePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Trainers
 * const trainers = await prisma.trainer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Trainers
   * const trainers = await prisma.trainer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.trainer`: Exposes CRUD operations for the **Trainer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trainers
    * const trainers = await prisma.trainer.findMany()
    * ```
    */
  get trainer(): Prisma.TrainerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locker`: Exposes CRUD operations for the **Locker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lockers
    * const lockers = await prisma.locker.findMany()
    * ```
    */
  get locker(): Prisma.LockerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientService`: Exposes CRUD operations for the **ClientService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientServices
    * const clientServices = await prisma.clientService.findMany()
    * ```
    */
  get clientService(): Prisma.ClientServiceDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Trainer: 'Trainer',
    Client: 'Client',
    Locker: 'Locker',
    Service: 'Service',
    ClientService: 'ClientService'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "trainer" | "client" | "locker" | "service" | "clientService"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Trainer: {
        payload: Prisma.$TrainerPayload<ExtArgs>
        fields: Prisma.TrainerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>
          }
          findFirst: {
            args: Prisma.TrainerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>
          }
          findMany: {
            args: Prisma.TrainerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>[]
          }
          create: {
            args: Prisma.TrainerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>
          }
          createMany: {
            args: Prisma.TrainerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>[]
          }
          delete: {
            args: Prisma.TrainerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>
          }
          update: {
            args: Prisma.TrainerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>
          }
          deleteMany: {
            args: Prisma.TrainerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>[]
          }
          upsert: {
            args: Prisma.TrainerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>
          }
          aggregate: {
            args: Prisma.TrainerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainer>
          }
          groupBy: {
            args: Prisma.TrainerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainerCountArgs<ExtArgs>
            result: $Utils.Optional<TrainerCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Locker: {
        payload: Prisma.$LockerPayload<ExtArgs>
        fields: Prisma.LockerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LockerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LockerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockerPayload>
          }
          findFirst: {
            args: Prisma.LockerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LockerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockerPayload>
          }
          findMany: {
            args: Prisma.LockerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockerPayload>[]
          }
          create: {
            args: Prisma.LockerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockerPayload>
          }
          createMany: {
            args: Prisma.LockerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LockerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockerPayload>[]
          }
          delete: {
            args: Prisma.LockerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockerPayload>
          }
          update: {
            args: Prisma.LockerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockerPayload>
          }
          deleteMany: {
            args: Prisma.LockerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LockerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LockerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockerPayload>[]
          }
          upsert: {
            args: Prisma.LockerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LockerPayload>
          }
          aggregate: {
            args: Prisma.LockerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocker>
          }
          groupBy: {
            args: Prisma.LockerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LockerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LockerCountArgs<ExtArgs>
            result: $Utils.Optional<LockerCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      ClientService: {
        payload: Prisma.$ClientServicePayload<ExtArgs>
        fields: Prisma.ClientServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientServicePayload>
          }
          findFirst: {
            args: Prisma.ClientServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientServicePayload>
          }
          findMany: {
            args: Prisma.ClientServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientServicePayload>[]
          }
          create: {
            args: Prisma.ClientServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientServicePayload>
          }
          createMany: {
            args: Prisma.ClientServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientServicePayload>[]
          }
          delete: {
            args: Prisma.ClientServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientServicePayload>
          }
          update: {
            args: Prisma.ClientServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientServicePayload>
          }
          deleteMany: {
            args: Prisma.ClientServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientServicePayload>[]
          }
          upsert: {
            args: Prisma.ClientServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientServicePayload>
          }
          aggregate: {
            args: Prisma.ClientServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientService>
          }
          groupBy: {
            args: Prisma.ClientServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ClientServiceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    trainer?: TrainerOmit
    client?: ClientOmit
    locker?: LockerOmit
    service?: ServiceOmit
    clientService?: ClientServiceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type TrainerCountOutputType
   */

  export type TrainerCountOutputType = {
    clients: number
  }

  export type TrainerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | TrainerCountOutputTypeCountClientsArgs
  }

  // Custom InputTypes
  /**
   * TrainerCountOutputType without action
   */
  export type TrainerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerCountOutputType
     */
    select?: TrainerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrainerCountOutputType without action
   */
  export type TrainerCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    services: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ClientCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientServiceWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    clients: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | ServiceCountOutputTypeCountClientsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientServiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Trainer
   */

  export type AggregateTrainer = {
    _count: TrainerCountAggregateOutputType | null
    _min: TrainerMinAggregateOutputType | null
    _max: TrainerMaxAggregateOutputType | null
  }

  export type TrainerMinAggregateOutputType = {
    id: string | null
    surname: string | null
    name: string | null
    patronymic: string | null
    phone: string | null
    status: string | null
  }

  export type TrainerMaxAggregateOutputType = {
    id: string | null
    surname: string | null
    name: string | null
    patronymic: string | null
    phone: string | null
    status: string | null
  }

  export type TrainerCountAggregateOutputType = {
    id: number
    surname: number
    name: number
    patronymic: number
    phone: number
    status: number
    _all: number
  }


  export type TrainerMinAggregateInputType = {
    id?: true
    surname?: true
    name?: true
    patronymic?: true
    phone?: true
    status?: true
  }

  export type TrainerMaxAggregateInputType = {
    id?: true
    surname?: true
    name?: true
    patronymic?: true
    phone?: true
    status?: true
  }

  export type TrainerCountAggregateInputType = {
    id?: true
    surname?: true
    name?: true
    patronymic?: true
    phone?: true
    status?: true
    _all?: true
  }

  export type TrainerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trainer to aggregate.
     */
    where?: TrainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainers to fetch.
     */
    orderBy?: TrainerOrderByWithRelationInput | TrainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trainers
    **/
    _count?: true | TrainerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainerMaxAggregateInputType
  }

  export type GetTrainerAggregateType<T extends TrainerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainer[P]>
      : GetScalarType<T[P], AggregateTrainer[P]>
  }




  export type TrainerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainerWhereInput
    orderBy?: TrainerOrderByWithAggregationInput | TrainerOrderByWithAggregationInput[]
    by: TrainerScalarFieldEnum[] | TrainerScalarFieldEnum
    having?: TrainerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainerCountAggregateInputType | true
    _min?: TrainerMinAggregateInputType
    _max?: TrainerMaxAggregateInputType
  }

  export type TrainerGroupByOutputType = {
    id: string
    surname: string
    name: string
    patronymic: string | null
    phone: string
    status: string
    _count: TrainerCountAggregateOutputType | null
    _min: TrainerMinAggregateOutputType | null
    _max: TrainerMaxAggregateOutputType | null
  }

  type GetTrainerGroupByPayload<T extends TrainerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainerGroupByOutputType[P]>
            : GetScalarType<T[P], TrainerGroupByOutputType[P]>
        }
      >
    >


  export type TrainerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surname?: boolean
    name?: boolean
    patronymic?: boolean
    phone?: boolean
    status?: boolean
    clients?: boolean | Trainer$clientsArgs<ExtArgs>
    _count?: boolean | TrainerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainer"]>

  export type TrainerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surname?: boolean
    name?: boolean
    patronymic?: boolean
    phone?: boolean
    status?: boolean
  }, ExtArgs["result"]["trainer"]>

  export type TrainerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surname?: boolean
    name?: boolean
    patronymic?: boolean
    phone?: boolean
    status?: boolean
  }, ExtArgs["result"]["trainer"]>

  export type TrainerSelectScalar = {
    id?: boolean
    surname?: boolean
    name?: boolean
    patronymic?: boolean
    phone?: boolean
    status?: boolean
  }

  export type TrainerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "surname" | "name" | "patronymic" | "phone" | "status", ExtArgs["result"]["trainer"]>
  export type TrainerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | Trainer$clientsArgs<ExtArgs>
    _count?: boolean | TrainerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrainerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TrainerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TrainerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trainer"
    objects: {
      clients: Prisma.$ClientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      surname: string
      name: string
      patronymic: string | null
      phone: string
      status: string
    }, ExtArgs["result"]["trainer"]>
    composites: {}
  }

  type TrainerGetPayload<S extends boolean | null | undefined | TrainerDefaultArgs> = $Result.GetResult<Prisma.$TrainerPayload, S>

  type TrainerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainerCountAggregateInputType | true
    }

  export interface TrainerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trainer'], meta: { name: 'Trainer' } }
    /**
     * Find zero or one Trainer that matches the filter.
     * @param {TrainerFindUniqueArgs} args - Arguments to find a Trainer
     * @example
     * // Get one Trainer
     * const trainer = await prisma.trainer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainerFindUniqueArgs>(args: SelectSubset<T, TrainerFindUniqueArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trainer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainerFindUniqueOrThrowArgs} args - Arguments to find a Trainer
     * @example
     * // Get one Trainer
     * const trainer = await prisma.trainer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainerFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trainer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerFindFirstArgs} args - Arguments to find a Trainer
     * @example
     * // Get one Trainer
     * const trainer = await prisma.trainer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainerFindFirstArgs>(args?: SelectSubset<T, TrainerFindFirstArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trainer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerFindFirstOrThrowArgs} args - Arguments to find a Trainer
     * @example
     * // Get one Trainer
     * const trainer = await prisma.trainer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainerFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trainers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trainers
     * const trainers = await prisma.trainer.findMany()
     * 
     * // Get first 10 Trainers
     * const trainers = await prisma.trainer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainerWithIdOnly = await prisma.trainer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainerFindManyArgs>(args?: SelectSubset<T, TrainerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trainer.
     * @param {TrainerCreateArgs} args - Arguments to create a Trainer.
     * @example
     * // Create one Trainer
     * const Trainer = await prisma.trainer.create({
     *   data: {
     *     // ... data to create a Trainer
     *   }
     * })
     * 
     */
    create<T extends TrainerCreateArgs>(args: SelectSubset<T, TrainerCreateArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trainers.
     * @param {TrainerCreateManyArgs} args - Arguments to create many Trainers.
     * @example
     * // Create many Trainers
     * const trainer = await prisma.trainer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainerCreateManyArgs>(args?: SelectSubset<T, TrainerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trainers and returns the data saved in the database.
     * @param {TrainerCreateManyAndReturnArgs} args - Arguments to create many Trainers.
     * @example
     * // Create many Trainers
     * const trainer = await prisma.trainer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trainers and only return the `id`
     * const trainerWithIdOnly = await prisma.trainer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainerCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trainer.
     * @param {TrainerDeleteArgs} args - Arguments to delete one Trainer.
     * @example
     * // Delete one Trainer
     * const Trainer = await prisma.trainer.delete({
     *   where: {
     *     // ... filter to delete one Trainer
     *   }
     * })
     * 
     */
    delete<T extends TrainerDeleteArgs>(args: SelectSubset<T, TrainerDeleteArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trainer.
     * @param {TrainerUpdateArgs} args - Arguments to update one Trainer.
     * @example
     * // Update one Trainer
     * const trainer = await prisma.trainer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainerUpdateArgs>(args: SelectSubset<T, TrainerUpdateArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trainers.
     * @param {TrainerDeleteManyArgs} args - Arguments to filter Trainers to delete.
     * @example
     * // Delete a few Trainers
     * const { count } = await prisma.trainer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainerDeleteManyArgs>(args?: SelectSubset<T, TrainerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trainers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trainers
     * const trainer = await prisma.trainer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainerUpdateManyArgs>(args: SelectSubset<T, TrainerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trainers and returns the data updated in the database.
     * @param {TrainerUpdateManyAndReturnArgs} args - Arguments to update many Trainers.
     * @example
     * // Update many Trainers
     * const trainer = await prisma.trainer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trainers and only return the `id`
     * const trainerWithIdOnly = await prisma.trainer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrainerUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trainer.
     * @param {TrainerUpsertArgs} args - Arguments to update or create a Trainer.
     * @example
     * // Update or create a Trainer
     * const trainer = await prisma.trainer.upsert({
     *   create: {
     *     // ... data to create a Trainer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trainer we want to update
     *   }
     * })
     */
    upsert<T extends TrainerUpsertArgs>(args: SelectSubset<T, TrainerUpsertArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trainers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerCountArgs} args - Arguments to filter Trainers to count.
     * @example
     * // Count the number of Trainers
     * const count = await prisma.trainer.count({
     *   where: {
     *     // ... the filter for the Trainers we want to count
     *   }
     * })
    **/
    count<T extends TrainerCountArgs>(
      args?: Subset<T, TrainerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trainer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainerAggregateArgs>(args: Subset<T, TrainerAggregateArgs>): Prisma.PrismaPromise<GetTrainerAggregateType<T>>

    /**
     * Group by Trainer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerGroupByArgs} args - Group by arguments.
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
      T extends TrainerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainerGroupByArgs['orderBy'] }
        : { orderBy?: TrainerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrainerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trainer model
   */
  readonly fields: TrainerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trainer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends Trainer$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Trainer$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trainer model
   */
  interface TrainerFieldRefs {
    readonly id: FieldRef<"Trainer", 'String'>
    readonly surname: FieldRef<"Trainer", 'String'>
    readonly name: FieldRef<"Trainer", 'String'>
    readonly patronymic: FieldRef<"Trainer", 'String'>
    readonly phone: FieldRef<"Trainer", 'String'>
    readonly status: FieldRef<"Trainer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trainer findUnique
   */
  export type TrainerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * Filter, which Trainer to fetch.
     */
    where: TrainerWhereUniqueInput
  }

  /**
   * Trainer findUniqueOrThrow
   */
  export type TrainerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * Filter, which Trainer to fetch.
     */
    where: TrainerWhereUniqueInput
  }

  /**
   * Trainer findFirst
   */
  export type TrainerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * Filter, which Trainer to fetch.
     */
    where?: TrainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainers to fetch.
     */
    orderBy?: TrainerOrderByWithRelationInput | TrainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trainers.
     */
    cursor?: TrainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trainers.
     */
    distinct?: TrainerScalarFieldEnum | TrainerScalarFieldEnum[]
  }

  /**
   * Trainer findFirstOrThrow
   */
  export type TrainerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * Filter, which Trainer to fetch.
     */
    where?: TrainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainers to fetch.
     */
    orderBy?: TrainerOrderByWithRelationInput | TrainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trainers.
     */
    cursor?: TrainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trainers.
     */
    distinct?: TrainerScalarFieldEnum | TrainerScalarFieldEnum[]
  }

  /**
   * Trainer findMany
   */
  export type TrainerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * Filter, which Trainers to fetch.
     */
    where?: TrainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainers to fetch.
     */
    orderBy?: TrainerOrderByWithRelationInput | TrainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trainers.
     */
    cursor?: TrainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trainers.
     */
    distinct?: TrainerScalarFieldEnum | TrainerScalarFieldEnum[]
  }

  /**
   * Trainer create
   */
  export type TrainerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trainer.
     */
    data: XOR<TrainerCreateInput, TrainerUncheckedCreateInput>
  }

  /**
   * Trainer createMany
   */
  export type TrainerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trainers.
     */
    data: TrainerCreateManyInput | TrainerCreateManyInput[]
  }

  /**
   * Trainer createManyAndReturn
   */
  export type TrainerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * The data used to create many Trainers.
     */
    data: TrainerCreateManyInput | TrainerCreateManyInput[]
  }

  /**
   * Trainer update
   */
  export type TrainerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trainer.
     */
    data: XOR<TrainerUpdateInput, TrainerUncheckedUpdateInput>
    /**
     * Choose, which Trainer to update.
     */
    where: TrainerWhereUniqueInput
  }

  /**
   * Trainer updateMany
   */
  export type TrainerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trainers.
     */
    data: XOR<TrainerUpdateManyMutationInput, TrainerUncheckedUpdateManyInput>
    /**
     * Filter which Trainers to update
     */
    where?: TrainerWhereInput
    /**
     * Limit how many Trainers to update.
     */
    limit?: number
  }

  /**
   * Trainer updateManyAndReturn
   */
  export type TrainerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * The data used to update Trainers.
     */
    data: XOR<TrainerUpdateManyMutationInput, TrainerUncheckedUpdateManyInput>
    /**
     * Filter which Trainers to update
     */
    where?: TrainerWhereInput
    /**
     * Limit how many Trainers to update.
     */
    limit?: number
  }

  /**
   * Trainer upsert
   */
  export type TrainerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trainer to update in case it exists.
     */
    where: TrainerWhereUniqueInput
    /**
     * In case the Trainer found by the `where` argument doesn't exist, create a new Trainer with this data.
     */
    create: XOR<TrainerCreateInput, TrainerUncheckedCreateInput>
    /**
     * In case the Trainer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainerUpdateInput, TrainerUncheckedUpdateInput>
  }

  /**
   * Trainer delete
   */
  export type TrainerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * Filter which Trainer to delete.
     */
    where: TrainerWhereUniqueInput
  }

  /**
   * Trainer deleteMany
   */
  export type TrainerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trainers to delete
     */
    where?: TrainerWhereInput
    /**
     * Limit how many Trainers to delete.
     */
    limit?: number
  }

  /**
   * Trainer.clients
   */
  export type Trainer$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Trainer without action
   */
  export type TrainerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    surname: string | null
    name: string | null
    patronymic: string | null
    birthday: string | null
    phone: string | null
    email: string | null
    is_active: boolean | null
    trainer_id: string | null
    locker_id: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    surname: string | null
    name: string | null
    patronymic: string | null
    birthday: string | null
    phone: string | null
    email: string | null
    is_active: boolean | null
    trainer_id: string | null
    locker_id: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    surname: number
    name: number
    patronymic: number
    birthday: number
    phone: number
    email: number
    is_active: number
    trainer_id: number
    locker_id: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    surname?: true
    name?: true
    patronymic?: true
    birthday?: true
    phone?: true
    email?: true
    is_active?: true
    trainer_id?: true
    locker_id?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    surname?: true
    name?: true
    patronymic?: true
    birthday?: true
    phone?: true
    email?: true
    is_active?: true
    trainer_id?: true
    locker_id?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    surname?: true
    name?: true
    patronymic?: true
    birthday?: true
    phone?: true
    email?: true
    is_active?: true
    trainer_id?: true
    locker_id?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    surname: string
    name: string
    patronymic: string | null
    birthday: string
    phone: string
    email: string
    is_active: boolean
    trainer_id: string | null
    locker_id: string | null
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surname?: boolean
    name?: boolean
    patronymic?: boolean
    birthday?: boolean
    phone?: boolean
    email?: boolean
    is_active?: boolean
    trainer_id?: boolean
    locker_id?: boolean
    trainer?: boolean | Client$trainerArgs<ExtArgs>
    locker?: boolean | Client$lockerArgs<ExtArgs>
    services?: boolean | Client$servicesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surname?: boolean
    name?: boolean
    patronymic?: boolean
    birthday?: boolean
    phone?: boolean
    email?: boolean
    is_active?: boolean
    trainer_id?: boolean
    locker_id?: boolean
    trainer?: boolean | Client$trainerArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surname?: boolean
    name?: boolean
    patronymic?: boolean
    birthday?: boolean
    phone?: boolean
    email?: boolean
    is_active?: boolean
    trainer_id?: boolean
    locker_id?: boolean
    trainer?: boolean | Client$trainerArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    surname?: boolean
    name?: boolean
    patronymic?: boolean
    birthday?: boolean
    phone?: boolean
    email?: boolean
    is_active?: boolean
    trainer_id?: boolean
    locker_id?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "surname" | "name" | "patronymic" | "birthday" | "phone" | "email" | "is_active" | "trainer_id" | "locker_id", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainer?: boolean | Client$trainerArgs<ExtArgs>
    locker?: boolean | Client$lockerArgs<ExtArgs>
    services?: boolean | Client$servicesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainer?: boolean | Client$trainerArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainer?: boolean | Client$trainerArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      trainer: Prisma.$TrainerPayload<ExtArgs> | null
      locker: Prisma.$LockerPayload<ExtArgs> | null
      services: Prisma.$ClientServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      surname: string
      name: string
      patronymic: string | null
      birthday: string
      phone: string
      email: string
      is_active: boolean
      trainer_id: string | null
      locker_id: string | null
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trainer<T extends Client$trainerArgs<ExtArgs> = {}>(args?: Subset<T, Client$trainerArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    locker<T extends Client$lockerArgs<ExtArgs> = {}>(args?: Subset<T, Client$lockerArgs<ExtArgs>>): Prisma__LockerClient<$Result.GetResult<Prisma.$LockerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    services<T extends Client$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Client$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly surname: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly patronymic: FieldRef<"Client", 'String'>
    readonly birthday: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly is_active: FieldRef<"Client", 'Boolean'>
    readonly trainer_id: FieldRef<"Client", 'String'>
    readonly locker_id: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.trainer
   */
  export type Client$trainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    where?: TrainerWhereInput
  }

  /**
   * Client.locker
   */
  export type Client$lockerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locker
     */
    select?: LockerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locker
     */
    omit?: LockerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockerInclude<ExtArgs> | null
    where?: LockerWhereInput
  }

  /**
   * Client.services
   */
  export type Client$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceInclude<ExtArgs> | null
    where?: ClientServiceWhereInput
    orderBy?: ClientServiceOrderByWithRelationInput | ClientServiceOrderByWithRelationInput[]
    cursor?: ClientServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientServiceScalarFieldEnum | ClientServiceScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Locker
   */

  export type AggregateLocker = {
    _count: LockerCountAggregateOutputType | null
    _avg: LockerAvgAggregateOutputType | null
    _sum: LockerSumAggregateOutputType | null
    _min: LockerMinAggregateOutputType | null
    _max: LockerMaxAggregateOutputType | null
  }

  export type LockerAvgAggregateOutputType = {
    number: number | null
  }

  export type LockerSumAggregateOutputType = {
    number: number | null
  }

  export type LockerMinAggregateOutputType = {
    id: string | null
    number: number | null
    client_id: string | null
  }

  export type LockerMaxAggregateOutputType = {
    id: string | null
    number: number | null
    client_id: string | null
  }

  export type LockerCountAggregateOutputType = {
    id: number
    number: number
    client_id: number
    _all: number
  }


  export type LockerAvgAggregateInputType = {
    number?: true
  }

  export type LockerSumAggregateInputType = {
    number?: true
  }

  export type LockerMinAggregateInputType = {
    id?: true
    number?: true
    client_id?: true
  }

  export type LockerMaxAggregateInputType = {
    id?: true
    number?: true
    client_id?: true
  }

  export type LockerCountAggregateInputType = {
    id?: true
    number?: true
    client_id?: true
    _all?: true
  }

  export type LockerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locker to aggregate.
     */
    where?: LockerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lockers to fetch.
     */
    orderBy?: LockerOrderByWithRelationInput | LockerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LockerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lockers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lockers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lockers
    **/
    _count?: true | LockerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LockerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LockerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LockerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LockerMaxAggregateInputType
  }

  export type GetLockerAggregateType<T extends LockerAggregateArgs> = {
        [P in keyof T & keyof AggregateLocker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocker[P]>
      : GetScalarType<T[P], AggregateLocker[P]>
  }




  export type LockerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LockerWhereInput
    orderBy?: LockerOrderByWithAggregationInput | LockerOrderByWithAggregationInput[]
    by: LockerScalarFieldEnum[] | LockerScalarFieldEnum
    having?: LockerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LockerCountAggregateInputType | true
    _avg?: LockerAvgAggregateInputType
    _sum?: LockerSumAggregateInputType
    _min?: LockerMinAggregateInputType
    _max?: LockerMaxAggregateInputType
  }

  export type LockerGroupByOutputType = {
    id: string
    number: number
    client_id: string | null
    _count: LockerCountAggregateOutputType | null
    _avg: LockerAvgAggregateOutputType | null
    _sum: LockerSumAggregateOutputType | null
    _min: LockerMinAggregateOutputType | null
    _max: LockerMaxAggregateOutputType | null
  }

  type GetLockerGroupByPayload<T extends LockerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LockerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LockerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LockerGroupByOutputType[P]>
            : GetScalarType<T[P], LockerGroupByOutputType[P]>
        }
      >
    >


  export type LockerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    client_id?: boolean
    client?: boolean | Locker$clientArgs<ExtArgs>
  }, ExtArgs["result"]["locker"]>

  export type LockerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    client_id?: boolean
    client?: boolean | Locker$clientArgs<ExtArgs>
  }, ExtArgs["result"]["locker"]>

  export type LockerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    client_id?: boolean
    client?: boolean | Locker$clientArgs<ExtArgs>
  }, ExtArgs["result"]["locker"]>

  export type LockerSelectScalar = {
    id?: boolean
    number?: boolean
    client_id?: boolean
  }

  export type LockerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "client_id", ExtArgs["result"]["locker"]>
  export type LockerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Locker$clientArgs<ExtArgs>
  }
  export type LockerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Locker$clientArgs<ExtArgs>
  }
  export type LockerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Locker$clientArgs<ExtArgs>
  }

  export type $LockerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Locker"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: number
      client_id: string | null
    }, ExtArgs["result"]["locker"]>
    composites: {}
  }

  type LockerGetPayload<S extends boolean | null | undefined | LockerDefaultArgs> = $Result.GetResult<Prisma.$LockerPayload, S>

  type LockerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LockerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LockerCountAggregateInputType | true
    }

  export interface LockerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Locker'], meta: { name: 'Locker' } }
    /**
     * Find zero or one Locker that matches the filter.
     * @param {LockerFindUniqueArgs} args - Arguments to find a Locker
     * @example
     * // Get one Locker
     * const locker = await prisma.locker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LockerFindUniqueArgs>(args: SelectSubset<T, LockerFindUniqueArgs<ExtArgs>>): Prisma__LockerClient<$Result.GetResult<Prisma.$LockerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LockerFindUniqueOrThrowArgs} args - Arguments to find a Locker
     * @example
     * // Get one Locker
     * const locker = await prisma.locker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LockerFindUniqueOrThrowArgs>(args: SelectSubset<T, LockerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LockerClient<$Result.GetResult<Prisma.$LockerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockerFindFirstArgs} args - Arguments to find a Locker
     * @example
     * // Get one Locker
     * const locker = await prisma.locker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LockerFindFirstArgs>(args?: SelectSubset<T, LockerFindFirstArgs<ExtArgs>>): Prisma__LockerClient<$Result.GetResult<Prisma.$LockerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockerFindFirstOrThrowArgs} args - Arguments to find a Locker
     * @example
     * // Get one Locker
     * const locker = await prisma.locker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LockerFindFirstOrThrowArgs>(args?: SelectSubset<T, LockerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LockerClient<$Result.GetResult<Prisma.$LockerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lockers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lockers
     * const lockers = await prisma.locker.findMany()
     * 
     * // Get first 10 Lockers
     * const lockers = await prisma.locker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lockerWithIdOnly = await prisma.locker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LockerFindManyArgs>(args?: SelectSubset<T, LockerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LockerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locker.
     * @param {LockerCreateArgs} args - Arguments to create a Locker.
     * @example
     * // Create one Locker
     * const Locker = await prisma.locker.create({
     *   data: {
     *     // ... data to create a Locker
     *   }
     * })
     * 
     */
    create<T extends LockerCreateArgs>(args: SelectSubset<T, LockerCreateArgs<ExtArgs>>): Prisma__LockerClient<$Result.GetResult<Prisma.$LockerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lockers.
     * @param {LockerCreateManyArgs} args - Arguments to create many Lockers.
     * @example
     * // Create many Lockers
     * const locker = await prisma.locker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LockerCreateManyArgs>(args?: SelectSubset<T, LockerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lockers and returns the data saved in the database.
     * @param {LockerCreateManyAndReturnArgs} args - Arguments to create many Lockers.
     * @example
     * // Create many Lockers
     * const locker = await prisma.locker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lockers and only return the `id`
     * const lockerWithIdOnly = await prisma.locker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LockerCreateManyAndReturnArgs>(args?: SelectSubset<T, LockerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LockerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Locker.
     * @param {LockerDeleteArgs} args - Arguments to delete one Locker.
     * @example
     * // Delete one Locker
     * const Locker = await prisma.locker.delete({
     *   where: {
     *     // ... filter to delete one Locker
     *   }
     * })
     * 
     */
    delete<T extends LockerDeleteArgs>(args: SelectSubset<T, LockerDeleteArgs<ExtArgs>>): Prisma__LockerClient<$Result.GetResult<Prisma.$LockerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locker.
     * @param {LockerUpdateArgs} args - Arguments to update one Locker.
     * @example
     * // Update one Locker
     * const locker = await prisma.locker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LockerUpdateArgs>(args: SelectSubset<T, LockerUpdateArgs<ExtArgs>>): Prisma__LockerClient<$Result.GetResult<Prisma.$LockerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lockers.
     * @param {LockerDeleteManyArgs} args - Arguments to filter Lockers to delete.
     * @example
     * // Delete a few Lockers
     * const { count } = await prisma.locker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LockerDeleteManyArgs>(args?: SelectSubset<T, LockerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lockers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lockers
     * const locker = await prisma.locker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LockerUpdateManyArgs>(args: SelectSubset<T, LockerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lockers and returns the data updated in the database.
     * @param {LockerUpdateManyAndReturnArgs} args - Arguments to update many Lockers.
     * @example
     * // Update many Lockers
     * const locker = await prisma.locker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lockers and only return the `id`
     * const lockerWithIdOnly = await prisma.locker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LockerUpdateManyAndReturnArgs>(args: SelectSubset<T, LockerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LockerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Locker.
     * @param {LockerUpsertArgs} args - Arguments to update or create a Locker.
     * @example
     * // Update or create a Locker
     * const locker = await prisma.locker.upsert({
     *   create: {
     *     // ... data to create a Locker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locker we want to update
     *   }
     * })
     */
    upsert<T extends LockerUpsertArgs>(args: SelectSubset<T, LockerUpsertArgs<ExtArgs>>): Prisma__LockerClient<$Result.GetResult<Prisma.$LockerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lockers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockerCountArgs} args - Arguments to filter Lockers to count.
     * @example
     * // Count the number of Lockers
     * const count = await prisma.locker.count({
     *   where: {
     *     // ... the filter for the Lockers we want to count
     *   }
     * })
    **/
    count<T extends LockerCountArgs>(
      args?: Subset<T, LockerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LockerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LockerAggregateArgs>(args: Subset<T, LockerAggregateArgs>): Prisma.PrismaPromise<GetLockerAggregateType<T>>

    /**
     * Group by Locker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockerGroupByArgs} args - Group by arguments.
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
      T extends LockerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LockerGroupByArgs['orderBy'] }
        : { orderBy?: LockerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LockerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLockerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Locker model
   */
  readonly fields: LockerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Locker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LockerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends Locker$clientArgs<ExtArgs> = {}>(args?: Subset<T, Locker$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Locker model
   */
  interface LockerFieldRefs {
    readonly id: FieldRef<"Locker", 'String'>
    readonly number: FieldRef<"Locker", 'Int'>
    readonly client_id: FieldRef<"Locker", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Locker findUnique
   */
  export type LockerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locker
     */
    select?: LockerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locker
     */
    omit?: LockerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockerInclude<ExtArgs> | null
    /**
     * Filter, which Locker to fetch.
     */
    where: LockerWhereUniqueInput
  }

  /**
   * Locker findUniqueOrThrow
   */
  export type LockerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locker
     */
    select?: LockerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locker
     */
    omit?: LockerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockerInclude<ExtArgs> | null
    /**
     * Filter, which Locker to fetch.
     */
    where: LockerWhereUniqueInput
  }

  /**
   * Locker findFirst
   */
  export type LockerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locker
     */
    select?: LockerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locker
     */
    omit?: LockerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockerInclude<ExtArgs> | null
    /**
     * Filter, which Locker to fetch.
     */
    where?: LockerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lockers to fetch.
     */
    orderBy?: LockerOrderByWithRelationInput | LockerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lockers.
     */
    cursor?: LockerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lockers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lockers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lockers.
     */
    distinct?: LockerScalarFieldEnum | LockerScalarFieldEnum[]
  }

  /**
   * Locker findFirstOrThrow
   */
  export type LockerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locker
     */
    select?: LockerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locker
     */
    omit?: LockerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockerInclude<ExtArgs> | null
    /**
     * Filter, which Locker to fetch.
     */
    where?: LockerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lockers to fetch.
     */
    orderBy?: LockerOrderByWithRelationInput | LockerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lockers.
     */
    cursor?: LockerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lockers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lockers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lockers.
     */
    distinct?: LockerScalarFieldEnum | LockerScalarFieldEnum[]
  }

  /**
   * Locker findMany
   */
  export type LockerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locker
     */
    select?: LockerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locker
     */
    omit?: LockerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockerInclude<ExtArgs> | null
    /**
     * Filter, which Lockers to fetch.
     */
    where?: LockerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lockers to fetch.
     */
    orderBy?: LockerOrderByWithRelationInput | LockerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lockers.
     */
    cursor?: LockerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lockers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lockers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lockers.
     */
    distinct?: LockerScalarFieldEnum | LockerScalarFieldEnum[]
  }

  /**
   * Locker create
   */
  export type LockerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locker
     */
    select?: LockerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locker
     */
    omit?: LockerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockerInclude<ExtArgs> | null
    /**
     * The data needed to create a Locker.
     */
    data: XOR<LockerCreateInput, LockerUncheckedCreateInput>
  }

  /**
   * Locker createMany
   */
  export type LockerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lockers.
     */
    data: LockerCreateManyInput | LockerCreateManyInput[]
  }

  /**
   * Locker createManyAndReturn
   */
  export type LockerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locker
     */
    select?: LockerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locker
     */
    omit?: LockerOmit<ExtArgs> | null
    /**
     * The data used to create many Lockers.
     */
    data: LockerCreateManyInput | LockerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locker update
   */
  export type LockerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locker
     */
    select?: LockerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locker
     */
    omit?: LockerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockerInclude<ExtArgs> | null
    /**
     * The data needed to update a Locker.
     */
    data: XOR<LockerUpdateInput, LockerUncheckedUpdateInput>
    /**
     * Choose, which Locker to update.
     */
    where: LockerWhereUniqueInput
  }

  /**
   * Locker updateMany
   */
  export type LockerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lockers.
     */
    data: XOR<LockerUpdateManyMutationInput, LockerUncheckedUpdateManyInput>
    /**
     * Filter which Lockers to update
     */
    where?: LockerWhereInput
    /**
     * Limit how many Lockers to update.
     */
    limit?: number
  }

  /**
   * Locker updateManyAndReturn
   */
  export type LockerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locker
     */
    select?: LockerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locker
     */
    omit?: LockerOmit<ExtArgs> | null
    /**
     * The data used to update Lockers.
     */
    data: XOR<LockerUpdateManyMutationInput, LockerUncheckedUpdateManyInput>
    /**
     * Filter which Lockers to update
     */
    where?: LockerWhereInput
    /**
     * Limit how many Lockers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locker upsert
   */
  export type LockerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locker
     */
    select?: LockerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locker
     */
    omit?: LockerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockerInclude<ExtArgs> | null
    /**
     * The filter to search for the Locker to update in case it exists.
     */
    where: LockerWhereUniqueInput
    /**
     * In case the Locker found by the `where` argument doesn't exist, create a new Locker with this data.
     */
    create: XOR<LockerCreateInput, LockerUncheckedCreateInput>
    /**
     * In case the Locker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LockerUpdateInput, LockerUncheckedUpdateInput>
  }

  /**
   * Locker delete
   */
  export type LockerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locker
     */
    select?: LockerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locker
     */
    omit?: LockerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockerInclude<ExtArgs> | null
    /**
     * Filter which Locker to delete.
     */
    where: LockerWhereUniqueInput
  }

  /**
   * Locker deleteMany
   */
  export type LockerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lockers to delete
     */
    where?: LockerWhereInput
    /**
     * Limit how many Lockers to delete.
     */
    limit?: number
  }

  /**
   * Locker.client
   */
  export type Locker$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Locker without action
   */
  export type LockerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locker
     */
    select?: LockerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locker
     */
    omit?: LockerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LockerInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    price: number | null
  }

  export type ServiceSumAggregateOutputType = {
    price: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    price: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    price?: true
  }

  export type ServiceSumAggregateInputType = {
    price?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    price: number
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    clients?: boolean | Service$clientsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | Service$clientsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      clients: Prisma.$ClientServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends Service$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Service$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.clients
   */
  export type Service$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceInclude<ExtArgs> | null
    where?: ClientServiceWhereInput
    orderBy?: ClientServiceOrderByWithRelationInput | ClientServiceOrderByWithRelationInput[]
    cursor?: ClientServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientServiceScalarFieldEnum | ClientServiceScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model ClientService
   */

  export type AggregateClientService = {
    _count: ClientServiceCountAggregateOutputType | null
    _min: ClientServiceMinAggregateOutputType | null
    _max: ClientServiceMaxAggregateOutputType | null
  }

  export type ClientServiceMinAggregateOutputType = {
    client_id: string | null
    service_id: string | null
  }

  export type ClientServiceMaxAggregateOutputType = {
    client_id: string | null
    service_id: string | null
  }

  export type ClientServiceCountAggregateOutputType = {
    client_id: number
    service_id: number
    _all: number
  }


  export type ClientServiceMinAggregateInputType = {
    client_id?: true
    service_id?: true
  }

  export type ClientServiceMaxAggregateInputType = {
    client_id?: true
    service_id?: true
  }

  export type ClientServiceCountAggregateInputType = {
    client_id?: true
    service_id?: true
    _all?: true
  }

  export type ClientServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientService to aggregate.
     */
    where?: ClientServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientServices to fetch.
     */
    orderBy?: ClientServiceOrderByWithRelationInput | ClientServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientServices
    **/
    _count?: true | ClientServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientServiceMaxAggregateInputType
  }

  export type GetClientServiceAggregateType<T extends ClientServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateClientService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientService[P]>
      : GetScalarType<T[P], AggregateClientService[P]>
  }




  export type ClientServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientServiceWhereInput
    orderBy?: ClientServiceOrderByWithAggregationInput | ClientServiceOrderByWithAggregationInput[]
    by: ClientServiceScalarFieldEnum[] | ClientServiceScalarFieldEnum
    having?: ClientServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientServiceCountAggregateInputType | true
    _min?: ClientServiceMinAggregateInputType
    _max?: ClientServiceMaxAggregateInputType
  }

  export type ClientServiceGroupByOutputType = {
    client_id: string
    service_id: string
    _count: ClientServiceCountAggregateOutputType | null
    _min: ClientServiceMinAggregateOutputType | null
    _max: ClientServiceMaxAggregateOutputType | null
  }

  type GetClientServiceGroupByPayload<T extends ClientServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ClientServiceGroupByOutputType[P]>
        }
      >
    >


  export type ClientServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    service_id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientService"]>

  export type ClientServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    service_id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientService"]>

  export type ClientServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    service_id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientService"]>

  export type ClientServiceSelectScalar = {
    client_id?: boolean
    service_id?: boolean
  }

  export type ClientServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"client_id" | "service_id", ExtArgs["result"]["clientService"]>
  export type ClientServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ClientServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ClientServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ClientServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientService"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      client_id: string
      service_id: string
    }, ExtArgs["result"]["clientService"]>
    composites: {}
  }

  type ClientServiceGetPayload<S extends boolean | null | undefined | ClientServiceDefaultArgs> = $Result.GetResult<Prisma.$ClientServicePayload, S>

  type ClientServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientServiceCountAggregateInputType | true
    }

  export interface ClientServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientService'], meta: { name: 'ClientService' } }
    /**
     * Find zero or one ClientService that matches the filter.
     * @param {ClientServiceFindUniqueArgs} args - Arguments to find a ClientService
     * @example
     * // Get one ClientService
     * const clientService = await prisma.clientService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientServiceFindUniqueArgs>(args: SelectSubset<T, ClientServiceFindUniqueArgs<ExtArgs>>): Prisma__ClientServiceClient<$Result.GetResult<Prisma.$ClientServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientServiceFindUniqueOrThrowArgs} args - Arguments to find a ClientService
     * @example
     * // Get one ClientService
     * const clientService = await prisma.clientService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientServiceClient<$Result.GetResult<Prisma.$ClientServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientServiceFindFirstArgs} args - Arguments to find a ClientService
     * @example
     * // Get one ClientService
     * const clientService = await prisma.clientService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientServiceFindFirstArgs>(args?: SelectSubset<T, ClientServiceFindFirstArgs<ExtArgs>>): Prisma__ClientServiceClient<$Result.GetResult<Prisma.$ClientServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientServiceFindFirstOrThrowArgs} args - Arguments to find a ClientService
     * @example
     * // Get one ClientService
     * const clientService = await prisma.clientService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientServiceClient<$Result.GetResult<Prisma.$ClientServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientServices
     * const clientServices = await prisma.clientService.findMany()
     * 
     * // Get first 10 ClientServices
     * const clientServices = await prisma.clientService.findMany({ take: 10 })
     * 
     * // Only select the `client_id`
     * const clientServiceWithClient_idOnly = await prisma.clientService.findMany({ select: { client_id: true } })
     * 
     */
    findMany<T extends ClientServiceFindManyArgs>(args?: SelectSubset<T, ClientServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientService.
     * @param {ClientServiceCreateArgs} args - Arguments to create a ClientService.
     * @example
     * // Create one ClientService
     * const ClientService = await prisma.clientService.create({
     *   data: {
     *     // ... data to create a ClientService
     *   }
     * })
     * 
     */
    create<T extends ClientServiceCreateArgs>(args: SelectSubset<T, ClientServiceCreateArgs<ExtArgs>>): Prisma__ClientServiceClient<$Result.GetResult<Prisma.$ClientServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientServices.
     * @param {ClientServiceCreateManyArgs} args - Arguments to create many ClientServices.
     * @example
     * // Create many ClientServices
     * const clientService = await prisma.clientService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientServiceCreateManyArgs>(args?: SelectSubset<T, ClientServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientServices and returns the data saved in the database.
     * @param {ClientServiceCreateManyAndReturnArgs} args - Arguments to create many ClientServices.
     * @example
     * // Create many ClientServices
     * const clientService = await prisma.clientService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientServices and only return the `client_id`
     * const clientServiceWithClient_idOnly = await prisma.clientService.createManyAndReturn({
     *   select: { client_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientService.
     * @param {ClientServiceDeleteArgs} args - Arguments to delete one ClientService.
     * @example
     * // Delete one ClientService
     * const ClientService = await prisma.clientService.delete({
     *   where: {
     *     // ... filter to delete one ClientService
     *   }
     * })
     * 
     */
    delete<T extends ClientServiceDeleteArgs>(args: SelectSubset<T, ClientServiceDeleteArgs<ExtArgs>>): Prisma__ClientServiceClient<$Result.GetResult<Prisma.$ClientServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientService.
     * @param {ClientServiceUpdateArgs} args - Arguments to update one ClientService.
     * @example
     * // Update one ClientService
     * const clientService = await prisma.clientService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientServiceUpdateArgs>(args: SelectSubset<T, ClientServiceUpdateArgs<ExtArgs>>): Prisma__ClientServiceClient<$Result.GetResult<Prisma.$ClientServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientServices.
     * @param {ClientServiceDeleteManyArgs} args - Arguments to filter ClientServices to delete.
     * @example
     * // Delete a few ClientServices
     * const { count } = await prisma.clientService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientServiceDeleteManyArgs>(args?: SelectSubset<T, ClientServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientServices
     * const clientService = await prisma.clientService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientServiceUpdateManyArgs>(args: SelectSubset<T, ClientServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientServices and returns the data updated in the database.
     * @param {ClientServiceUpdateManyAndReturnArgs} args - Arguments to update many ClientServices.
     * @example
     * // Update many ClientServices
     * const clientService = await prisma.clientService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientServices and only return the `client_id`
     * const clientServiceWithClient_idOnly = await prisma.clientService.updateManyAndReturn({
     *   select: { client_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientService.
     * @param {ClientServiceUpsertArgs} args - Arguments to update or create a ClientService.
     * @example
     * // Update or create a ClientService
     * const clientService = await prisma.clientService.upsert({
     *   create: {
     *     // ... data to create a ClientService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientService we want to update
     *   }
     * })
     */
    upsert<T extends ClientServiceUpsertArgs>(args: SelectSubset<T, ClientServiceUpsertArgs<ExtArgs>>): Prisma__ClientServiceClient<$Result.GetResult<Prisma.$ClientServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientServiceCountArgs} args - Arguments to filter ClientServices to count.
     * @example
     * // Count the number of ClientServices
     * const count = await prisma.clientService.count({
     *   where: {
     *     // ... the filter for the ClientServices we want to count
     *   }
     * })
    **/
    count<T extends ClientServiceCountArgs>(
      args?: Subset<T, ClientServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientServiceAggregateArgs>(args: Subset<T, ClientServiceAggregateArgs>): Prisma.PrismaPromise<GetClientServiceAggregateType<T>>

    /**
     * Group by ClientService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientServiceGroupByArgs} args - Group by arguments.
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
      T extends ClientServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientServiceGroupByArgs['orderBy'] }
        : { orderBy?: ClientServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientService model
   */
  readonly fields: ClientServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientService model
   */
  interface ClientServiceFieldRefs {
    readonly client_id: FieldRef<"ClientService", 'String'>
    readonly service_id: FieldRef<"ClientService", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClientService findUnique
   */
  export type ClientServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceInclude<ExtArgs> | null
    /**
     * Filter, which ClientService to fetch.
     */
    where: ClientServiceWhereUniqueInput
  }

  /**
   * ClientService findUniqueOrThrow
   */
  export type ClientServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceInclude<ExtArgs> | null
    /**
     * Filter, which ClientService to fetch.
     */
    where: ClientServiceWhereUniqueInput
  }

  /**
   * ClientService findFirst
   */
  export type ClientServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceInclude<ExtArgs> | null
    /**
     * Filter, which ClientService to fetch.
     */
    where?: ClientServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientServices to fetch.
     */
    orderBy?: ClientServiceOrderByWithRelationInput | ClientServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientServices.
     */
    cursor?: ClientServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientServices.
     */
    distinct?: ClientServiceScalarFieldEnum | ClientServiceScalarFieldEnum[]
  }

  /**
   * ClientService findFirstOrThrow
   */
  export type ClientServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceInclude<ExtArgs> | null
    /**
     * Filter, which ClientService to fetch.
     */
    where?: ClientServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientServices to fetch.
     */
    orderBy?: ClientServiceOrderByWithRelationInput | ClientServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientServices.
     */
    cursor?: ClientServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientServices.
     */
    distinct?: ClientServiceScalarFieldEnum | ClientServiceScalarFieldEnum[]
  }

  /**
   * ClientService findMany
   */
  export type ClientServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceInclude<ExtArgs> | null
    /**
     * Filter, which ClientServices to fetch.
     */
    where?: ClientServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientServices to fetch.
     */
    orderBy?: ClientServiceOrderByWithRelationInput | ClientServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientServices.
     */
    cursor?: ClientServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientServices.
     */
    distinct?: ClientServiceScalarFieldEnum | ClientServiceScalarFieldEnum[]
  }

  /**
   * ClientService create
   */
  export type ClientServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientService.
     */
    data: XOR<ClientServiceCreateInput, ClientServiceUncheckedCreateInput>
  }

  /**
   * ClientService createMany
   */
  export type ClientServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientServices.
     */
    data: ClientServiceCreateManyInput | ClientServiceCreateManyInput[]
  }

  /**
   * ClientService createManyAndReturn
   */
  export type ClientServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * The data used to create many ClientServices.
     */
    data: ClientServiceCreateManyInput | ClientServiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientService update
   */
  export type ClientServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientService.
     */
    data: XOR<ClientServiceUpdateInput, ClientServiceUncheckedUpdateInput>
    /**
     * Choose, which ClientService to update.
     */
    where: ClientServiceWhereUniqueInput
  }

  /**
   * ClientService updateMany
   */
  export type ClientServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientServices.
     */
    data: XOR<ClientServiceUpdateManyMutationInput, ClientServiceUncheckedUpdateManyInput>
    /**
     * Filter which ClientServices to update
     */
    where?: ClientServiceWhereInput
    /**
     * Limit how many ClientServices to update.
     */
    limit?: number
  }

  /**
   * ClientService updateManyAndReturn
   */
  export type ClientServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * The data used to update ClientServices.
     */
    data: XOR<ClientServiceUpdateManyMutationInput, ClientServiceUncheckedUpdateManyInput>
    /**
     * Filter which ClientServices to update
     */
    where?: ClientServiceWhereInput
    /**
     * Limit how many ClientServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientService upsert
   */
  export type ClientServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientService to update in case it exists.
     */
    where: ClientServiceWhereUniqueInput
    /**
     * In case the ClientService found by the `where` argument doesn't exist, create a new ClientService with this data.
     */
    create: XOR<ClientServiceCreateInput, ClientServiceUncheckedCreateInput>
    /**
     * In case the ClientService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientServiceUpdateInput, ClientServiceUncheckedUpdateInput>
  }

  /**
   * ClientService delete
   */
  export type ClientServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceInclude<ExtArgs> | null
    /**
     * Filter which ClientService to delete.
     */
    where: ClientServiceWhereUniqueInput
  }

  /**
   * ClientService deleteMany
   */
  export type ClientServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientServices to delete
     */
    where?: ClientServiceWhereInput
    /**
     * Limit how many ClientServices to delete.
     */
    limit?: number
  }

  /**
   * ClientService without action
   */
  export type ClientServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientService
     */
    select?: ClientServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientService
     */
    omit?: ClientServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientServiceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TrainerScalarFieldEnum: {
    id: 'id',
    surname: 'surname',
    name: 'name',
    patronymic: 'patronymic',
    phone: 'phone',
    status: 'status'
  };

  export type TrainerScalarFieldEnum = (typeof TrainerScalarFieldEnum)[keyof typeof TrainerScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    surname: 'surname',
    name: 'name',
    patronymic: 'patronymic',
    birthday: 'birthday',
    phone: 'phone',
    email: 'email',
    is_active: 'is_active',
    trainer_id: 'trainer_id',
    locker_id: 'locker_id'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const LockerScalarFieldEnum: {
    id: 'id',
    number: 'number',
    client_id: 'client_id'
  };

  export type LockerScalarFieldEnum = (typeof LockerScalarFieldEnum)[keyof typeof LockerScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ClientServiceScalarFieldEnum: {
    client_id: 'client_id',
    service_id: 'service_id'
  };

  export type ClientServiceScalarFieldEnum = (typeof ClientServiceScalarFieldEnum)[keyof typeof ClientServiceScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TrainerWhereInput = {
    AND?: TrainerWhereInput | TrainerWhereInput[]
    OR?: TrainerWhereInput[]
    NOT?: TrainerWhereInput | TrainerWhereInput[]
    id?: StringFilter<"Trainer"> | string
    surname?: StringFilter<"Trainer"> | string
    name?: StringFilter<"Trainer"> | string
    patronymic?: StringNullableFilter<"Trainer"> | string | null
    phone?: StringFilter<"Trainer"> | string
    status?: StringFilter<"Trainer"> | string
    clients?: ClientListRelationFilter
  }

  export type TrainerOrderByWithRelationInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrderInput | SortOrder
    phone?: SortOrder
    status?: SortOrder
    clients?: ClientOrderByRelationAggregateInput
  }

  export type TrainerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrainerWhereInput | TrainerWhereInput[]
    OR?: TrainerWhereInput[]
    NOT?: TrainerWhereInput | TrainerWhereInput[]
    surname?: StringFilter<"Trainer"> | string
    name?: StringFilter<"Trainer"> | string
    patronymic?: StringNullableFilter<"Trainer"> | string | null
    phone?: StringFilter<"Trainer"> | string
    status?: StringFilter<"Trainer"> | string
    clients?: ClientListRelationFilter
  }, "id">

  export type TrainerOrderByWithAggregationInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrderInput | SortOrder
    phone?: SortOrder
    status?: SortOrder
    _count?: TrainerCountOrderByAggregateInput
    _max?: TrainerMaxOrderByAggregateInput
    _min?: TrainerMinOrderByAggregateInput
  }

  export type TrainerScalarWhereWithAggregatesInput = {
    AND?: TrainerScalarWhereWithAggregatesInput | TrainerScalarWhereWithAggregatesInput[]
    OR?: TrainerScalarWhereWithAggregatesInput[]
    NOT?: TrainerScalarWhereWithAggregatesInput | TrainerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trainer"> | string
    surname?: StringWithAggregatesFilter<"Trainer"> | string
    name?: StringWithAggregatesFilter<"Trainer"> | string
    patronymic?: StringNullableWithAggregatesFilter<"Trainer"> | string | null
    phone?: StringWithAggregatesFilter<"Trainer"> | string
    status?: StringWithAggregatesFilter<"Trainer"> | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    surname?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    patronymic?: StringNullableFilter<"Client"> | string | null
    birthday?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    is_active?: BoolFilter<"Client"> | boolean
    trainer_id?: StringNullableFilter<"Client"> | string | null
    locker_id?: StringNullableFilter<"Client"> | string | null
    trainer?: XOR<TrainerNullableScalarRelationFilter, TrainerWhereInput> | null
    locker?: XOR<LockerNullableScalarRelationFilter, LockerWhereInput> | null
    services?: ClientServiceListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrderInput | SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    is_active?: SortOrder
    trainer_id?: SortOrderInput | SortOrder
    locker_id?: SortOrderInput | SortOrder
    trainer?: TrainerOrderByWithRelationInput
    locker?: LockerOrderByWithRelationInput
    services?: ClientServiceOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    locker_id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    surname?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    patronymic?: StringNullableFilter<"Client"> | string | null
    birthday?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    is_active?: BoolFilter<"Client"> | boolean
    trainer_id?: StringNullableFilter<"Client"> | string | null
    trainer?: XOR<TrainerNullableScalarRelationFilter, TrainerWhereInput> | null
    locker?: XOR<LockerNullableScalarRelationFilter, LockerWhereInput> | null
    services?: ClientServiceListRelationFilter
  }, "id" | "locker_id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrderInput | SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    is_active?: SortOrder
    trainer_id?: SortOrderInput | SortOrder
    locker_id?: SortOrderInput | SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    surname?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    patronymic?: StringNullableWithAggregatesFilter<"Client"> | string | null
    birthday?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    is_active?: BoolWithAggregatesFilter<"Client"> | boolean
    trainer_id?: StringNullableWithAggregatesFilter<"Client"> | string | null
    locker_id?: StringNullableWithAggregatesFilter<"Client"> | string | null
  }

  export type LockerWhereInput = {
    AND?: LockerWhereInput | LockerWhereInput[]
    OR?: LockerWhereInput[]
    NOT?: LockerWhereInput | LockerWhereInput[]
    id?: StringFilter<"Locker"> | string
    number?: IntFilter<"Locker"> | number
    client_id?: StringNullableFilter<"Locker"> | string | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }

  export type LockerOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    client_id?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type LockerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    number?: number
    client_id?: string
    AND?: LockerWhereInput | LockerWhereInput[]
    OR?: LockerWhereInput[]
    NOT?: LockerWhereInput | LockerWhereInput[]
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }, "id" | "number" | "client_id">

  export type LockerOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    client_id?: SortOrderInput | SortOrder
    _count?: LockerCountOrderByAggregateInput
    _avg?: LockerAvgOrderByAggregateInput
    _max?: LockerMaxOrderByAggregateInput
    _min?: LockerMinOrderByAggregateInput
    _sum?: LockerSumOrderByAggregateInput
  }

  export type LockerScalarWhereWithAggregatesInput = {
    AND?: LockerScalarWhereWithAggregatesInput | LockerScalarWhereWithAggregatesInput[]
    OR?: LockerScalarWhereWithAggregatesInput[]
    NOT?: LockerScalarWhereWithAggregatesInput | LockerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Locker"> | string
    number?: IntWithAggregatesFilter<"Locker"> | number
    client_id?: StringNullableWithAggregatesFilter<"Locker"> | string | null
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    price?: IntFilter<"Service"> | number
    clients?: ClientServiceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    clients?: ClientServiceOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    price?: IntFilter<"Service"> | number
    clients?: ClientServiceListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    price?: IntWithAggregatesFilter<"Service"> | number
  }

  export type ClientServiceWhereInput = {
    AND?: ClientServiceWhereInput | ClientServiceWhereInput[]
    OR?: ClientServiceWhereInput[]
    NOT?: ClientServiceWhereInput | ClientServiceWhereInput[]
    client_id?: StringFilter<"ClientService"> | string
    service_id?: StringFilter<"ClientService"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ClientServiceOrderByWithRelationInput = {
    client_id?: SortOrder
    service_id?: SortOrder
    client?: ClientOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type ClientServiceWhereUniqueInput = Prisma.AtLeast<{
    client_id_service_id?: ClientServiceClient_idService_idCompoundUniqueInput
    AND?: ClientServiceWhereInput | ClientServiceWhereInput[]
    OR?: ClientServiceWhereInput[]
    NOT?: ClientServiceWhereInput | ClientServiceWhereInput[]
    client_id?: StringFilter<"ClientService"> | string
    service_id?: StringFilter<"ClientService"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "client_id_service_id">

  export type ClientServiceOrderByWithAggregationInput = {
    client_id?: SortOrder
    service_id?: SortOrder
    _count?: ClientServiceCountOrderByAggregateInput
    _max?: ClientServiceMaxOrderByAggregateInput
    _min?: ClientServiceMinOrderByAggregateInput
  }

  export type ClientServiceScalarWhereWithAggregatesInput = {
    AND?: ClientServiceScalarWhereWithAggregatesInput | ClientServiceScalarWhereWithAggregatesInput[]
    OR?: ClientServiceScalarWhereWithAggregatesInput[]
    NOT?: ClientServiceScalarWhereWithAggregatesInput | ClientServiceScalarWhereWithAggregatesInput[]
    client_id?: StringWithAggregatesFilter<"ClientService"> | string
    service_id?: StringWithAggregatesFilter<"ClientService"> | string
  }

  export type TrainerCreateInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    status?: string
    clients?: ClientCreateNestedManyWithoutTrainerInput
  }

  export type TrainerUncheckedCreateInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    status?: string
    clients?: ClientUncheckedCreateNestedManyWithoutTrainerInput
  }

  export type TrainerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    clients?: ClientUpdateManyWithoutTrainerNestedInput
  }

  export type TrainerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    clients?: ClientUncheckedUpdateManyWithoutTrainerNestedInput
  }

  export type TrainerCreateManyInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    status?: string
  }

  export type TrainerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TrainerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ClientCreateInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    birthday: string
    phone: string
    email: string
    is_active?: boolean
    locker_id?: string | null
    trainer?: TrainerCreateNestedOneWithoutClientsInput
    locker?: LockerCreateNestedOneWithoutClientInput
    services?: ClientServiceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    birthday: string
    phone: string
    email: string
    is_active?: boolean
    trainer_id?: string | null
    locker_id?: string | null
    locker?: LockerUncheckedCreateNestedOneWithoutClientInput
    services?: ClientServiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    locker_id?: NullableStringFieldUpdateOperationsInput | string | null
    trainer?: TrainerUpdateOneWithoutClientsNestedInput
    locker?: LockerUpdateOneWithoutClientNestedInput
    services?: ClientServiceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    trainer_id?: NullableStringFieldUpdateOperationsInput | string | null
    locker_id?: NullableStringFieldUpdateOperationsInput | string | null
    locker?: LockerUncheckedUpdateOneWithoutClientNestedInput
    services?: ClientServiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    birthday: string
    phone: string
    email: string
    is_active?: boolean
    trainer_id?: string | null
    locker_id?: string | null
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    locker_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    trainer_id?: NullableStringFieldUpdateOperationsInput | string | null
    locker_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LockerCreateInput = {
    id?: string
    number: number
    client?: ClientCreateNestedOneWithoutLockerInput
  }

  export type LockerUncheckedCreateInput = {
    id?: string
    number: number
    client_id?: string | null
  }

  export type LockerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    client?: ClientUpdateOneWithoutLockerNestedInput
  }

  export type LockerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LockerCreateManyInput = {
    id?: string
    number: number
    client_id?: string | null
  }

  export type LockerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type LockerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceCreateInput = {
    id: string
    name: string
    price: number
    clients?: ClientServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id: string
    name: string
    price: number
    clients?: ClientServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    clients?: ClientServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    clients?: ClientServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id: string
    name: string
    price: number
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ClientServiceCreateInput = {
    client: ClientCreateNestedOneWithoutServicesInput
    service: ServiceCreateNestedOneWithoutClientsInput
  }

  export type ClientServiceUncheckedCreateInput = {
    client_id: string
    service_id: string
  }

  export type ClientServiceUpdateInput = {
    client?: ClientUpdateOneRequiredWithoutServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutClientsNestedInput
  }

  export type ClientServiceUncheckedUpdateInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
  }

  export type ClientServiceCreateManyInput = {
    client_id: string
    service_id: string
  }

  export type ClientServiceUpdateManyMutationInput = {

  }

  export type ClientServiceUncheckedUpdateManyInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
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

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainerCountOrderByAggregateInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrder
    phone?: SortOrder
    status?: SortOrder
  }

  export type TrainerMaxOrderByAggregateInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrder
    phone?: SortOrder
    status?: SortOrder
  }

  export type TrainerMinOrderByAggregateInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrder
    phone?: SortOrder
    status?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TrainerNullableScalarRelationFilter = {
    is?: TrainerWhereInput | null
    isNot?: TrainerWhereInput | null
  }

  export type LockerNullableScalarRelationFilter = {
    is?: LockerWhereInput | null
    isNot?: LockerWhereInput | null
  }

  export type ClientServiceListRelationFilter = {
    every?: ClientServiceWhereInput
    some?: ClientServiceWhereInput
    none?: ClientServiceWhereInput
  }

  export type ClientServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    is_active?: SortOrder
    trainer_id?: SortOrder
    locker_id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    is_active?: SortOrder
    trainer_id?: SortOrder
    locker_id?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    patronymic?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    is_active?: SortOrder
    trainer_id?: SortOrder
    locker_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type LockerCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    client_id?: SortOrder
  }

  export type LockerAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type LockerMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    client_id?: SortOrder
  }

  export type LockerMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    client_id?: SortOrder
  }

  export type LockerSumOrderByAggregateInput = {
    number?: SortOrder
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

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ClientServiceClient_idService_idCompoundUniqueInput = {
    client_id: string
    service_id: string
  }

  export type ClientServiceCountOrderByAggregateInput = {
    client_id?: SortOrder
    service_id?: SortOrder
  }

  export type ClientServiceMaxOrderByAggregateInput = {
    client_id?: SortOrder
    service_id?: SortOrder
  }

  export type ClientServiceMinOrderByAggregateInput = {
    client_id?: SortOrder
    service_id?: SortOrder
  }

  export type ClientCreateNestedManyWithoutTrainerInput = {
    create?: XOR<ClientCreateWithoutTrainerInput, ClientUncheckedCreateWithoutTrainerInput> | ClientCreateWithoutTrainerInput[] | ClientUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTrainerInput | ClientCreateOrConnectWithoutTrainerInput[]
    createMany?: ClientCreateManyTrainerInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutTrainerInput = {
    create?: XOR<ClientCreateWithoutTrainerInput, ClientUncheckedCreateWithoutTrainerInput> | ClientCreateWithoutTrainerInput[] | ClientUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTrainerInput | ClientCreateOrConnectWithoutTrainerInput[]
    createMany?: ClientCreateManyTrainerInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClientUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<ClientCreateWithoutTrainerInput, ClientUncheckedCreateWithoutTrainerInput> | ClientCreateWithoutTrainerInput[] | ClientUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTrainerInput | ClientCreateOrConnectWithoutTrainerInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutTrainerInput | ClientUpsertWithWhereUniqueWithoutTrainerInput[]
    createMany?: ClientCreateManyTrainerInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutTrainerInput | ClientUpdateWithWhereUniqueWithoutTrainerInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutTrainerInput | ClientUpdateManyWithWhereWithoutTrainerInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<ClientCreateWithoutTrainerInput, ClientUncheckedCreateWithoutTrainerInput> | ClientCreateWithoutTrainerInput[] | ClientUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTrainerInput | ClientCreateOrConnectWithoutTrainerInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutTrainerInput | ClientUpsertWithWhereUniqueWithoutTrainerInput[]
    createMany?: ClientCreateManyTrainerInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutTrainerInput | ClientUpdateWithWhereUniqueWithoutTrainerInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutTrainerInput | ClientUpdateManyWithWhereWithoutTrainerInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type TrainerCreateNestedOneWithoutClientsInput = {
    create?: XOR<TrainerCreateWithoutClientsInput, TrainerUncheckedCreateWithoutClientsInput>
    connectOrCreate?: TrainerCreateOrConnectWithoutClientsInput
    connect?: TrainerWhereUniqueInput
  }

  export type LockerCreateNestedOneWithoutClientInput = {
    create?: XOR<LockerCreateWithoutClientInput, LockerUncheckedCreateWithoutClientInput>
    connectOrCreate?: LockerCreateOrConnectWithoutClientInput
    connect?: LockerWhereUniqueInput
  }

  export type ClientServiceCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientServiceCreateWithoutClientInput, ClientServiceUncheckedCreateWithoutClientInput> | ClientServiceCreateWithoutClientInput[] | ClientServiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientServiceCreateOrConnectWithoutClientInput | ClientServiceCreateOrConnectWithoutClientInput[]
    createMany?: ClientServiceCreateManyClientInputEnvelope
    connect?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
  }

  export type LockerUncheckedCreateNestedOneWithoutClientInput = {
    create?: XOR<LockerCreateWithoutClientInput, LockerUncheckedCreateWithoutClientInput>
    connectOrCreate?: LockerCreateOrConnectWithoutClientInput
    connect?: LockerWhereUniqueInput
  }

  export type ClientServiceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientServiceCreateWithoutClientInput, ClientServiceUncheckedCreateWithoutClientInput> | ClientServiceCreateWithoutClientInput[] | ClientServiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientServiceCreateOrConnectWithoutClientInput | ClientServiceCreateOrConnectWithoutClientInput[]
    createMany?: ClientServiceCreateManyClientInputEnvelope
    connect?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TrainerUpdateOneWithoutClientsNestedInput = {
    create?: XOR<TrainerCreateWithoutClientsInput, TrainerUncheckedCreateWithoutClientsInput>
    connectOrCreate?: TrainerCreateOrConnectWithoutClientsInput
    upsert?: TrainerUpsertWithoutClientsInput
    disconnect?: TrainerWhereInput | boolean
    delete?: TrainerWhereInput | boolean
    connect?: TrainerWhereUniqueInput
    update?: XOR<XOR<TrainerUpdateToOneWithWhereWithoutClientsInput, TrainerUpdateWithoutClientsInput>, TrainerUncheckedUpdateWithoutClientsInput>
  }

  export type LockerUpdateOneWithoutClientNestedInput = {
    create?: XOR<LockerCreateWithoutClientInput, LockerUncheckedCreateWithoutClientInput>
    connectOrCreate?: LockerCreateOrConnectWithoutClientInput
    upsert?: LockerUpsertWithoutClientInput
    disconnect?: LockerWhereInput | boolean
    delete?: LockerWhereInput | boolean
    connect?: LockerWhereUniqueInput
    update?: XOR<XOR<LockerUpdateToOneWithWhereWithoutClientInput, LockerUpdateWithoutClientInput>, LockerUncheckedUpdateWithoutClientInput>
  }

  export type ClientServiceUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientServiceCreateWithoutClientInput, ClientServiceUncheckedCreateWithoutClientInput> | ClientServiceCreateWithoutClientInput[] | ClientServiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientServiceCreateOrConnectWithoutClientInput | ClientServiceCreateOrConnectWithoutClientInput[]
    upsert?: ClientServiceUpsertWithWhereUniqueWithoutClientInput | ClientServiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientServiceCreateManyClientInputEnvelope
    set?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    disconnect?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    delete?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    connect?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    update?: ClientServiceUpdateWithWhereUniqueWithoutClientInput | ClientServiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientServiceUpdateManyWithWhereWithoutClientInput | ClientServiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientServiceScalarWhereInput | ClientServiceScalarWhereInput[]
  }

  export type LockerUncheckedUpdateOneWithoutClientNestedInput = {
    create?: XOR<LockerCreateWithoutClientInput, LockerUncheckedCreateWithoutClientInput>
    connectOrCreate?: LockerCreateOrConnectWithoutClientInput
    upsert?: LockerUpsertWithoutClientInput
    disconnect?: LockerWhereInput | boolean
    delete?: LockerWhereInput | boolean
    connect?: LockerWhereUniqueInput
    update?: XOR<XOR<LockerUpdateToOneWithWhereWithoutClientInput, LockerUpdateWithoutClientInput>, LockerUncheckedUpdateWithoutClientInput>
  }

  export type ClientServiceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientServiceCreateWithoutClientInput, ClientServiceUncheckedCreateWithoutClientInput> | ClientServiceCreateWithoutClientInput[] | ClientServiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientServiceCreateOrConnectWithoutClientInput | ClientServiceCreateOrConnectWithoutClientInput[]
    upsert?: ClientServiceUpsertWithWhereUniqueWithoutClientInput | ClientServiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientServiceCreateManyClientInputEnvelope
    set?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    disconnect?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    delete?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    connect?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    update?: ClientServiceUpdateWithWhereUniqueWithoutClientInput | ClientServiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientServiceUpdateManyWithWhereWithoutClientInput | ClientServiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientServiceScalarWhereInput | ClientServiceScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutLockerInput = {
    create?: XOR<ClientCreateWithoutLockerInput, ClientUncheckedCreateWithoutLockerInput>
    connectOrCreate?: ClientCreateOrConnectWithoutLockerInput
    connect?: ClientWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUpdateOneWithoutLockerNestedInput = {
    create?: XOR<ClientCreateWithoutLockerInput, ClientUncheckedCreateWithoutLockerInput>
    connectOrCreate?: ClientCreateOrConnectWithoutLockerInput
    upsert?: ClientUpsertWithoutLockerInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutLockerInput, ClientUpdateWithoutLockerInput>, ClientUncheckedUpdateWithoutLockerInput>
  }

  export type ClientServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<ClientServiceCreateWithoutServiceInput, ClientServiceUncheckedCreateWithoutServiceInput> | ClientServiceCreateWithoutServiceInput[] | ClientServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ClientServiceCreateOrConnectWithoutServiceInput | ClientServiceCreateOrConnectWithoutServiceInput[]
    createMany?: ClientServiceCreateManyServiceInputEnvelope
    connect?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
  }

  export type ClientServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ClientServiceCreateWithoutServiceInput, ClientServiceUncheckedCreateWithoutServiceInput> | ClientServiceCreateWithoutServiceInput[] | ClientServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ClientServiceCreateOrConnectWithoutServiceInput | ClientServiceCreateOrConnectWithoutServiceInput[]
    createMany?: ClientServiceCreateManyServiceInputEnvelope
    connect?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
  }

  export type ClientServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ClientServiceCreateWithoutServiceInput, ClientServiceUncheckedCreateWithoutServiceInput> | ClientServiceCreateWithoutServiceInput[] | ClientServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ClientServiceCreateOrConnectWithoutServiceInput | ClientServiceCreateOrConnectWithoutServiceInput[]
    upsert?: ClientServiceUpsertWithWhereUniqueWithoutServiceInput | ClientServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ClientServiceCreateManyServiceInputEnvelope
    set?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    disconnect?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    delete?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    connect?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    update?: ClientServiceUpdateWithWhereUniqueWithoutServiceInput | ClientServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ClientServiceUpdateManyWithWhereWithoutServiceInput | ClientServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ClientServiceScalarWhereInput | ClientServiceScalarWhereInput[]
  }

  export type ClientServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ClientServiceCreateWithoutServiceInput, ClientServiceUncheckedCreateWithoutServiceInput> | ClientServiceCreateWithoutServiceInput[] | ClientServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ClientServiceCreateOrConnectWithoutServiceInput | ClientServiceCreateOrConnectWithoutServiceInput[]
    upsert?: ClientServiceUpsertWithWhereUniqueWithoutServiceInput | ClientServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ClientServiceCreateManyServiceInputEnvelope
    set?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    disconnect?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    delete?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    connect?: ClientServiceWhereUniqueInput | ClientServiceWhereUniqueInput[]
    update?: ClientServiceUpdateWithWhereUniqueWithoutServiceInput | ClientServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ClientServiceUpdateManyWithWhereWithoutServiceInput | ClientServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ClientServiceScalarWhereInput | ClientServiceScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutServicesInput = {
    create?: XOR<ClientCreateWithoutServicesInput, ClientUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutServicesInput
    connect?: ClientWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutClientsInput = {
    create?: XOR<ServiceCreateWithoutClientsInput, ServiceUncheckedCreateWithoutClientsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutClientsInput
    connect?: ServiceWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ClientCreateWithoutServicesInput, ClientUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutServicesInput
    upsert?: ClientUpsertWithoutServicesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutServicesInput, ClientUpdateWithoutServicesInput>, ClientUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<ServiceCreateWithoutClientsInput, ServiceUncheckedCreateWithoutClientsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutClientsInput
    upsert?: ServiceUpsertWithoutClientsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutClientsInput, ServiceUpdateWithoutClientsInput>, ServiceUncheckedUpdateWithoutClientsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ClientCreateWithoutTrainerInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    birthday: string
    phone: string
    email: string
    is_active?: boolean
    locker_id?: string | null
    locker?: LockerCreateNestedOneWithoutClientInput
    services?: ClientServiceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutTrainerInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    birthday: string
    phone: string
    email: string
    is_active?: boolean
    locker_id?: string | null
    locker?: LockerUncheckedCreateNestedOneWithoutClientInput
    services?: ClientServiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutTrainerInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTrainerInput, ClientUncheckedCreateWithoutTrainerInput>
  }

  export type ClientCreateManyTrainerInputEnvelope = {
    data: ClientCreateManyTrainerInput | ClientCreateManyTrainerInput[]
  }

  export type ClientUpsertWithWhereUniqueWithoutTrainerInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutTrainerInput, ClientUncheckedUpdateWithoutTrainerInput>
    create: XOR<ClientCreateWithoutTrainerInput, ClientUncheckedCreateWithoutTrainerInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutTrainerInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutTrainerInput, ClientUncheckedUpdateWithoutTrainerInput>
  }

  export type ClientUpdateManyWithWhereWithoutTrainerInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutTrainerInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    surname?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    patronymic?: StringNullableFilter<"Client"> | string | null
    birthday?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    is_active?: BoolFilter<"Client"> | boolean
    trainer_id?: StringNullableFilter<"Client"> | string | null
    locker_id?: StringNullableFilter<"Client"> | string | null
  }

  export type TrainerCreateWithoutClientsInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    status?: string
  }

  export type TrainerUncheckedCreateWithoutClientsInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    phone: string
    status?: string
  }

  export type TrainerCreateOrConnectWithoutClientsInput = {
    where: TrainerWhereUniqueInput
    create: XOR<TrainerCreateWithoutClientsInput, TrainerUncheckedCreateWithoutClientsInput>
  }

  export type LockerCreateWithoutClientInput = {
    id?: string
    number: number
  }

  export type LockerUncheckedCreateWithoutClientInput = {
    id?: string
    number: number
  }

  export type LockerCreateOrConnectWithoutClientInput = {
    where: LockerWhereUniqueInput
    create: XOR<LockerCreateWithoutClientInput, LockerUncheckedCreateWithoutClientInput>
  }

  export type ClientServiceCreateWithoutClientInput = {
    service: ServiceCreateNestedOneWithoutClientsInput
  }

  export type ClientServiceUncheckedCreateWithoutClientInput = {
    service_id: string
  }

  export type ClientServiceCreateOrConnectWithoutClientInput = {
    where: ClientServiceWhereUniqueInput
    create: XOR<ClientServiceCreateWithoutClientInput, ClientServiceUncheckedCreateWithoutClientInput>
  }

  export type ClientServiceCreateManyClientInputEnvelope = {
    data: ClientServiceCreateManyClientInput | ClientServiceCreateManyClientInput[]
  }

  export type TrainerUpsertWithoutClientsInput = {
    update: XOR<TrainerUpdateWithoutClientsInput, TrainerUncheckedUpdateWithoutClientsInput>
    create: XOR<TrainerCreateWithoutClientsInput, TrainerUncheckedCreateWithoutClientsInput>
    where?: TrainerWhereInput
  }

  export type TrainerUpdateToOneWithWhereWithoutClientsInput = {
    where?: TrainerWhereInput
    data: XOR<TrainerUpdateWithoutClientsInput, TrainerUncheckedUpdateWithoutClientsInput>
  }

  export type TrainerUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TrainerUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LockerUpsertWithoutClientInput = {
    update: XOR<LockerUpdateWithoutClientInput, LockerUncheckedUpdateWithoutClientInput>
    create: XOR<LockerCreateWithoutClientInput, LockerUncheckedCreateWithoutClientInput>
    where?: LockerWhereInput
  }

  export type LockerUpdateToOneWithWhereWithoutClientInput = {
    where?: LockerWhereInput
    data: XOR<LockerUpdateWithoutClientInput, LockerUncheckedUpdateWithoutClientInput>
  }

  export type LockerUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type LockerUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type ClientServiceUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientServiceWhereUniqueInput
    update: XOR<ClientServiceUpdateWithoutClientInput, ClientServiceUncheckedUpdateWithoutClientInput>
    create: XOR<ClientServiceCreateWithoutClientInput, ClientServiceUncheckedCreateWithoutClientInput>
  }

  export type ClientServiceUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientServiceWhereUniqueInput
    data: XOR<ClientServiceUpdateWithoutClientInput, ClientServiceUncheckedUpdateWithoutClientInput>
  }

  export type ClientServiceUpdateManyWithWhereWithoutClientInput = {
    where: ClientServiceScalarWhereInput
    data: XOR<ClientServiceUpdateManyMutationInput, ClientServiceUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientServiceScalarWhereInput = {
    AND?: ClientServiceScalarWhereInput | ClientServiceScalarWhereInput[]
    OR?: ClientServiceScalarWhereInput[]
    NOT?: ClientServiceScalarWhereInput | ClientServiceScalarWhereInput[]
    client_id?: StringFilter<"ClientService"> | string
    service_id?: StringFilter<"ClientService"> | string
  }

  export type ClientCreateWithoutLockerInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    birthday: string
    phone: string
    email: string
    is_active?: boolean
    locker_id?: string | null
    trainer?: TrainerCreateNestedOneWithoutClientsInput
    services?: ClientServiceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutLockerInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    birthday: string
    phone: string
    email: string
    is_active?: boolean
    trainer_id?: string | null
    locker_id?: string | null
    services?: ClientServiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutLockerInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutLockerInput, ClientUncheckedCreateWithoutLockerInput>
  }

  export type ClientUpsertWithoutLockerInput = {
    update: XOR<ClientUpdateWithoutLockerInput, ClientUncheckedUpdateWithoutLockerInput>
    create: XOR<ClientCreateWithoutLockerInput, ClientUncheckedCreateWithoutLockerInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutLockerInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutLockerInput, ClientUncheckedUpdateWithoutLockerInput>
  }

  export type ClientUpdateWithoutLockerInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    locker_id?: NullableStringFieldUpdateOperationsInput | string | null
    trainer?: TrainerUpdateOneWithoutClientsNestedInput
    services?: ClientServiceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutLockerInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    trainer_id?: NullableStringFieldUpdateOperationsInput | string | null
    locker_id?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ClientServiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientServiceCreateWithoutServiceInput = {
    client: ClientCreateNestedOneWithoutServicesInput
  }

  export type ClientServiceUncheckedCreateWithoutServiceInput = {
    client_id: string
  }

  export type ClientServiceCreateOrConnectWithoutServiceInput = {
    where: ClientServiceWhereUniqueInput
    create: XOR<ClientServiceCreateWithoutServiceInput, ClientServiceUncheckedCreateWithoutServiceInput>
  }

  export type ClientServiceCreateManyServiceInputEnvelope = {
    data: ClientServiceCreateManyServiceInput | ClientServiceCreateManyServiceInput[]
  }

  export type ClientServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: ClientServiceWhereUniqueInput
    update: XOR<ClientServiceUpdateWithoutServiceInput, ClientServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<ClientServiceCreateWithoutServiceInput, ClientServiceUncheckedCreateWithoutServiceInput>
  }

  export type ClientServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: ClientServiceWhereUniqueInput
    data: XOR<ClientServiceUpdateWithoutServiceInput, ClientServiceUncheckedUpdateWithoutServiceInput>
  }

  export type ClientServiceUpdateManyWithWhereWithoutServiceInput = {
    where: ClientServiceScalarWhereInput
    data: XOR<ClientServiceUpdateManyMutationInput, ClientServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type ClientCreateWithoutServicesInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    birthday: string
    phone: string
    email: string
    is_active?: boolean
    locker_id?: string | null
    trainer?: TrainerCreateNestedOneWithoutClientsInput
    locker?: LockerCreateNestedOneWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutServicesInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    birthday: string
    phone: string
    email: string
    is_active?: boolean
    trainer_id?: string | null
    locker_id?: string | null
    locker?: LockerUncheckedCreateNestedOneWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutServicesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutServicesInput, ClientUncheckedCreateWithoutServicesInput>
  }

  export type ServiceCreateWithoutClientsInput = {
    id: string
    name: string
    price: number
  }

  export type ServiceUncheckedCreateWithoutClientsInput = {
    id: string
    name: string
    price: number
  }

  export type ServiceCreateOrConnectWithoutClientsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutClientsInput, ServiceUncheckedCreateWithoutClientsInput>
  }

  export type ClientUpsertWithoutServicesInput = {
    update: XOR<ClientUpdateWithoutServicesInput, ClientUncheckedUpdateWithoutServicesInput>
    create: XOR<ClientCreateWithoutServicesInput, ClientUncheckedCreateWithoutServicesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutServicesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutServicesInput, ClientUncheckedUpdateWithoutServicesInput>
  }

  export type ClientUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    locker_id?: NullableStringFieldUpdateOperationsInput | string | null
    trainer?: TrainerUpdateOneWithoutClientsNestedInput
    locker?: LockerUpdateOneWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    trainer_id?: NullableStringFieldUpdateOperationsInput | string | null
    locker_id?: NullableStringFieldUpdateOperationsInput | string | null
    locker?: LockerUncheckedUpdateOneWithoutClientNestedInput
  }

  export type ServiceUpsertWithoutClientsInput = {
    update: XOR<ServiceUpdateWithoutClientsInput, ServiceUncheckedUpdateWithoutClientsInput>
    create: XOR<ServiceCreateWithoutClientsInput, ServiceUncheckedCreateWithoutClientsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutClientsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutClientsInput, ServiceUncheckedUpdateWithoutClientsInput>
  }

  export type ServiceUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ClientCreateManyTrainerInput = {
    id?: string
    surname: string
    name: string
    patronymic?: string | null
    birthday: string
    phone: string
    email: string
    is_active?: boolean
    locker_id?: string | null
  }

  export type ClientUpdateWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    locker_id?: NullableStringFieldUpdateOperationsInput | string | null
    locker?: LockerUpdateOneWithoutClientNestedInput
    services?: ClientServiceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    locker_id?: NullableStringFieldUpdateOperationsInput | string | null
    locker?: LockerUncheckedUpdateOneWithoutClientNestedInput
    services?: ClientServiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    patronymic?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    locker_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientServiceCreateManyClientInput = {
    service_id: string
  }

  export type ClientServiceUpdateWithoutClientInput = {
    service?: ServiceUpdateOneRequiredWithoutClientsNestedInput
  }

  export type ClientServiceUncheckedUpdateWithoutClientInput = {
    service_id?: StringFieldUpdateOperationsInput | string
  }

  export type ClientServiceUncheckedUpdateManyWithoutClientInput = {
    service_id?: StringFieldUpdateOperationsInput | string
  }

  export type ClientServiceCreateManyServiceInput = {
    client_id: string
  }

  export type ClientServiceUpdateWithoutServiceInput = {
    client?: ClientUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ClientServiceUncheckedUpdateWithoutServiceInput = {
    client_id?: StringFieldUpdateOperationsInput | string
  }

  export type ClientServiceUncheckedUpdateManyWithoutServiceInput = {
    client_id?: StringFieldUpdateOperationsInput | string
  }



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