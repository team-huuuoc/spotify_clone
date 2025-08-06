import {AxiosError, AxiosResponse} from "axios";
import React, {useEffect} from "react";
import axiosInstance from "@/configs/axios";

type Methods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
type FetchParams = {
    path: string;
    method: Methods;
    body?: unknown;
    config?: import("axios").AxiosRequestConfig
}
type State<T> =
    | {data: null,  isLoading: boolean, error: null}
    | {data: null,  isLoading: boolean, error: AxiosError}
    | {data: T,  isLoading: boolean, error: null}
type Action<T> =
    | {type: "loading", error: undefined}
    | {type: "success", data: T}
    | {type: "error", error: AxiosError}

const fetch = async <T>(
    path: string,
    method: Methods,
    body? : unknown,
    config? : import("axios").AxiosRequestConfig
) : Promise<AxiosResponse<T>> => {
    switch (method) {
        case "GET":
            return await axiosInstance.get(path, config)
        case "POST":
            return await axiosInstance.post(path, body,  config)
        case "PUT":
            return await axiosInstance.put(path, body, config)
        case "PATCH":
            return await axiosInstance.patch(path, body, config)
        case "DELETE":
            return await axiosInstance.delete(path, config)
        default:
            throw new Error("Method not supported")
    }
}
function reduce<T>(state: State<T>, action: Action<T>) {
    switch (action.type) {
        case "loading":
            return {...state, isLoading: true}
        case "success":
            return {data: action.data, isLoading: false, error: null}
        case "error":
            return {data: null, isLoading: false, error: action.error}
    }
}
const useFetch = <T>({path, method, body, config}: FetchParams, reloadKey?: number) => {
    const [state, dispatch] = React.useReducer(reduce<T>,{
        data: null,
        isLoading: false,
        error: null
    })
    useEffect(() => {
        let shouldCancel = false;
        (async () => {
            dispatch({type: "loading", error: undefined})
            try {
                const { data } = await fetch<T>(path, method,  body,  config)
                if (shouldCancel) return;
                dispatch({type: "success", data})
            } catch (error) {
                if (shouldCancel) return;
                const axiosError = error as AxiosError
                dispatch({type: "error", error: axiosError})
                console.error(error);
            }
            return () => {
                shouldCancel = true
            }
        })()
    }, [path,reloadKey]);
    return { state }
};

export default useFetch;
