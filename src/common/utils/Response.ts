export interface IResponse {
    code: number
    errors: Array<string>
    data: any
}

interface IStatusCodes {
    asObject: Function
    asArray: Function
}

interface IObjectCode {
    code: number
    msg: string
}

interface IStatusCodesObject {
    WIP: IObjectCode
    THROW: IObjectCode
    OK: IObjectCode
    NOT_FOUND: IObjectCode
    ID_REQUIRED: IObjectCode
    LEXICON_NOT_FOUND: IObjectCode
    INPUT_NOT_FOUND: IObjectCode
    ENTITY_NOT_FOUND: IObjectCode
    LEXICON_INPUT_UPDATE_FAILURE: IObjectCode
    LEXICON_CREATION_FAILURE: IObjectCode
    LEXICON_REMOVAL_FAILURE: IObjectCode
    LEXICON_ENTITY_EXISTS: IObjectCode
    LEXICON_ENTITY_UPDATE_FAILURE: IObjectCode
    ENTITY_LABEL_NOT_FOUND: IObjectCode
    ENTITY_LABEL_EXISTS: IObjectCode
    THREAD_NUMBER_INVALID_EN_US: IObjectCode
    THREAD_CREATE_FAILURE: IObjectCode
    THREAD_REMOVE_FAILURE: IObjectCode
    THREAD_UPDATE_FAILURE: IObjectCode
}

export const STATUS_CODES: IStatusCodes = (() => {
    const codes: IStatusCodesObject = {
        WIP: {
            code: -1,
            msg: `WIP`
        },
        THROW: {
            code: -1,
            msg: `Unable to complete request`
        },
        OK: {
            code: 200,
            msg: `Ok`
        },
        NOT_FOUND: {
            code: 404,
            msg: `Not found`
        },
        ID_REQUIRED: {
            code: 404.6,
            msg: `An "_id" is required, but not provided.`
        },
        LEXICON_NOT_FOUND: {
            code: 404.1,
            msg: `Lexicon not found`
        },
        INPUT_NOT_FOUND: {
            code: 404.2,
            msg: `Lexicon input not found`
        },
        ENTITY_NOT_FOUND: {
            code: 404.3,
            msg: `Lexicon entity not found`
        },
        LEXICON_INPUT_UPDATE_FAILURE: {
            code: 404.4,
            msg: `Lexicon not updated`
        },
        LEXICON_CREATION_FAILURE: {
            code: 404.5,
            msg: `Lexicon not found`
        },
        LEXICON_REMOVAL_FAILURE: {
            code: 500.1,
            msg: `Lexicon not unable to be removed`
        },
        LEXICON_ENTITY_EXISTS: {
            code: 500.2,
            msg: `Lexicon entity already exists`
        },
        LEXICON_ENTITY_UPDATE_FAILURE: {
            code: 500.3,
            msg: `Lexicon entity already exists`
        },
        ENTITY_LABEL_NOT_FOUND: {
            code: 404.6,
            msg: `Entity not found`
        },
        ENTITY_LABEL_EXISTS: {
            code: 404.7,
            msg: `Entity already exists`
        },
        THREAD_NUMBER_INVALID_EN_US: {
            code: 500.4,
            msg: `Invalid number detected, only use en-US phone numbers.`
        },
        THREAD_CREATE_FAILURE: {
            code: 500.5,
            msg: `Unable to create a new thread.`
        },
        THREAD_REMOVE_FAILURE: {
            code: 500.6,
            msg: `Unable to remove thread.`
        },
        THREAD_UPDATE_FAILURE: {
            code: 500.7,
            msg: `Unable to update thread.`
        }
    };

    return {
        asObject(): IStatusCodesObject {
            return codes;
        },
        asArray(): any {
            const array: any = {};

            for (let code in codes)
                array[code] = Object.values(codes[code]);

            return array;
        },
    }
})()

export default class {
    private resolve: Function | null = null;
    private response: IResponse = {
        code: 0,
        errors: [],
        data: null
    };

    constructor(resolve) {
        this.resolve = resolve;
    }

    set code(value: number) {
        this.response.code = value;
    }

    set errors(value: Array<string>) {
        this.response.errors = value;
    }

    set data(value: any) {
        this.response.data = value;
    }

    get code(): number {
        return this.response.code;
    }

    get errors(): Array<string> {
        return this.response.errors;
    }

    get data(): any {
        return this.response.data;
    }

    async setError(code: number, msg: string): Promise<void> {
        this.code = code;
        this.errors = [ msg ];
    }

    async setData(data: any): Promise<void> {
        this.data = data;
        this.code = 200;
    }

    async send(code: number | null = null): Promise<void> {
        if (code != null)
            this.code = code;

        if (this.resolve != null)
            this.resolve({...this.response});
    }
}