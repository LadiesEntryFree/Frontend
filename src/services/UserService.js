import $api from "../http";

export default class UserService {
    static async editNickname (uid, nickname) {
        $api.post('/edit', {uid, nickname})
    }
}