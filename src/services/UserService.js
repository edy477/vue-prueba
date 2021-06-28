import {api} from "boot/axios";
import authHeader from './auth-header';
let username = JSON.parse(localStorage.getItem('username'));
let user = JSON.parse(localStorage.getItem('user'));
const config = {
  headers: { Authorization: `Bearer ${user}` }
};
let enrollment ={


}
class UserService {
  response;


  getUserBoard() {

    const config = {
      headers: { Authorization: `Bearer ${user}` }
    };
    const param = new URLSearchParams({
      Username: username
    });
    //let url =  /users/'/mycourses';
    return api
      .get( '/users/'+username+'/mycourses' ,config

      )
      .then(response => {
      //  console.log(response);
        if (response.data.data) {


        //  localStorage.setItem('user', JSON.stringify(response.data));
          //localStorage.setItem('username', JSON.stringify(data.username));
        }

        return response.data;
      });
  }

    enrollCourse(enrollment,course_id) {
    let params = new URLSearchParams({
       course_id: course_id


    });
let url =  username +'/enroll?'+ params;


  return api.post(url,enrollment,config).then(response =>{

    console.log(response.data)
        if(response)
        {
          console.log("Success");
        }

        return response.data;
      });


   // return api.get(API_URL + 'mod', { headers: authHeader() });
  }


}

export default new UserService();
