var words = [['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
['one-hundred', 'two-hundred', 'three-hundred', 'four hundred', 'five-hundred', 'six-hundred', 'seven-hundred',
    'eight-hundred', 'nine-hundred']];


function myFunction() {
    var num = input.value;
    console.log(num);
    var text = document.getElementById('demo');
    if (num > 0 && num <= 999) {
        var temp = num;
        var str1 = '';
        z = 1;
        while (temp != 0) {
            r = temp % 10;
            rem = r * z;
            if (rem < 10 && r != 0) {
                str1 = words[0][r - 1];
                a = rem;
            }
            if (rem == 10 && a == 0) {
                str1 = words[2][r - 1];
                console.log(str1);
            }
            if (rem == 10 && a != 0) {
                str1 = words[1][a - 1];
            }
            if (rem < 100 && rem >= 20) {
                if (str1 != '') {
                    str1 = words[2][r - 1] + '-' + str1;
                }
                else
                    str1 = words[2][r - 1];
            }
            if (rem >= 100) {
                if (str1 != '') {
                    str1 = words[3][r - 1] + ' ' + str1;
                }
                else
                    str1 = words[3][r - 1];
            }
            temp = Math.floor(temp / 10);

            z *= 10;
        }
        text.value = str1;
    }
    else if (num == 0) {
        text.value = 'zero';
    }
    else {
        text.value = 'out of range';
    }
}
