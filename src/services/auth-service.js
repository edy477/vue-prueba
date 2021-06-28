import {api} from "boot/axios";
import User from "src/models/user";

let user = {
  construct(username, accessToken){
    this.username = username;
    this.acessToken =accessToken;
  }

}
class AuthService {
  login(user) {
    let data ={
      password: user.password,
      username: user.username,
      roles: [
        "ROLE_ADMIN"
      ]

    };


    /*const params = new URLSearchParams({
      password: user.password,
      username: user.username

    }).toString();*/
   // let url = '/signin' + params;
    return api
      .post( '/users/signin', data

      )
      .then(response => {
        console.log(response);
        if (response.data) {


          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('username', JSON.stringify(data.username));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  enroll(enrollment,course_id) {
    /*const params = new URLSearchParams({
      course_id: course_id,
    })
    let url  = '/users/' + name
    return api.post( '/signup',
      user);*/
  }

  register(user) {
    return api.post( '/users/signup',
      user);
  }
}

export default new AuthService();
