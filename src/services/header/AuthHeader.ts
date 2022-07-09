class AuthHeader {
    header(){
        const userStorage = localStorage.getItem("user");
        let user = null;
        if(userStorage){
            user = JSON.parse(userStorage);
        };
        if(user && user.JWTtoken){
            return { 'x-access-token': user.JWTtoken};
        }
        return { 'x-access-token': null };
    }
}

export default new AuthHeader();