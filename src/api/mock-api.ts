import { AxiosResponse } from 'axios';

/**
 * @param payload a json with a defined type
 * @returns a promise
 * 
 * Example of how to call the function:
 * return mock(jsonName as T)
 */
const mock = <T>(payload: T) => {
    return new Promise<AxiosResponse<T>>((resolve) =>
        setTimeout(() => {
            resolve({
                data: payload,
                status: 200,
                statusText: 'Success',
                headers: {},
                config: {},
            });
        }, 2000)
    );
};

export default mock;
