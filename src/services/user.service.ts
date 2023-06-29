import API from "../config/API.ts";

export const getUsersService = () => {
    return API.get<ReadonlyArray<IUser>>("/users", {params: {_sort: "name"}}).then(res => res.data);
};

export const getUserService = (userId?: number): Promise<IUser> => {
    return API.get<ReadonlyArray<IUser>>("/users", {params: {id: userId}}).then(res => res.data[0]);
};