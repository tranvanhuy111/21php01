//1. khởi tạo danh sách gồm 4 học viên 

var student = [
    ['Tran Huy', '28', 'huytran@gmail.com', 'ha tinh'],
    ['Nguyen A', '29', 'nguyena@gmail.com', 'nghe an'],
    ['Pham B', '30', 'phama@gmail.com', 'quang binh'],
    ['Bui C', '27', 'buia@gmail.com', 'da nang']
];

// document.write(student[0])
// document.write(student[1])
// document.write(student[2])
// document.write(student[3])
document.write('<h3>Danh sach hoc vien ban dau </h3>')
for (var i=0; i<student.length; i++){
    document.write(i+1+ '. ')
    for (var j = 0; j<student[i].length;j++){
        if (j == student[i].length-1){
            document.write(student[i][j]+ '<br/>')
        } else{
            document.write(student[i][j]+ ' - ')
        }
    }
}


document.write('<h3>Danh sach hoc vien sau khi them 2 thanh vien</h3>');
var a= ['bui D', '34', 'buib@yahoo.com', 'ha noi'];
student.push(a)
var a= ['bui E', '31', 'buic@gmail.com', 'hai phong'];
student.push(a)
for (var i=0; i<student.length; i++){
    document.write(i+1+ '. ')
    for (var j = 0; j<student[i].length;j++){
        if (j == student[i].length-1){
            document.write(student[i][j]+ '<br/>')
        } else{
            document.write(student[i][j]+ ' - ')
        }
    }
}


document.write('<h3>Danh sach hoc vien sau khi đổi tên Huy thành tên Hùng</h3>');
for (var i=0; i<student.length; i++){
    var lastName = student[i][0].slice(student[i][0].lastIndexOf(' ')+1)
    if (lastName == 'Huy'){
        var firstName = student[i][0].slice(0, student[i][0].lastIndexOf(' ')+1)
        student[i][0] = firstName + 'Hung';
    }
}

for (var i=0; i<student.length; i++){
    document.write(i+1+ '. ')
    for (var j = 0; j<student[i].length;j++){
        if (j == student[i].length-1){
            document.write(student[i][j]+ '<br/>')
        } else{
            document.write(student[i][j]+ ' - ')
        }
    }
}

document.write('<h3>Danh sách học viên sau khi đổi que quan da nang thành tên Hai phong</h3>');
for (var i=0; i<student.length; i++){
    var quequan = student[i][3].slice(student[i][3].queIndexOf(' ')+1)
    if (quequan == 'da nang'){
        var quequan = student[i][3].slice(3, student[i][3].queIndexOf(' ')+1)
        student[i][3] = quequan + 'hai phong';
    }
}

for (var i=0; i<student.length; i++){
    document.write(i+1+ '. ')
    for (var j = 0; j<student[i].length;j++){
        if (j == student[i].length-1){
            document.write(student[i][j]+ '<br/>')
        } else{
            document.write(student[i][j]+ ' - ')
        }
    }
}