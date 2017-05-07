const OCW_URL = 'http://ocw5.mit.edu/';

export default {
  Departments() {
    return fetch(`${OCW_URL}courses/all_departments.json`)
      .then(resp => resp.json(), err => console.error(err));
  },

  CourseList(department) {
    return fetch(`${OCW_URL}courses/${department}/${department}.json`)
      .then(resp => resp.json(), err => console.error(err));
  } 
}