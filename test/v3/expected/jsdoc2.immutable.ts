/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly '/v1/getUser2': {
    /** UserController.getUser2 */
    readonly get: operations['UserController.getUser2.DjHhjSamaD']
  }
}

export interface components {
  readonly schemas: {
    readonly IUserWithId: components['schemas']['Partial<Pick<IUser,"id">>'] | string
    readonly 'Partial<Pick<IUser,"id">>': {
      readonly id?: number
    }
    readonly IUserWithName: {
      readonly name: string
    }
    readonly IUser: {
      readonly id: number
      readonly name?: string
    }
  }
}

export interface operations {
  /** UserController.getUser2 */
  readonly 'UserController.getUser2.DjHhjSamaD': {
    readonly parameters: {
      readonly query: {
        readonly param1?: number
        readonly param2?: string | components['schemas']['IUserWithId']
        readonly param3?: string | components['schemas']['IUserWithName']
      }
    }
    readonly responses: {
      /** Successful response */
      readonly 200: {
        readonly content: {
          readonly 'application/json': unknown
        }
      }
    }
  }
}

export interface external {}