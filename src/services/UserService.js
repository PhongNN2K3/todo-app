import axios from "axios";

const UserService = () => axios.get("https://reqres.in/api/users?page=1");

export { UserService };
