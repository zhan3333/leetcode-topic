/**
 * Created by 39096 on 2017/8/23.
 */
var addTwoNumbers = function (l1, l2) {
    var a = 0
    var ret = []
    while (true) {
        var l1_val = l1.val ? l1.val : 0
        var l2_val = l2.val ? l2.val : 0
        var val_sum = l1_val + l2_val
        console.log(l1_val, l2_val, val_sum, a)
        if (a === 1) val_sum += 1
        a = 0
        var k = val_sum % 10
        var j = parseInt(val_sum / 10)
        if (j > 0) {
            a = 1
        }
        ret.push(k)
        if (l1.next === null && l2.next === null && a === 0) break
        if (l1.next !== null) {
            l1 = l1.next
        } else {
            l1 = {
                val: 0,
                next: null
            }
        }
        if (l2.next !== null) {
            l2 = l2.next
        } else {
            l2 = {
                val: 0,
                next: null
            }
        }
    }
    return ret
};

// var l1 = {
//     val: 2,
//     next: {
//         val: 4,
//         next: {
//             val: 3,
//             next: null
//         }
//     }
// }
//
// var l2 = {
//     val: 5,
//     next: {
//         val: 6,
//         next: {
//             val: 4,
//             next: null
//         }
//     }
// }

var l1 = {
    val: 5,
    next: null
}

var l2 = {
    val: 5,
    next: null
}

console.log(addTwoNumbers(l1, l2))