/**
 * /+**
 * /+*
 * 1. Các Lỗi
 * -- SyntaxError: Lỗi cú pháp
*/

// variable khai báo biến
// var age = 18;

/* Một số hàm built-in
    1.alert
    2.console
    3.confirm
    4.prompt // bảng nhập có input
    5.setTimeout chạy 1 lần
    6.setInterVar chạy vĩnh viễn
    //////
    setTimeout(function() {
        console.log("Ban qua gioi")
    }, 1000 )
 */


/** Giới thiệu về toán tử trong javascript
 * 1. Toán tử số học - Arithmetic      ||  var a = 1 + 2;  console.log(a)
 * 2. Toán tử gán - Assignment         ||  var fullName = 'Nguyen Minh Hieu';  //dấu = là toán tử gán
 * 3. Toán tử so sánh - Comparison
        var a = 3;
        var b = 4;
        if (a > b) {
            console.log("Dung")
        } else {
            console.log("Sai") 
        }
 * 4. Toán tử logic - Logical
        var a = 6;
        var b = 7;
        if (a < b && a > 0) {
            console.log("Dap an dung")
        } else {
            console.log("Dap an sai")
        }
*/


/** Toán tử số học
  +         --> Cộng 
  -         --> Trừ
  *         --> Nhân
  **        --> Lũy thừa
  /         --> Chia
  %         --> Chia lấy số dư
                var a = 6;
                var b = 5;
                var c = a % b;
                console.log(c);
                ===> Đáp án: dư 1, cộng trừ nhân, chia, lũy thừa cũng thế
  ++        --> Tăng 1 giá trị số    ||Mỗi dòng ++ được thực ti giá trị sẽ tăng lên 1 số
                var a = 5;
                a++;
                a++;
                console.log(a);  
                ===> Đáp án: 7, trừ cũng như vậy
  --        --> Giảm 1 giá trị số


    var age = 19;
    var nextAge = age;
    nextAge++;
    console.log(nextAge) ==>20
*/

/** Toán tử gán
 * Toán tử          Ví dụ           Tương đương
   =                x = y           x = y
   +=               x += y          x = x + y
   -=               x -= y          x = x - y
   *=               x *= y          x = x * y
   /=               x /= y          x = x / y
   **=              x **= y         x = x ** y
   %=               x %= y          x = x % y
    VD: var x = 5;
        x += 2;
        console.log(x);   ==> x = 7, các cái khác cũng tương tự
    VD2: var a = 1;
         var b = 2;
         a +=2;
         b -=3;
         var c = ab;
         var d = ab;
         console.log(c, d); ==> c = 2; d = 4
 */

/** Toán tử ++ và --
 * Dùng làm tiền tố: ++variable (toán tử nằm trước biến)
    var b = 1;
    console.log(++b); ==>2 //tăng ngay lên 1
    console.log(b);   ==>2 //trả về giá trị đã tăng lên 1

 * Dùng làm hậu tố: variable++ (toán tử nằm sau biến)
    var a = 1;
    console.log(a++);  ==>1 //tăng giá trị lên 1 nhưng in ra vẫn giá trị cũ  
    console.log(a);    ==>2 //trả về giá trị đã tăng

 ==> VD: 
    var number = 4;
    var ouput = number++ *2 + ++number *2;
                  4      *2 +   6      *2  
    console.log("Ouput", ouput); ==> 20

    var input = ++number *2 + number++ *2;
                  7      *2 +   7      *2
    console.log("Input", input); ==> 28
*/

var x= 5;

var a = 5 + x++ +10; //5+5+10
var b = 5 + ++x +10; //5+7+10
var c = 5 + x-- +10; //5+7+10
var d = 5 + --x +10; //5+5+10

console.log(a, b, c, d);
