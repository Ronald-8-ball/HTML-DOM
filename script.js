var student = {
name : 'Ronald',
age : '13',
grade : '10',
hobby : 'Football',
fav_sport : 'Football'
};
var color = ["White","Black","Red","Green","Blue"]
document.write("Student name is : " + student.name,"<br>","Student favourite sport is : " + student.fav_sport,"<br>");
document.write("Before Poping the colours are: " +color.join("^"),"<br>");
document.write("My favourite colour is : " +color[4],"<br>");
document.write("After poping the colours are: " +color.join("*"));