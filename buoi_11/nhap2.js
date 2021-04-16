var myArray = ["Nam", "Nguyen", "Huy"];

// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[0]);
// console.log(myArray[1]);

//In mảng trên ra màn hình như sau:
//1. Nam
//2. Nguyen
//3. Huy
// for (var i = 0; i < myArray.length; i++) {
//     document.write(i+1 + "." + myArray[i] + "<br>");
// }

var myArray3 = [1, 4, 2, 5, 8, 2, 11, 55, 5, 155];
//1. sắp xếp mẳng sau theo thứ tự tăng dần và in ra màn hình.
//2. in ra màn hình số lớn nhất trong mảng.
//3. số lớn nhất nhân với số nhỏ nhất trong mảng bằng bao nhiêu.
for(var i=0;i<myArray3.length-1;i++){
      for(var j=myArray3.length-1;j>i;j--)
         if(myArray3[j]<myArray3[j-1]){
            var tmp=myArray3[j];
            myArray3[j]=myArray3[j-1];
            myArray3[j-1]=tmp;
         }
}
console.log(myArray3)

var myArray4 = [
    ['Nam', 1998, 'nam@yahoo.com', '015654458'],
    ['Huong', 2000, 'huong@yahoo.com', '015654458'],
    ['Huy', 1999, 'huy@yahoo.com', '015654958'],
];
