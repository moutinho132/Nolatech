import { IUser, IUserUpdate } from "../interfaces/user.interface";
import { instance } from "./base.api";

const endpoint = "users";

export const users = {
    getAll: function({ page = 1, count = 1 }: { page?: number; count?: number } = {}) {
        return instance.get(`${endpoint}/all?page=${page}&count=${count}`);
    },

    getFindUsers: function() {
        return instance.get(`${endpoint}/all`);
    },

    createUser: function(userData: IUser) {
        return instance.post(`${endpoint}/register`, userData);
    },

    updateUser: function(id: string, userData: Partial<IUserUpdate>) {
        return instance.put(`${endpoint}/${id}`, userData);
    },
    
    getUserById: function(id: string) {
        return instance.get(`${endpoint}/${id}`);
    },

    deleteUser: function(id: string) {
        return instance.delete(`${endpoint}/${id}`);
    }
};
