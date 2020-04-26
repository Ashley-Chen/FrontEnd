/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// class listNode {
//     constructor(key){
//         this.key = key;
//         this.next = null;
//     }
// }
// class List {
//     constructor(){
//         this.head = null;
//         this.length = 0;
//     }
//     static createNode(key){
//         return new listNode(key)
//     }

// }
var addTwoNumbers = function(l1, l2) {
    console.log(l1)
    let result = new ListNode('head');
    let flag = 0;
    let temp = result;
    while(l1 || l2){
        const add = (l1 && l1.val || 0) + (l2 && l2.val || 0 )+ flag;
        if(add >= 10){
            temp.next = new ListNode(add % 10)
            flag = 1;
        } else{
            temp.next = new ListNode(add);
            flag = 0;
        }
        temp = temp.next
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(flag) temp.next = new ListNode(flag);
    return result.next
};
// @lc code=end

