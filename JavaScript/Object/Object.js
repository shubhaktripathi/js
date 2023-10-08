var car={
          name:"Dzire",
          type:"4 wheeler",
          color:"gray",
          d:function drive(){
              console.log('this is my dzire');
          }
}
console.log(car.name)
console.log(car["type"])
console.log(car.d())
console.log(Object.keys(car))
console.log(Object.values(car))
console.log(Object.entries(car))
var user = {
  firstName: "Shubham",
  lastName: "Tripathi",
  role: "Admin",
  facebookSignedIn: true,
  courseList: [],
  // function
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },

  getCourseCount: function () {
    return `${this.firstName} is enrolled in  total of ${this.courseList.length} courses and courses are : ${this.courseList}`;
  },
};

var courseList = true;

console.log(user.firstName);
console.log(user["lastName"]);
console.table(user);
console.log(user.getCourseCount());
user.buyCourse("Java Script");
user.buyCourse("Java ");
console.log(user.getCourseCount());

// Global Object

console.log(window==this);

a=innerHeight;


